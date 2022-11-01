# Tutorial do Gatling

Um tutorial de instalação e uso da ferramenta Gatling para testes de performance, carga e stress.

# Pré-requisitos

* JDK 1.8 ou superior;
* Variável de ambiente JAVA_HOME configurada;
* IDE com o plugin de scala instalado;
* Apache Maven instalado e a variavel de ambiente configurada.

# Instalação

* Realizar o Download do Gatling pelo site oficial: https://gatling.io/
* Após realizar o download descompactar o arquivo
* Acessar a pasta bin e executar o arquivo gatling.bat (Windows) ou gatling.sh (Linux)
* Verificar que serão apresentadas simulações de exemplo
* Selecionar a simulação desejada e confirmar a execução do teste
* Verificar que o relatório foi gerado no repositório results
* Caso os passos anteriores foram executados sem problemas então a ferramenta está com as configurações básicas concluídas

# Estrutura Básica

* Repositorio bin: executavel do gatling e do recorder;
* Repositório results: Relatórios gerados durante a execução dos testes
* Repositório user-filer/simulation: Resultado da gravação realizada pelo Recorder UI, contem scripts scala.

# Recorder UI

Recorde UI é uma ferramenta que grava as interações do usuário com a página WEB para a reprodução dessas ações durante o teste de carga, para utilizar o recorder UI, basta seguir as orientações abaixo:

* Acessar a pasta bin e executar o arquivo recorder.bat (Windows) ou recorder.sh (Linux)
* Verificar que a ferramenta Gatling Recorder foi aberta

# Criação do projeto Maven 

* Criar um repositório onde ficará o projeto com os scripts Gatling
* No terminal, dentro do repositório criado, executar o comando
  `mvn archetype:generate`
* Ao executar o comando, serão listados todos os archetype e será pedido para que digite o archetype desejado
* Digite a "gatling"
* Será retornado apenas o registro
  `io.gatling.highcharts:gatling-highcharts-maven-archetype (gatling-highcharts-maven-archetype)`
* Selecionar o registro acima
* Após selecionar o archetype serão listadas as versões para escolha
* Selecionar a versão desejada (utilizei a 3.0.2)
* Informar o "groupId"
  Ex: com.test.gatling
* Informar o "artfactId"
  Ex: GatlingProjectDemo
* Informar a "version"
  Ex: 1.0-SNAPSHOT
* Informar o "Package"
* Confirmar a informações
* Nessa etapa o projeto maven foi criado e a build deve ser concluída com sucesso

# Configuração Eclipse

* https://www.blazemeter.com/blog/how-to-set-up-and-run-your-gatling-tests-with-eclipse

# Estrutura de script Gatling

* HTTP Protocol Configuration
* Header Definition
* Scenario Definition
* Simulation Definition 

```scala
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

```

# Material de Referência

* https://gatling.io/
* https://www.udemy.com/course/performance-testing-using-gatling/
* https://www.blazemeter.com/blog/how-to-set-up-and-run-your-gatling-tests-with-eclipse
* https://www.youtube.com/watch?v=-tk24HMG41g&list=PL0tG0nwG7UJlzSW1R1uiGY9cCHWaYSzA-&index=10
* https://www.blazemeter.com/blog/performance-testing-vs-load-testing-vs-stress-testing
* https://medium.com/socialbase/usando-gatling-load-testing-para-fazer-teste-de-performance-d1c0db6af455

 
