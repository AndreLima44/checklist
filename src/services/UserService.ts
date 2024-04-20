import User from '../models/User';

class UserService {
    async getAllUsers() {
        try {
            const users = await User.find();
            return users;
        } catch (error) {
            throw new Error('Erro ao buscar usuários');
        }
    }

    async getUserById(id: string) {
        try {
            const user = await User.findById(id);
            if (!user) {
                throw new Error('Usuário não encontrado');
            }
            return user;
        } catch (error) {
            throw new Error('Erro ao buscar usuário por ID');
        }
    }

    async createUser(userData: any) {
        try {
            const user = await User.create(userData);
            return user;
        } catch (error) {
            throw new Error('Erro ao criar usuário');
        }
    }

    async updateUser(id: string, userData: any) {
        try {
            const user = await User.findByIdAndUpdate(id, userData, { new: true });
            if (!user) {
                throw new Error('Usuário não encontrado');
            }
            return user;
        } catch (error) {
            throw new Error('Erro ao atualizar usuário');
        }
    }

    async deleteUser(id: string) {
        try {
            const user = await User.findByIdAndDelete(id);
            if (!user) {
                throw new Error('Usuário não encontrado');
            }
            return user;
        } catch (error) {
            throw new Error('Erro ao excluir usuário');
        }
    }
}

export default new UserService();
