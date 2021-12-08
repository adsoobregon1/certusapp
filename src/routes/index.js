const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.render('index.html', { title: 'First Website'});
});

router.get('/contact', (req, res) =>{
    res.render('contact.html', { title: 'Contact page'});
});

router.get('/serviciocliente', (req, res) =>{
    res.render('serviciocliente.html', { title: 'Servicio al cliente'});
});

router.get('/productos', (req, res) =>{
    res.render('productos.html', { title: 'Productos'});
});

router.get('/productos', (req, res) =>{
    res.render('productos.html', { title: 'Productos'});
});

router.get('/form', (req, res) =>{
    res.render('index2.html', { title: 'Formulario data base'});
});

module.exports = router;