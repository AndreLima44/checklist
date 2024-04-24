import express from 'express';
import userController from '../controllers/UserController';
import taskController from '../controllers/TaskController';
import categoryController from '../controllers/CategoryController';

const router = express.Router();

// Rotas para usuários
router.post('/users', userController.createUser); //Essa rota permite criar um usuário no banco com seus respectivos atributos
router.get('/users', userController.getUsers); //Essa rota permite buscar todos os usuários no banco
router.get('/users/:id', userController.getUserById); //Essa rota permite buscar um usuário pelo id dele no banco
router.put('/users/:id', userController.updateUser); //Essa aqui permite atualizar um usuário no banco puxando pelo id dele
router.delete('/users/:id', userController.deleteUser); //E essa aqui permite deletar um usuário pelo id dele no banco

// Rotas para tarefas
router.post('/tasks', taskController.createTask); //Essa rota cria uma tarefa no banco
router.get('/tasks', taskController.getTasks); //Essa aqui puxa todas as tarefas no banco
router.get('/tasks/:id', taskController.getTaskById); //Essa rota puxa uma tarefa do banco pelo seu id
router.put('/tasks/:id', taskController.updateTask); //Essa aqui permite atualizar uma tarefa no banco puxando pelo id dela
router.delete('/tasks/:id', taskController.deleteTask); //E essa permite deletar uma tarefa pelo id dela no banco

// Rotas para categorias
router.post('/categories', categoryController.createCategory); //Essa rota aqui permite criar uma categoria via postman para entrar no MongoDB
router.get('/categories', categoryController.getCategories); //Essa rota pega todas as categorias no banco e mostra pro user
router.get('/categories/:id', categoryController.getCategoryById); //Essa rota permite buscar a categoria pelo id dela no banco
router.put('/categories/:id', categoryController.updateCategory); //Essa aqui permite atualizar a categoria no banco puxando pelo id dela
router.delete('/categories/:id', categoryController.deleteCategory);//Essa rota aqui permite deletar a categoria pelo id dela no banco

export default router;
