package basic

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration._

// Precisa de extender o Simulation para que o Engine entenda essa classe como uma simulação
class TestAmei extends Simulation {

  // HTTP Configuration
  //var httpProtocol = http.baseUrl("https://amei.homolog.kubernetes.sebrae.com.br")

  // Header definition

  val header = Map(
    "Content-Type" -> "application/x-www-form-urlencoded")

  // Datapool
  val csvFeeder = csv("data/datapool.csv").circular

  // Scenario definition
  val auth_token = scenario("POST Authentication")

    .feed(csvFeeder)

    // clear cache and cookies
    .exec(flushHttpCache)
    .exec(flushSessionCookies)
    .exec(flushCookieJar)

    .exec(
      http("POST OAuth Req")
        .post("Uri")
        .formParam("username", "${username}")
        .formParam("password", "${password}")
        .formParam("client_id", "client_id")
        .formParam("grant_type", "password")
        .headers(header)
        .check(status.is(200))
        .check(jsonPath("$.access_token").exists.saveAs("access_token")))

  // Simulation definition
  setUp(auth_token.inject(
  //atOnceUsers(2) // inicia os testes com 2 usuários
  constantUsersPerSec(1000) during (60) // 50 usuários por segundo durante 60 segundos
  ))
}