import { Router } from "express";

import { Validate } from "../../middlewares/validate.js";
import { addGold, allGolds, deleteGold, getGold, updateGold } from "./gold_controller.js";


const GoldRouter = Router();

GoldRouter.route('/')
    .post(  addGold)
    .get(allGolds);

GoldRouter.route('/:id')
    .get(getGold)
    .put(  updateGold)
    .delete(deleteGold);

export default GoldRouter;