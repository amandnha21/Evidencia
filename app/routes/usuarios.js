

module.exports = function(app){
	app.get('/usuarios', function(req,res, next){
		var connection = app.infra.connectionFactory();
		var usuariosDAO = new app.infra.UsuariosDAO(connection);		
		usuariosDAO.lista(function(erros,resultados){
			if(erros){
				return next(erros);
			}
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
		res.render('usuarios/form',
		{errosValidacao:{}, usuario:{}});
	});

	app.post('/usuarios/salvar', function(req, res){
		var usuario = req.body;	

		req.assert('nome', 'Nome é obrigatório!').notEmpty();
		req.assert('senha', 'Senha é obrigatória!').notEmpty();	

		var erros = req.validationErros();
		if(erros){
			res.format({
				html: function(){
					res.status(400).render('usuarios/form'), {errosValidacao:erros}
				},
				json: function(){
					res.status(400).json(erros);
				}
			});	
			return;
		}

		var connection = app.infra.connectionFactory();
		var usuariosDAO = new app.infra.UsuariosDAO(connection);
		usuariosDAO.salvar(usuario, function(erros, resultados){
			res.render('/usuarios');
		});
	});
}