import mongoose,{Types} from "mongoose"

const schema =new mongoose.Schema({

    name: {
        type: String,
        unique: [true, 'currency name must be unique'],
        trim: true,
        required: [true, 'gold name is required'],
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


export const Gold = mongoose.model('Gold', schema); 