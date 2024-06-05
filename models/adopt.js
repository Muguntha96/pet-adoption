import mongoose from "mongoose";

const Schema = mongoose.Schema

const adoptSchema=new Schema(
    {
        firstname:{type:String,required:true},
        lastname:{type:String,required:true},
        email:{type:String,required:true},
        phoneNumber:{type:Number,required:true},
        address:{type:String,required:true},
        pet:[{type:Schema.Types.ObjectId,ref:'Pet'}]
    },
    {timestamps:true}
)

const Adopt=mongoose.model('Adopt',adoptSchema)

export{
    Adopt
}