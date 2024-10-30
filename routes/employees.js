const express = require('express');
const router = express.Router();
const { all, add, remove, employee, edit } = require('../controllers/employees');
const { auth } = require('../middleware/auth');

router.get('/', auth, all);
router.get('/:id', auth, employee);
router.post('/add', auth, add);
router.post('/remove/:id', auth, remove);
router.put('/edit/:id', auth, edit);

module.exports = router;