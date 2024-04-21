import { Schema, model, Document } from 'mongoose'; // Importa classes e tipos do Mongoose

// Define uma interface para representar a estrutura de uma categoria
interface CategoriaInterface extends Document {
    nome: string; // Nome da categoria
    cor: string; // Cor da categoria
}

// Define o esquema do documento para uma categoria
const CategoriaSchema = new Schema<CategoriaInterface>({
    nome: { type: String, required: true }, // Campo nome, do tipo String e obrigatório
    cor: { type: String, required: true }   // Campo cor, do tipo String e obrigatório
});

// Cria e exporta o modelo de categoria baseado no esquema definido
const Categoria = model<CategoriaInterface>('Category', CategoriaSchema);

export default Categoria;
