const express = require('express');

const router = express.Router();
const controller = require('../controllers/matchController');



//GET /home, display sportsbuzz homepage

router.get('/home', controller.home);

//GET '/', view all current matches

router.get('/', controller.matches);

//GET /newmatch , to display an new match form

router.get('/newmatch', controller.newmatch);

//POST '/', after creating a new match
router.post('/', controller.create);

//GET /match/:id , displays the selected match details

router.get('/match/:id', controller.show);

//GET /match/:id/edit , sends a html form to edit the match details 

router.get('/match/:id/edit', controller.edit);

//PUT /match/:id update the match details after identified by the id 
router.put('/match/:id', controller.update);

//DELETE /match/:id, delte the match identitfied by the id
router.delete('/match/:id', controller.delete );

router.get('/contact', controller.contactpage);

module.exports = router;