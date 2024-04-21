import { Schema, model, Document } from 'mongoose'; // Importa classes e tipos do Mongoose

// Define uma interface para representar a estrutura de uma tarefa
interface TaskInterface extends Document {
    titulo: string; // Título da tarefa
    descricao: string; // Descrição da tarefa
    dataCriacao: Date; // Data de criação da tarefa
    dataConclusao?: Date; // Data de conclusão da tarefa (opcional)
    tipo: string; // Tipo da tarefa
    categoria?: string; // Categoria da tarefa (opcional)
    status: string; // Status da tarefa
    usuario: string; // Usuário associado à tarefa
}

// Define o esquema do documento para uma tarefa
const TaskSchema = new Schema<TaskInterface>({
    titulo: { type: String, required: true }, // Campo título, do tipo String e obrigatório
    descricao: { type: String, required: true }, // Campo descrição, do tipo String e obrigatório
    dataCriacao: { type: Date, default: Date.now }, // Campo data de criação, do tipo Date com valor padrão definido como a data atual
    dataConclusao: { type: Date }, // Campo data de conclusão, do tipo Date (opcional)
    tipo: { type: String, required: true }, // Campo tipo, do tipo String e obrigatório
    categoria: { type: String }, // Campo categoria, do tipo String (opcional)
    status: { // Campo status, do tipo String com enumeração de valores possíveis
        type: String,
        enum: ['pendente', 'em_andamento', 'completo'],
        default: 'pendente' // Valor padrão definido como 'pendente'
    },
    usuario: { type: String, required: true } // Campo usuário, do tipo String e obrigatório
});

// Cria e exporta o modelo de tarefa baseado no esquema definido
const Task = model<TaskInterface>('Task', TaskSchema);

export default Task;
