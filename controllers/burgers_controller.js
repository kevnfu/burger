const router = require('express').Router();
const burger = require('../models/burger.js');
const SUCCESS = {success: true};
const FAIL = {success: false};

router.get('/', function(req, res) {
  burger.get().then(data => {
    res.render('index', {burgers: data})
  });
});

router.get('/api/burgers', function(req, res) {
  burger.get().then(data => {
    res.json(data);
  });
});

// expects {name: name}
router.post('/api/burgers', function(req, res) {
  if(req.body.name) {
    burger.add(req.body.name);
    res.json(SUCCESS);
  } else {
    res.json(FAIL);
  }
});

// expects {id: id}
router.put('/api/burgers', function(req, res) {
  if(req.body.id) {
    burger.eat(req.body.id);
    res.json(SUCCESS);
  } else {
    res.json(FAIL);
  }
});

module.exports = router;