package basic

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration._

// Precisa de extender o Simulation para que o Engine entenda essa classe como uma simulação
class TestScript extends Simulation{
  
    // HTTP Configuration
    var httpProtocol = http.baseUrl("http://computer-database.gatling.io").header("User-Agent", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:80.0) Gecko/20100101 Firefox/80.0")
    
    // Header definition
    var header_1 = Map(
        "Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Encoding" -> "gzip, deflate",
        "Accept-Language" -> "en-US,en;q=0.5"
    )
  
    // Scenario definition
    var scn = scenario("SearchComputer").exec(http("req_1").get("/computers").headers(header_1)).pause(10)
    
    // Simulation definition
    setUp(scn.inject(atOnceUsers(2))).protocols(httpProtocol)
}