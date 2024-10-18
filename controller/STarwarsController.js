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

