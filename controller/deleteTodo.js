const express = require('express')
const Todo = require('../models/Todo')


exports.deleteTodo = async ( req , res ) => {

    try{

        const {id} = req.params;
        const todo = await Todo.findByIdAndDelete({ _id : id});

        res.status(200).json(
            {
                success : true,
                data : todo,
                message : "Deleted successfully"
            }
        )

    }catch( error ){

        res.status(500).json(
            {
                success : false,
                error : error.message,
                message : "Internal server error"
            }
        )
    }
}