import { Router } from 'express'
import { getTodos, addTodo, updateTodo, deleteTodo } from '../controllers/todos'
 
const router: Router = Router()

router.get('/api/v1/todos', getTodos)

router.post('/api/v1/add-todo', addTodo)

router.put('/api/v1/edit-todo/:id', updateTodo)

router.delete('/api/v1/delete-todo/:id', deleteTodo)

export default router
