import mongoose, { Types } from "mongoose";

const TimeSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true }, 
    name: {
        type: String,
        unique: [true, 'Name must be unique'],
        trim: true,
        required: [true, 'Name is required'],
        minlength: [3, 'Too short name']
    },
    currencies: [{
        type: Types.ObjectId, 
        ref: "Currency"  
    }]
});

export const Time = mongoose.model('Time', TimeSchema);
