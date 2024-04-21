import { Schema, model, Document } from 'mongoose'; // Importa classes e tipos do Mongoose

// Define uma interface para representar a estrutura de um usuário
interface UserInterface extends Document {
    username: string; // Nome de usuário
    senha: string; // Senha do usuário
    email: string; // Endereço de e-mail do usuário
    peso: number; // Peso do usuário
}

// Define o esquema do documento para um usuário
const UserSchema = new Schema<UserInterface>({
    username: { type: String, required: true, unique: true }, // Campo username, do tipo String, obrigatório e único
    senha: { type: String, required: true }, // Campo senha, do tipo String e obrigatório
    email: { type: String, required: true, unique: true }, // Campo email, do tipo String, obrigatório e único
    peso: { type: Number, required: true } // Campo peso, do tipo Number e obrigatório
});

// Cria e exporta o modelo de usuário baseado no esquema definido
const User = model<UserInterface>('User', UserSchema);

export default User;
