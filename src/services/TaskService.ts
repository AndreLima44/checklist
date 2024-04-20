import Task from '../models/Task';

class TaskService {
    async getAllTasks() {
        try {
            const tasks = await Task.find();
            return tasks;
        } catch (error) {
            throw new Error('Erro ao buscar tarefas');
        }
    }

    async getTaskById(id: string) {
        try {
            const task = await Task.findById(id);
            if (!task) {
                throw new Error('Tarefa não encontrada');
            }
            return task;
        } catch (error) {
            throw new Error('Erro ao buscar tarefa por ID');
        }
    }

    async createTask(taskData: any) {
        try {
            const task = await Task.create(taskData);
            return task;
        } catch (error) {
            throw new Error('Erro ao criar tarefa');
        }
    }

    async updateTask(id: string, taskData: any) {
        try {
            const task = await Task.findByIdAndUpdate(id, taskData, { new: true });
            if (!task) {
                throw new Error('Tarefa não encontrada');
            }
            return task;
        } catch (error) {
            throw new Error('Erro ao atualizar tarefa');
        }
    }

    async deleteTask(id: string) {
        try {
            const task = await Task.findByIdAndDelete(id);
            if (!task) {
                throw new Error('Tarefa não encontrada');
            }
            return task;
        } catch (error) {
            throw new Error('Erro ao excluir tarefa');
        }
    }
}

export default new TaskService();
