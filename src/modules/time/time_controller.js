import slugify from "slugify";
import { AppError } from "../../utils/appError.js";
import { catchError } from "../../middlewares/catchError.js";
import { deleteOne } from "../../utils/handler.js";
import { Time } from "../../../database/models/time.model.js";
const addTime = catchError(async (req, res, next) => {
    console.log("Request Body:", req.body);

    req.body.slug = slugify(req.body.name);

    let time = new Time(req.body);
    await time.save();
    res.json({ message: "success", time });
});


const allTimes = catchError(async (req, res, next) => {



    let time = await Time.find().populate("currencies");
    res.json({ message: "success", time });
});


const getTime = catchError(async (req, res, next) => {
    let time = await Time.findById(req.params.id);
    time || next(new AppError("time not found", 404));
    !time || res.json({ message: "success", time });
});

const updateTime = catchError(async (req, res, next) => {
    if (req.body.slug) req.body.slug = slugify(req.body.name);

    let time = await Time.findByIdAndUpdate(req.params.id, req.body, { new: true });
    time || next(new AppError("gold not found", 404));
    !time || res.json({ message: "success", time });
});

const deleteTime = deleteOne(Time)


export {

    addTime,
    allTimes,
    getTime,
    updateTime,
    deleteTime
};