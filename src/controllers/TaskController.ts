import { Request, Response } from 'express';
import Task from '../models/Task';

class TaskController {
    async createTask(req: Request, res: Response) {
        try {
            const { titulo, descricao, tipo, categoria, usuario } = req.body;
            const task = await Task.create({ titulo, descricao, tipo, categoria, usuario });
            return res.status(201).json(task);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao criar tarefa', error });
        }
    }

    async getTasks(req: Request, res: Response) {
        try {
            const tasks = await Task.find();
            return res.status(200).json(tasks);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao buscar tarefas', error });
        }
    }

    async getTaskById(req: Request, res: Response) {
        try {
            const taskId = req.params.id;
            const task = await Task.findById(taskId);
            if (!task) {
                return res.status(404).json({ message: 'Tarefa não encontrada' });
            }
            return res.status(200).json(task);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao buscar tarefa', error });
        }
    }

    async updateTask(req: Request, res: Response) {
        try {
            const taskId = req.params.id;
            const { titulo, descricao, tipo, categoria, usuario } = req.body;
            const updatedTask = await Task.findByIdAndUpdate(taskId, { titulo, descricao, tipo, categoria, usuario }, { new: true });
            if (!updatedTask) {
                return res.status(404).json({ message: 'Tarefa não encontrada' });
            }
            return res.status(200).json(updatedTask);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao atualizar tarefa', error });
        }
    }

    async deleteTask(req: Request, res: Response) {
        try {
            const taskId = req.params.id;
            const deletedTask = await Task.findByIdAndDelete(taskId);
            if (!deletedTask) {
                return res.status(404).json({ message: 'Tarefa não encontrada' });
            }
            return res.status(200).json({ message: 'Tarefa excluída com sucesso' });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao excluir tarefa', error });
        }
    }
}

export default new TaskController();
