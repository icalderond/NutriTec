/*
Dependences
 */
var express = require('express');
var url = require('url');
var db=require('../database/db')

var router = express.Router();

/*
Constants
 */
var TITLE='Nutri-Tec'

/*
Get methods
 */
router.get('/:id', function(req, res, next) {
	var id = req.params.id

	db.getArticulo(id, function(err, articulo) {
		if (typeof err !== "undefined" && err !== null) {
			res.status(500).send({
				error: err
			});
			return;
		}

		if(articulo===undefined){
			res.send('No se encontro ningun articulo')
		}else{
			res.render('articulo',{title:TITLE,articulo:articulo[0]})
		}
	})
})

module.exports = router;