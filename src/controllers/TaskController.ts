import { Request, Response } from 'express'; // Importa classes do pacote express
import Task from '../models/Task'; // Importa o modelo de tarefa

class TaskController { // Define a classe TaskController
    async createTask(req: Request, res: Response) { // Método assíncrono para criar uma tarefa
        try { // Tenta realizar a operação
            const { titulo, descricao, tipo, categoria, usuario } = req.body; // Extrai informações do corpo da requisição
            const task = await Task.create({ titulo, descricao, tipo, categoria, usuario }); // Cria uma nova tarefa no banco de dados
            return res.status(201).json(task); // Retorna a tarefa criada com o status 201 (Created)
        } catch (error) { // Captura erros
            return res.status(500).json({ message: 'Erro ao criar tarefa', error }); // Retorna uma mensagem de erro
        }
    }

    async getTasks(req: Request, res: Response) { // Método assíncrono para obter todas as tarefas
        try { // Tenta realizar a operação
            const tasks = await Task.find(); // Busca todas as tarefas no banco de dados
            return res.status(200).json(tasks); // Retorna as tarefas encontradas
        } catch (error) { // Captura erros
            return res.status(500).json({ message: 'Erro ao buscar tarefas', error }); // Retorna uma mensagem de erro
        }
    }

    async getTaskById(req: Request, res: Response) { // Método assíncrono para obter uma tarefa por ID
        try { // Tenta realizar a operação
            const taskId = req.params.id; // Obtém o ID da tarefa da requisição
            const task = await Task.findById(taskId); // Busca a tarefa no banco de dados pelo ID
            if (!task) { // Verifica se a tarefa foi encontrada
                return res.status(404).json({ message: 'Tarefa não encontrada' }); // Retorna uma mensagem de erro
            }
            return res.status(200).json(task); // Retorna a tarefa encontrada
        } catch (error) { // Captura erros
            return res.status(500).json({ message: 'Erro ao buscar tarefa', error }); // Retorna uma mensagem de erro
        }
    }

    async updateTask(req: Request, res: Response) { // Método assíncrono para atualizar uma tarefa
        try { // Tenta realizar a operação
            const taskId = req.params.id; // Obtém o ID da tarefa da requisição
            const { titulo, descricao, tipo, categoria, usuario } = req.body; // Extrai informações do corpo da requisição
            const updatedTask = await Task.findByIdAndUpdate(taskId, { titulo, descricao, tipo, categoria, usuario }, { new: true }); // Atualiza a tarefa no banco de dados
            if (!updatedTask) { // Verifica se a tarefa foi encontrada
                return res.status(404).json({ message: 'Tarefa não encontrada' }); // Retorna uma mensagem de erro
            }
            return res.status(200).json(updatedTask); // Retorna a tarefa atualizada
        } catch (error) { // Captura erros
            return res.status(500).json({ message: 'Erro ao atualizar tarefa', error }); // Retorna uma mensagem de erro
        }
    }

    async deleteTask(req: Request, res: Response) { // Método assíncrono para excluir uma tarefa
        try { // Tenta realizar a operação
            const taskId = req.params.id; // Obtém o ID da tarefa da requisição
            const deletedTask = await Task.findByIdAndDelete(taskId); // Exclui a tarefa do banco de dados
            if (!deletedTask) { // Verifica se a tarefa foi encontrada
                return res.status(404).json({ message: 'Tarefa não encontrada' }); // Retorna uma mensagem de erro
            }
            return res.status(200).json({ message: 'Tarefa excluída com sucesso' }); // Retorna uma mensagem de sucesso
        } catch (error) { // Captura erros
            return res.status(500).json({ message: 'Erro ao excluir tarefa', error }); // Retorna uma mensagem de erro
        }
    }
}

export default new TaskController(); // Exporta uma instância da classe TaskController
