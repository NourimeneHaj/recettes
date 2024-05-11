const express = require('express');
const router = express.Router();
// const membreController = require('./controller/membreController');
const membreController = require('../controller/membreController');




router.get('/', membreController.getAllMembers);
router.get('/:id', membreController.getMemberById);
router.post('/login', membreController.getMemberByEmailAndPassword);
router.post('/', membreController.createMember);
router.put('/:id', membreController.updateMember);
router.delete('/:id', membreController.deleteMember);

module.exports = router;
