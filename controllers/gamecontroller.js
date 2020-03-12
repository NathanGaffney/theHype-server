const router = require('express').Router();
const Game = require('../db').import('../models/game');
const validateSession = require('../middleware/validate-session');

//Create data
router.post('/create', validateSession, (req, res) => {
    const gameFromRequest = {
        title: req.body.title,
        hypeRating: req.body.hypeRating,
        description: req.body.description,
        releaseDate: req.body.releaseDate,
        platform: req.body.platform,
        userId: req.user.id,
        username: req.user.username
    }

    console.log(req);

    Game.create(gameFromRequest)
        .then(game => res.status(200).json(game))
        .catch(err => res.json({
            error: err
        }))
})

//find all for specific user
router.get('/allgames', (req, res) => {
    Game.findAll({ where: { userId: req.user.id } })
        .then(game => res.status(200).json(game))
        .catch(err => res.status(500).json({
            error: err
        }))
})

//THIS IS FOR LISTING ALL DATA
router.get('/community', (req, res) => {
    Game.findAll()
    .then(game => res.status(200).json(game))
    .catch(err => res.status(500).json({
        error: err
    }))
})

router.get('/game/:id', validateSession, (req, res) => {
    Game.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(game => res.status(200).json(game))
        .catch(err => res.status(500).json({
            error: err
        }))
        console.log(req.params);
})

router.put ('/update/:id', (req, res) => {
    Game.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(game => res.status(200).json(game))
    .catch(err => res.status(500).json({
        error: err
    }))
})

router.delete('/remove/:id', validateSession, (req, res) => {
    Game.destroy({
        where: {
            userId: req.user.id,
            id: req.params.id
        }
    })
    .then(game => res.status(200).json(game))
    .catch(err => res.json({
        error: err
    }))
});

module.exports = router;