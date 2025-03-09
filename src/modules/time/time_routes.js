import { Router } from "express";
import { addTime, allTimes, deleteTime, getTime, updateTime } from "./time_controller.js";




const TimeRouter = Router();

TimeRouter.route('/')
    .post(  addTime)
    .get(allTimes);

TimeRouter.route('/:id')
    .get(getTime)
    .put(  updateTime)
    .delete(deleteTime);

export default TimeRouter;