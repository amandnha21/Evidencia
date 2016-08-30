function UsuariosDAO(connection){
	this._connection = connection;
}

UsuariosDAO.prototype.lista = function(callback){
	this._connection.query('select * from  usuario', callback);
}

UsuariosDAO.prototype.salvar = function(usuario, callback){
	console.log(usuario);
	this._connection.query('insert into usuario set ?', usuario, callback);
}

module.exports = function(){
	return UsuariosDAO;
}	
