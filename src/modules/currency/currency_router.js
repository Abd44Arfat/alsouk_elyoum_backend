
import { Router } from "express";
import { uploadSinleFile } from "../../fileUpload/fileUpload.js";
import { Validate } from "../../middlewares/validate.js";
import { addCurrencyValidation } from "./currency_validation.js";
import { addCurrency, allCurrencies, deleteCurrency, getCurrency, updateCurrency } from "./currency_controller.js";


const CurrencyRouter=Router()

CurrencyRouter.route('/')
.post(uploadSinleFile('image','currencies'),Validate(addCurrencyValidation),addCurrency)
.get(allCurrencies)
CurrencyRouter.route('/:id')
.get(getCurrency)
.put(uploadSinleFile('image','currencies'),updateCurrency)
.delete(deleteCurrency)
export default CurrencyRouter