import { Schema, model, Document } from 'mongoose';

interface CategoriaInterface extends Document {
    nome: string;
    cor: string;
}

const CategoriaSchema = new Schema<CategoriaInterface>({
    nome: { type: String, required: true },
    cor: { type: String, required: true }
});

const Categoria = model<CategoriaInterface>('Category', CategoriaSchema);

export default Categoria;
