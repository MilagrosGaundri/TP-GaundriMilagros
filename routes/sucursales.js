const express = require('express');
const router = express.Router();

const sucursalController = require('../controller/sucursalesController');

router.get('/', sucursalController.index)
router.get('/:sucursal', sucursalController.detalle)


module.exports=router;