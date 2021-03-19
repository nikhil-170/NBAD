const {DateTime} = require('luxon');
const {v4: uuidv4} = require('uuid');
const leagues = [
            {   
                matchid: '1',
                title: 'Kings Vs Champions',
                host: 'Rachel',
                details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                where: 'Denver',
                when: DateTime.local(2021,04, 22).toISODate(),
                starttime: '09:30 PM',
                endtime: '11:30 PM',
                imageurl: 'https://www.freevector.com/uploads/vector/preview/30337/Cricket_Logo_vector.jpg',
                leagueTitle: 'Premier League',
                leagueid: 22
            },
            {
                matchid: '2',
                title: 'Liverpool Vs Wolves',
                host: 'Joey',
                details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                where: 'Charlotte',
                when: DateTime.local(2021,05, 25).toISODate(),
                starttime: '09:30 PM',
                endtime: '11:30 PM',
                imageurl: 'https://seeklogo.com/images/C/cricket-logo-DC6957DD66-seeklogo.com.png',
                leagueTitle: 'Premier League',
                leagueid: 22
            },
            {
                matchid: '3',
                title: 'City Vs Utd',
                host: 'Monica',
                details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                where: 'Pheonix',
                when: DateTime.local(2021,06, 22).toISODate(),
                starttime: '09:30 PM',
                imageurl: 'https://image.freepik.com/free-vector/king-football-logo_21010-8.jpg',
                endtime: '11:30 PM',
                leagueTitle: 'Premier League',
                leagueid: 22
            }, 
            {
                matchid: '4',
                title: 'PSG Vs Bar',
                host: 'Chandler',
                details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                where: 'Atlanta',
                when: DateTime.local(2021,07, 22).toISODate(),
                starttime: '09:30 PM',
                endtime: '11:30 PM',
                leagueTitle: 'Champions League',
                imageurl: 'https://images.designtrends.com/wp-content/uploads/2016/08/27153528/f220.jpg',
                leagueid: 24
            },
            {
                matchid: '5',
                title: 'Atl Vs Chel',
                host: 'Ross',
                details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                where: 'DC',
                when: DateTime.local(2021,08, 12).toISODate(),
                starttime: '09:30 PM',
                endtime: '11:30 PM',
                imageurl: 'https://www.creativefabrica.com/wp-content/uploads/2018/11/Football-logo-by-yahyaanasatokillah-580x387.jpg',
                leagueTitle: 'Champions League',
                leagueid: 24
            },
            {
                matchid: '6',
                title: 'BVB Vs Sev',
                host: 'Pep',
                details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                where: 'Berlin',
                when: DateTime.local(2021,09, 12).toISODate(),
                starttime: '7:30 PM',
                endtime: '11:30 PM',
                imageurl: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/23/French_Football_Federation_logo.svg/1200px-French_Football_Federation_logo.svg.png',
                leagueTitle: 'Champions League',
                leagueid: 24
            }

];


exports.find = () => leagues;

exports.findById = function(id){

    for(let i =0; i< leagues.length; i++){
        if(leagues[i].matchid === id){
            return leagues[i];
        }
    }
};

const findbyid = function(id){

    for(let i =0; i< leagues.length; i++){
        if(leagues[i].matchid == id){
            return leagues[i];
        }
    }
};

exports.findLeagues = function(){
    var uniqueLeagues = new Set();

    for(let i=0; i<leagues.length; i++){
        uniqueLeagues.add(leagues[i].leagueTitle);
    }
    return [...uniqueLeagues];
};

exports.save = function(newMatch){
    newMatch.matchid = uuidv4();
    leagues.push(newMatch);
};

exports.updateByID = function(id, newMatch){
    let match = leagues.find(match => match.matchid === id);
    if(match){
    match.topic = newMatch.topic;
    match.title = newMatch.title;
    match.host = newMatch.host;
    match.details = newMatch.details;
    match.where = newMatch.where;
    match.when = newMatch.when;
    match.starttime = newMatch.starttime;
    match.endtime = newMatch.endtime;
    match.imageurl = newMatch.imageurl;
    match.leagueTitle = newMatch.leagueTitle;    
    return true;
    }else{
        return false;
    }
};

exports.deleteById = function(id){
    let index = leagues.findIndex(match => match.matchid === id);
    if(index != -1){
        leagues.splice(index, 1);
        return true;
    }else{
        return false;
    }
};