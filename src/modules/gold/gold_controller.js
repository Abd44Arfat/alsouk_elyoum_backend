import slugify from "slugify";
import { AppError } from "../../utils/appError.js";
import { catchError } from "../../middlewares/catchError.js";
import { deleteOne } from "../../utils/handler.js";

import { ApiFeature } from "../../utils/apiFeature.js";
import { Gold } from "../../../database/models/gold.model.js";
const addGold = catchError(async (req, res, next) => {
    console.log("Request Body:", req.body); // 👀 Debug the request

    req.body.slug = slugify(req.body.name);

    let gold = new Gold(req.body);
    await gold.save();
    res.json({ message: "success", gold });
});


const allGolds = catchError(async (req, res, next) => {
    let apiFeatures = new ApiFeature(Gold.find(), req.query)
        .fields()
        .filter()
        .sort()
        .search();
    
    let gold = await apiFeatures.mongooseQuery // Execute the query
    res.json({ message: "success",page:apiFeatures.pageNumber, gold });
});


const getGold = catchError(async (req, res, next) => {
    let gold = await Gold.findById(req.params.id);
    gold || next(new AppError("gold not found", 404));
    !gold || res.json({ message: "success", gold });
});

const updateGold = catchError(async (req, res, next) => {
    if(req.body.slug)  req.body.slug = slugify(req.body.name);

    let gold = await Gold.findByIdAndUpdate(req.params.id, req.body, { new: true });
    gold || next(new AppError("gold not found", 404));
    !gold || res.json({ message: "success", gold });
});

const deleteGold = deleteOne(Gold)


export {
addGold,
allGolds,
getGold,
updateGold,
deleteGold
 
};