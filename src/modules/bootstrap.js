import CurrencyRouter from "./currency/currency_router.js"


export const bootstrap=(app)=>{
app.use('/api/currencies',CurrencyRouter)

}