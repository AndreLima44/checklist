import Task from '../models/Task';

class TaskService {
    async getAllTasks() {               /*Este método busca todas as tarefas inseridas no banco de dados,
                                            se não houver erros ele retorna todas as tarefas encontradas.
                                            se ocorrer um erro durante a busca, uma exceção é lançada com a mensagem 'Erro ao buscar tarefas'. */
        try {
            const tasks = await Task.find();
            return tasks;
        } catch (error) {
            throw new Error('Erro ao buscar tarefas');
        }
    }

    async getTaskById(id: string) {         /*Este método busca uma tarefa pelo seu ID no banco de dados.
                                            Se a tarefa não for encontrada, uma exceção é lançada com a mensagem 'Tarefa não encontrada'.
                                            Se não houver erros, a tarefa encontrada é retornada.*/
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

    async createTask(taskData: any) {       /* Este método cria uma nova tarefa no banco de dados com os dados fornecidos.
                                                Se não houver erros, a tarefa criada é retornada.
                                                Se ocorrer um erro durante a criação da tarefa, uma exceção é lançada com a mensagem 'Erro ao criar tarefa'. */
        try {
            const task = await Task.create(taskData);
            return task;
        } catch (error) {
            throw new Error('Erro ao criar tarefa');
        }
    }

    async updateTask(id: string, taskData: any) { /*Este método atualiza uma tarefa existente no banco de dados com os dados fornecidos.
                                                    Se a tarefa não for encontrada, uma exceção é lançada com a mensagem 'Tarefa não encontrada'.
                                                    Se não houver erros, a tarefa atualizada é retornada. */
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

    async deleteTask(id: string) {      /* Este método exclui uma tarefa pelo seu ID no banco de dados.
                                        Se a tarefa não for encontrada, uma exceção é lançada com a mensagem 'Tarefa não encontrada'.
                                        Se não houver erros, a tarefa excluída é retornada.
                                       */ 
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
