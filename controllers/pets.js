import {Pet}  from "../models/pet.js";

async function create(req,res){
    try {
        const pet=await Pet.create(req.body)
        res.json(pet)
    } catch (error) {
        console.log(error)
        res.json(error)
    }
}

async function index(req,res){
    try {
        const pets=await Pet.find({}).sort({createdAt:'desc'})
        res.json(pets)
    } catch (error) {
        console.log(error)
        res.json(error)
    }
}

async function remove(req,res){
    try {
        const pet = Pet.findByIdAndDelete(req.params.petId)
        res.json(pet)
        
    } catch (error) {
        console.log(error)
        res.json(error)
    }
}


export{
    create,
    index,
    remove as delete,
}