var express = require('../config/express')();
var request = require('supertest')(express);

describe('UsuariosController', function(){
	it('listagem json', function(done){	
		request.get('/usuarios')
		.set('Accept', 'application/json')
		.expect('Content-Type', /json/)
		.expect(200, done);		
	});

	it('#cadastro de novo usuario dados invalidos', function(done){
		request.post('/usuarios')
		.send({nome:"teste1", senha:"teste1"})
		.expect(400,done);
	});


	it('#cadastro de novo usuario', function(done){
		request.post('/usuarios')
		.send({nome:"teste1", senha:"teste1"})
		.expect(302,done);
	});
});