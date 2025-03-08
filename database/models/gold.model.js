import mongoose,{Types} from "mongoose"

const schema =new mongoose.Schema({

    name: {
        type: String,
        unique: [true, 'currency name must be unique'],
        trim: true,
        required: true,
        minlength: [3, 'too short currency name'],
    },
  
    purchasePrice:{
        type:Number,
        required:true,
       
    },

    sellingPrice:{
        type:Number,
        required:true,
        
    },


})


export const Currency = mongoose.model('Currency', schema); 