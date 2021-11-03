const router = require('express').Router();
const songsController = require('../controllers/song');

router.post('/agregarCancion',songsController.postAddSong)
router.get('/obtenerCancion',songsController.getGetSong)
router.post('/borrarCancion',songsController.postDeleteSong)
router.post('/actualizarCancion',songsController.postUpdateSong)

module.exports = router