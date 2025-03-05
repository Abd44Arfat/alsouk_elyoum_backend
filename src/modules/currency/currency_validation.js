import Joi from "joi";

const addCurrencyValidation = Joi.object({
  name: Joi.string().required().min(3).trim(),
  slug: Joi.string().lowercase(),
  image: Joi.object().required(),
});

const updateCurrencyValidation = Joi.object({
  name: Joi.string().min(3).trim(),
  id: Joi.string().hex().length(24).required(),
});

const deleteCurrencyValidation = Joi.object({
  id: Joi.string().hex().length(24).required(),
});

export {
  addCurrencyValidation,
  updateCurrencyValidation,
  deleteCurrencyValidation,
};