

module.exports = function(app){
	app.get('/usuarios', function(req,res){

		var connection = app.infra.connectionFactory();
		var usuariosDAO = new app.infra.UsuariosDAO(connection);		
		usuariosDAO.lista(function(erros,resultados){
			res.format({
				html: function(){
					res.render('usuarios/lista',{lista:resultados});
				},
				json: function(){
					res.json(resultados);
				}
			});			
		});
		connection.end();		
	});


	app.get('/usuarios/form', function(req,res){
		res.render('usuarios/form');
	});

	app.post('/usuarios/salvar', function(req, res){
		var usuario = req.body;	

		req.assert('nome', 'Nome é obrigatório!').notEmpty();
		req.assert('senha', 'Senha é obrigatória!').notEmpty();	

		var erros = req.validationErros();
		if(erros){
			res.render('usuarios/form', {errosValidacao:erros});
			return;
		}

		var connection = app.infra.connectionFactory();
		var usuariosDAO = new app.infra.UsuariosDAO(connection);
		usuariosDAO.salvar(usuario, function(erros, resultados){
			res.render('/usuarios');
		});
	});
}