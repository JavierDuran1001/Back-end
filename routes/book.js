const router = require('express').Router();
const bookController = require('../controllers/book');

router.post('/agregarLibro',bookController.postAddBook)
router.get('/obtenerLibro',bookController.getGetBook)
router.post('/borrarLibro',bookController.postDeleteBook)
router.post('/actualizarLibro',bookController.postUpdateBook)

module.exports = router