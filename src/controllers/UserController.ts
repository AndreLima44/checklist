import { Request, Response } from 'express'; // Importa classes do pacote express
import User from '../models/User'; // Importa o modelo de usuário

class UserController { // Define a classe UserController
    async createUser(req: Request, res: Response) { // Método assíncrono para criar um usuário
        try { // Tenta realizar a operação
            const { username, senha, email, peso } = req.body; // Extrai informações do corpo da requisição
            const user = await User.create({ username, senha, email, peso }); // Cria um novo usuário no banco de dados
            return res.status(201).json(user); // Retorna o usuário criado com o status 201 (Created)
        } catch (error) { // Captura erros
            return res.status(500).json({ message: 'Erro ao criar usuário', error }); // Retorna uma mensagem de erro
        }
    }

    async getUsers(req: Request, res: Response) { // Método assíncrono para obter todos os usuários
        try { // Tenta realizar a operação
            const users = await User.find(); // Busca todos os usuários no banco de dados
            return res.status(200).json(users); // Retorna os usuários encontrados
        } catch (error) { // Captura erros
            return res.status(500).json({ message: 'Erro ao buscar usuários', error }); // Retorna uma mensagem de erro
        }
    }

    async getUserById(req: Request, res: Response) { // Método assíncrono para obter um usuário por ID
        try { // Tenta realizar a operação
            const userId = req.params.id; // Obtém o ID do usuário da requisição
            const user = await User.findById(userId); // Busca o usuário no banco de dados pelo ID
            if (!user) { // Verifica se o usuário foi encontrado
                return res.status(404).json({ message: 'Usuário não encontrado' }); // Retorna uma mensagem de erro
            }
            return res.status(200).json(user); // Retorna o usuário encontrado
        } catch (error) { // Captura erros
            return res.status(500).json({ message: 'Erro ao buscar usuário', error }); // Retorna uma mensagem de erro
        }
    }

    async updateUser(req: Request, res: Response) { // Método assíncrono para atualizar um usuário
        try { // Tenta realizar a operação
            const userId = req.params.id; // Obtém o ID do usuário da requisição
            const { username, senha, email, peso } = req.body; // Extrai informações do corpo da requisição
            const updatedUser = await User.findByIdAndUpdate(userId, { username, senha, email, peso }, { new: true }); // Atualiza o usuário no banco de dados
            if (!updatedUser) { // Verifica se o usuário foi encontrado
                return res.status(404).json({ message: 'Usuário não encontrado' }); // Retorna uma mensagem de erro
            }
            return res.status(200).json(updatedUser); // Retorna o usuário atualizado
        } catch (error) { // Captura erros
            return res.status(500).json({ message: 'Erro ao atualizar usuário', error }); // Retorna uma mensagem de erro
        }
    }

    async deleteUser(req: Request, res: Response) { // Método assíncrono para excluir um usuário
        try { // Tenta realizar a operação
            const userId = req.params.id; // Obtém o ID do usuário da requisição
            const deletedUser = await User.findByIdAndDelete(userId); // Exclui o usuário do banco de dados
            if (!deletedUser) { // Verifica se o usuário foi encontrado
                return res.status(404).json({ message: 'Usuário não encontrado' }); // Retorna uma mensagem de erro
            }
            return res.status(200).json({ message: 'Usuário excluído com sucesso' }); // Retorna uma mensagem de sucesso
        } catch (error) { // Captura erros
            return res.status(500).json({ message: 'Erro ao excluir usuário', error }); // Retorna uma mensagem de erro
        }
    }
}

export default new UserController(); // Exporta uma instância da classe UserController
