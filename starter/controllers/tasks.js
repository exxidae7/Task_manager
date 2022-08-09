const { request } = require('express')
const Task = require('../models/Tasks')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../error/custom-error')

const getAllTask = asyncWrapper( async (req, res) => {
          const tasks = await Task.find({})
          res.status(200).json({ tasks })
})

const createTask  = asyncWrapper( async (req, res) => {
          const task = await Task.create(req.body)
          res.status(201).json({task }) 
})
const getOneTask = asyncWrapper( async (req, res) => {
     const {id:TaskId}  = req.params
     const task = await Task.findOne({_id:  TaskId } )
     if (!task){
          return next(createCustomError(`No task with id : ${taskID} `,404))
     }
     res.status(200).json({task})
     
})
const updateTask  = asyncWrapper( async  (req, res) => { 
     const {id:TaskId}  = req.params
     const task = await Task.findOneAndUpdate({ _id:  TaskId }, req.body , {
          new : true ,
          runValidators: true,
          overwrite: true
     })
     if (!task){
          return next(createCustomError(`No task with id : ${taskID} `,404))
}         
     res.status(200).json({task})
})
const deleteTask  = asyncWrapper( async(req, res) => {

          const {id:TaskId}  = req.params
          const task = await Task.findOneAndDelete({_id:  TaskId })
          if (!task){
               return next(createCustomError(`No task with id : ${taskID} `,404))
          }
          res.status(200).json(`Successfully deleted task with id : ${task.id}`)
})

module.exports = {
     getAllTask, createTask, updateTask, deleteTask,getOneTask
}