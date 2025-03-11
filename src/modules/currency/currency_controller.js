import slugify from "slugify";
import { AppError } from "../../utils/appError.js";
import { catchError } from "../../middlewares/catchError.js";
import { deleteOne } from "../../utils/handler.js";
import { Currency } from "../../../database/models/currency.model.js";
import { ApiFeature } from "../../utils/apiFeature.js";
const addCurrency = catchError(async (req, res, next) => {
    req.body.slug = slugify(req.body.name);
    req.body.image = req.file.filename;
    let currency = new Currency(req.body);
    await currency.save();
    res.json({ message: "success", currency });
});



const allCurrencies = catchError(async (req, res, next) => {
    let apiFeatures = new ApiFeature(Currency.find(), req.query)
        .fields()
        .filter()
        .sort()
        .search();
    
    let currencies = await apiFeatures.mongooseQuery // Execute the query
    res.json({ message: "success",page:apiFeatures.pageNumber, currencies });
});


const getCurrency = catchError(async (req, res, next) => {
    let currency = await Currency.findById(req.params.id);
    currency || next(new AppError("currency not found", 404));
    !currency || res.json({ message: "success", currency });
});

const updateCurrency = catchError(async (req, res, next) => {
    if(req.body.slug)  req.body.slug = slugify(req.body.name);
  if(req.file)  req.body.image = req.file.filename;
    let currency = await Currency.findByIdAndUpdate(req.params.id, req.body, { new: true });
    currency || next(new AppError("currency not found", 404));
    !currency || res.json({ message: "success", currency });
});

const deleteCurrency = deleteOne(Currency)


export {
   addCurrency,
   allCurrencies,
   getCurrency,
   updateCurrency,
   deleteCurrency
 
};