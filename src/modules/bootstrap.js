import CurrencyRouter from "./currency/currency_router.js"
import GoldRouter from "./gold/gold_routes.js"


export const bootstrap=(app)=>{
app.use('/api/currencies',CurrencyRouter)
app.use('/api/golds',GoldRouter)

}