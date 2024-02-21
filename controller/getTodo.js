// get the todo schema
const express = require('express')
const Todo = require('../models/Todo')


// handle the api route

exports.getTodo = async ( request , response ) => {

    try{

        const todos = await Todo.find({});

        response.status(200)
        .json(
            {
                success : true,
                data : todos,
                message : "All data fetched"
            }
        );

    }catch( error ){

        console.error( error );
        console.log( error );

        response.status(500)
        .json(
            {
                success : false,
                data : "internal system error",
                message : error.message
            }
        );
    }
}

exports.getTodoById = async ( req , res ) => {

    try{

        const id = req.params.id;
        const todo = await Todo.findById({ _id : id  })

        if( !todo ){
            return res.status(404).json(
                {
                    success : false,
                    message : "Data with given id not found"
                }
            )
        }else{
            return res.status(200).json(
                {
                    success : true,
                    data : todo,
                    message : `Data with id ${id} fetched successfully`
                }
            )
        }

    }catch( error ){

        return res.status(500).json(
            {
                success : false,
                error : error.message,
                message : "Internal server error "
            }
        )
    }
}
