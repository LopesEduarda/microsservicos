const { Router } = require('express');
const UserController = require('../controllers/UserController');
const handleValidation = require('../middlewares/handleValidation');
const UserValidator = require('../middlewares/UserValidator');

const router = Router();

router.get('/', handleValidation, (req, res) => UserController.getAllUsers(req, res));
router.get('/:id', handleValidation, (req, res) => UserController.getUserById(req, res));
router.post('/',  UserValidator.createUser, handleValidation, (req, res) => UserController.createUser(req, res));
router.put('/:id', handleValidation, (req, res) => UserController.updateUser(req, res));
router.delete('/:id', UserValidator.deleteUser, handleValidation, (req, res) => UserController.deleteUser(req, res));

module.exports = router;