import mongoose from "mongoose";

const Schema = mongoose.Schema

const petSchema=new Schema(
{
    name : {type : String, required:true},
    age : {type : Number,required:true},
    vaccinated : {
        type:String,
        default:'Yes',
        enum:['Yes','No']
    },
    breed :{
        type:String,
        default:'Chihuahua',
        enum:['Chihuahua','Husky','Pit Bull','Golden Retriever','Beabull','Lab']
    }

},
{
    timestamps:true
}

)

const Pet=mongoose.models('Pet',petSchema)

export{
    Pet
}
