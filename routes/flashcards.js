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
    }];
  
    res.send(flashcards);
});

module.exports = router;
