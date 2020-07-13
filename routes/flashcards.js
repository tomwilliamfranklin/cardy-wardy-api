var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  // TODO hardcoded data 
    const flashcards = [{
        title: 'Capitals of Europe',
        description: 'Revision for capitals of europe', 
        dateCreated: new Date(),
        dateLastUpdated: new Date(),
        public: true,
        flashcards: [
            {
                front: 'Capital of England',
                back: 'London',
                flipped: false,
            },
            {
                front: 'Capital of Spain',
                back: 'Madrid',
                flipped: false,
            },
            {
                front: 'Capital of Italy',
                back: 'Rome',
                flipped: false,
            },
        ],
    },
    {
        title: 'Game Consoles',
        description: 'Revision for game consoles', 
        dateCreated: new Date(),
        dateLastUpdated: new Date(),
        public: true,
        flashcards: [
            {
                front: 'First Microsoft Console',
                back: 'Xbox',
                flipped: false,
            },
            {
                front: 'First ever commerical game console?',
                back: 'Pong',
                flipped: false,
            },
            {
                front: 'First Nintendo Console?',
                back: 'NES',
                flipped: false,
            },
        ],
    },
    {
        title: 'Types of Wood',
        description: 'Revision for my tree exam', 
        dateCreated: new Date(),
        dateLastUpdated: new Date(),
        public: true,
        flashcards: [
            {
                front: 'some wood question, idk anything about wood',
                back: 'Oak',
                flipped: false,
            },
            {
                front: 'some question about wood facts, once again, i know nothing',
                back: 'Wood is used to make high quality benches',
                flipped: false,
            },
        ],
    },
    {
        title: 'European Empires',
        description: 'Revision for my european history exam!!', 
        dateCreated: new Date(),
        dateLastUpdated: new Date(),
        public: true,
        flashcards: [
            {
                front: 'The sun never sets on the _',
                back: 'British Empire',
                flipped: false,
            },
            {
                front: 'Viva La Revolution?',
                back: 'Revolutionary France',
                flipped: false,
            },
            {
                front: 'The union of Austria, Hungary, Croatia and a few other places',
                back: 'Austria-Hungary',
                flipped: false,
            },
        ],
    }];
  
    res.send(flashcards);
});

module.exports = router;
