import mongoose,{Types} from "mongoose"

const schema =new mongoose.Schema({

    name: {
        type: String,
        unique: [true, 'currency name must be unique'],
        trim: true,
        required: true,
        minlength: [3, 'too short currency name'],
    },
    image:String,
    rate:{
        type:Number,
        required:true,
        default:1
    },



})
schema.post('init', function(doc) {
    doc.image = process.env.BASE_URL+"/flags/"+doc.image;
});

export const Currency = mongoose.model('Currency', schema); 