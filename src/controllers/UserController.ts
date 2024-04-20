import { Request, Response } from 'express';
import User from '../models/User';

class UserController {
    async createUser(req: Request, res: Response) {
        try {
            const { username, senha, email, peso } = req.body;
            const user = await User.create({ username, senha, email, peso });
            return res.status(201).json(user);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao criar usuário', error });
        }
    }

    async getUsers(req: Request, res: Response) {
        try {
            const users = await User.find();
            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao buscar usuários', error });
        }
    }

    async getUserById(req: Request, res: Response) {
        try {
            const userId = req.params.id;
            const user = await User.findById(userId);
            if (!user) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao buscar usuário', error });
        }
    }

    async updateUser(req: Request, res: Response) {
        try {
            const userId = req.params.id;
            const { username, senha, email, peso } = req.body;
            const updatedUser = await User.findByIdAndUpdate(userId, { username, senha, email, peso }, { new: true });
            if (!updatedUser) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }
            return res.status(200).json(updatedUser);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao atualizar usuário', error });
        }
    }

    async deleteUser(req: Request, res: Response) {
        try {
            const userId = req.params.id;
            const deletedUser = await User.findByIdAndDelete(userId);
            if (!deletedUser) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }
            return res.status(200).json({ message: 'Usuário excluído com sucesso' });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao excluir usuário', error });
        }
    }
}

export default new UserController();
