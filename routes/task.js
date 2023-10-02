const express = require('express');
const router = express.Router();

const taskController = require("../controllers/task_controller");
const passport = require('passport');

router.post('/create',passport.authenticate('jwt', { session: false }),taskController.create);
router.put('/update/:id',passport.authenticate('jwt', { session: false }),taskController.update);
router.delete('/delete/:id',passport.authenticate('jwt', { session: false }),taskController.delete);
router.get('/tasks',passport.authenticate('jwt', { session: false }),taskController.tasks);

module.exports = router;