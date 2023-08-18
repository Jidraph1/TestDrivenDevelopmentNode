const {Router} = require('express');
const { createStudent } = require('../Controllers/feeController');


const feeRouter = Router();

feeRouter.post('/', createStudent);

module.exports = {
    feeRouter
}