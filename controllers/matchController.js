const model = require('../models/match');

exports.home = (req, res) => {
    res.render('./index');
};


exports.matches = (req, res) => {
    let leagueNames = model.findLeagues();
    let allMatches = model.find();
    res.render('connections', {leagueNames, allMatches});
};


exports.newmatch =  (req, res) => {
    res.render('./newConnection');
};


exports.create = (req, res) => {
    // res.send('created a new story');
    let newMatchObj = req.body;
    model.save(newMatchObj);
    let leagues = model.find();
    res.redirect('/connection/')
};


exports.show = (req, res) => {
    let matchObj = model.findById(req.params.id);
    if(matchObj){
        res.render('./connection', {matchObj});
    }else{
        res.status(404).send('Cannot find the match with id '+ matchObj.matchid);
    }
    
};


exports.edit = (req, res) => {
    // res.send('send the editable html page');
    let matchObj = model.findById(req.params.id);
    if(matchObj){
        res.render('update', {matchObj});
    }else{
        res.status(404).send('Cannot find the match with id '+ matchObj.matchid);
    }
    
};

exports.update = (req, res) =>{
    // res.send('updated the story with ' + req.params.id);
    let match = req.body;
    let id = req.params.id;
    if(model.updateByID(id, match)){
        let tempMatch = model.findById(id);
        res.redirect('/connection/match/'+id);
    }else{
        res.status(404).send('Cannot find the updated match details' + id);
    }
};

exports.delete =  (req, res) => {
    let id = req.params.id;
    if(model.deleteById(id)){
        res.redirect('/connection/');
    }else{
        res.status(404).send('cannot delete the match with ' + id);
    }
    
};

exports.contactpage = (req,res) => {
    res.render('./contact');
};