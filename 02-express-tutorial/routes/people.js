const express = require("express");
const router = express.Router();
let {people} = require('../data')

const { addPerson, getPeople, updatePerson, deletePerson } = require("../controllers/people.js")

// get people
router.get('/', getPeople)
   

// add person
router.post('/', addPerson)

// update person

router.put('/:id', updatePerson)


// delete

router.delete('/:id', deletePerson)
    





module.exports = router