const express = require('express')

const router = express.Router()
const  {  getAllTask, createTask, updateTask, deleteTask,getOneTask } = require('../controllers/tasks')
router.route('/').get(getAllTask)
               .post(createTask)

               
router.route('/:id').get(getOneTask)
                    .patch(updateTask)
                    .delete(deleteTask)

                    

module.exports = router