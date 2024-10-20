const {chech, validationResult } = require('express-validator');
const starwarsModel = require('../Model/starwars');
const starwarsview = require("../Views/View");


const validateStarwars =[
    chech('name').notEmpty().withMessage('Name is required'),
    chech('Beskrivelse').notEmpty().withMessage('Beskrivelse is required'),
    chech('Kendtfor').notEmpty().withMessage('Kendtfor is required')
];

exports.getStarwars = (req, res) => {
    const starwar= starwarsModel.getStarwarsData();
    res.send(starwarsview.renderStarwars(starwar));
};
exports.getStarwarsFrom = (req, res) => {
    res.send(starwarsview.renderStarwarsForm());
}

exports.addStarwars =[
    validateStarwars,
    (req, res) => {
    console.log('Form Data:', req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    const starwar = starwarsModel.getStarwarsData();
    const lastId = starwar.length >0 ? starwar[starwar.length-1].id : 0;
    const newStarwar = {id: lastId + 1, ...req.body};

    starwar.push(newStarwar);
    starwarsModel.saveStarwarsData(starwar);
    res.status(200).json(newStarwar);
    }
];

