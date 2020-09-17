# gatling-tutorial
Um tutorial de instalação e uso da ferramenta de teste de carga Gatling

# Pré-requisitos

* Java SDK 1.8 ou superior;
* Variável de ambiente JAVA_HOME configurada;
* IDE com o plugin de scala instalado;
* Apache Maven isntalado e a variavel de ambiente configurada.

# Instalação

* Realizar o Download do Gatling pelo site oficial: https://gatling.io/
* Após realizar o download descompactar o arquivo
* Acessar a pasta bin e executar o arquivo gatling.bat (Windows) ou gatling.sh (Linux)
* Verificar que serão apresentadas simulações de exemplo
* Selecionar a simulação desejada
* Verificar que o relatório foi gerado no repositório results
* Caso os passos anteriores foram executados sem problemas então a ferramenta está com as configurações básicas concluídas

# Estrutura Básica

* Repositorio bin: executavel do gatling e do recorder;
* Repositório results: Relatórios gerados durante a execução dos testes
* Repositório user-filer: Resultado da gravação realizada pelo Recorder UI, contem scripts scala.

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
* Selecionar a versão desejada (De preferencia a última versão)
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

Conforme link: https://www.blazemeter.com/blog/how-to-set-up-and-run-your-gatling-tests-with-eclipse

# Estrutura conceitual de um script de testes de Performance, Carga e Stress no Gatling

* HTTP Protocol Configuration
* Header Definition
* Scenario Definition
* Simulation Definition 

 
