
# Projeto  Evidencia
# Trabalho de Engenharia de Software 2016


Projeto  Evidencia é uma aplicação Node.js 
Desenvolvida para criação portal e aplicativo mobile


## ambiente de desenvolvimento

1 - Instalar Node e NPM ( vem junto com o Node ). https://nodejs.org;

2 - Para validar seu ambiente, abra o CMD, digite "node -v" e aperte enter,
se abrir a versão do Node seu ambiente está ok, caso contrário revise os passos anteriores;

3 - Através do CMD percorra até a pasta do projeto e digite "node app.js";

4 - Irá aparecer servidor rodando.... 

5 - Abra o navegador e digite http://localhost:3000/usuarios/

## estrutura básica de desenvolvimento

**views** - onde atuam os front-end html, css.

**routes** - onde atuam as rotas de cada view, cada view precisa de uma rota.

**infra** - onde configuramos o caminho do banco de dados, e criamos as DAO de cada views.

**config** - express onde configuramos os pacotes baixados do npm que estamos utilizando

**node_modules** - onde fica todos os pacotes utilizados no projeto

**exemplo prático de estrutura** - usuário clicou no botão da view, recebemos informação da rota(routes), a rota chama a DAO respectiva, que por sua vez executa sua função.

## OBS: Para executar o projeto é necessário ter instalado o MYSQL e criar uma base de dados "evidencia" user: root e password: ' '.

