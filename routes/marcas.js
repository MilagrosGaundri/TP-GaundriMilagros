const express = require('express');
const router = express.Router();

const marcaController= require('../controller/marcasController')

router.get('/', marcaController.index)
router.get('/:marcaID', marcaController.detalle)


module.exports=router;