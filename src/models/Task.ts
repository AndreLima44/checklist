import { Schema, model, Document } from 'mongoose';

interface TaskInterface extends Document {
    titulo: string;
    descricao: string;
    dataCriacao: Date;
    dataConclusao: Date;
    tipo: string;
    categoria?: string;
    status: string;
    usuario: string;
}

const TaskSchema = new Schema<TaskInterface>({
    titulo: { type: String, required: true },
    descricao: { type: String, required: true },
    dataCriacao: { type: Date, default: Date.now },
    dataConclusao: { type: Date },
    tipo: { type: String, required: true },
    categoria: { type: String },
    status: { type: String, enum: ['pendente', 'em_andamento', 'completo'], default: 'pendente' },
    usuario: { type: String, required: true }
});

const Task = model<TaskInterface>('Task', TaskSchema);

export default Task;
