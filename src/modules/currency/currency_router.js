import { Router } from "express";
import { uploadSinleFile } from "../../fileUpload/fileUpload.js";
import { Validate } from "../../middlewares/validate.js";
import { addCurrencyValidation, updateCurrencyValidation } from "./currency_validation.js";
import { addCurrency, allCurrencies, deleteCurrency, getCurrency, updateCurrency } from "./currency_controller.js";

const CurrencyRouter = Router();

CurrencyRouter.route('/')
    .post(uploadSinleFile('image', 'flags'),Validate(addCurrencyValidation),  addCurrency)
    .get(allCurrencies);

CurrencyRouter.route('/:id')
    .get(getCurrency)
    .put(Validate(updateCurrencyValidation), uploadSinleFile('image', 'flags'), updateCurrency)
    .delete(deleteCurrency);

export default CurrencyRouter;