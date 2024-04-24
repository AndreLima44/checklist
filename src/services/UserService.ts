// Importando o modelo de usuário
import User from '../models/User';

// Definindo a classe UserService
class UserService {
    // Método para obter todos os usuários
    async getAllUsers() {
        try {
            const users = await User.find(); // Busca todos os usuários no banco de dados
            return users; // Retorna os usuários encontrados
        } catch (error) {
            throw new Error('Erro ao buscar usuários'); // Lança um erro se ocorrer um problema ao buscar os usuários
        }
    }

    // Método para obter um usuário pelo seu ID
    async getUserById(id: string) {
        try {
            const user = await User.findById(id); // Busca um usuário pelo seu ID no banco de dados
            if (!user) {
                throw new Error('Usuário não encontrado'); // Lança um erro se o usuário não for encontrado
            }
            return user; // Retorna o usuário encontrado
        } catch (error) {
            throw new Error('Erro ao buscar usuário por ID'); // Lança um erro se ocorrer um problema ao buscar o usuário pelo ID
        }
    }

    // Método para criar um novo usuário
    async createUser(userData: any) {
        try {
            const user = await User.create(userData); // Cria um novo usuário no banco de dados com os dados fornecidos
            return user; // Retorna o usuário criado
        } catch (error) {
            throw new Error('Erro ao criar usuário'); // Lança um erro se ocorrer um problema ao criar o usuário
        }
    }

    // Método para atualizar um usuário existente
    async updateUser(id: string, userData: any) {
        try {
            const user = await User.findByIdAndUpdate(id, userData, { new: true }); // Atualiza o usuário no banco de dados com os dados fornecidos
            if (!user) {
                throw new Error('Usuário não encontrado'); // Lança um erro se o usuário não for encontrado
            }
            return user; // Retorna o usuário atualizado
        } catch (error) {
            throw new Error('Erro ao atualizar usuário'); // Lança um erro se ocorrer um problema ao atualizar o usuário
        }
    }

    // Método para excluir um usuário
    async deleteUser(id: string) {
        try {
            const user = await User.findByIdAndDelete(id); // Exclui o usuário do banco de dados pelo seu ID
            if (!user) {
                throw new Error('Usuário não encontrado'); // Lança um erro se o usuário não for encontrado
            }
            return user; // Retorna o usuário excluído
        } catch (error) {
            throw new Error('Erro ao excluir usuário'); // Lança um erro se ocorrer um problema ao excluir o usuário
        }
    }
}

export default new UserService();
