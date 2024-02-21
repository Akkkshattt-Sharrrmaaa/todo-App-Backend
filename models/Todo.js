// here we will create the schema using mongoose


const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema(
    {
        title : {
            type : String,
            required : true,
            maxLength : 20,
        },

        description : {
            type : String,
            required : true,
            maxLength : 50,
        },

        createdAt : {
            type : Date,
            required : true,
            default : Date.now(),
        },

        updatedAt : {
            type : Date,
            requied : true,
            default : Date.now(),
        }
    }
)

module.exports = mongoose.model( "Todo" , todoSchema);