import { Router } from "express";
import * as petsCtrl from '../controllers/pets.js'

const router= Router()

router.post('/',petsCtrl.create),
router.get('/',petsCtrl.index),
router.delete('/:petId',petsCtrl.delete)

export{
    router
}