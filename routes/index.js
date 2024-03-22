const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'))

router.post('/perros', controllers.createPerro);
router.get('/perros', controllers.getAllPerros);

module.exports = router;

