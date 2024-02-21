// import the model

const expresss = require('express')
const Todo = require('../models/Todo')


// route handler

exports.createTodo = async( req , res ) => {

    try{

        const { title , description } = req.body;

        const response = await Todo.create( { title , description });

        response.status(200)
        .json(
            {
                success : true,
                data : "data inserted successfully",
                message : Response.message
            }
        )

    }catch( error ){

        console.error( error );
        console.log( error );
        response.status(500)
        .json(
            {
                success : false,
                data : "internal server error ",
                message : error.message
            }
        )
    }

}