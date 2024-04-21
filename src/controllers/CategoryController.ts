import { Request, Response } from 'express'; // Importa as classes Request e Response do pacote express

import Category from '../models/Category'; // Importa o modelo Category

class CategoryController { // Define a classe CategoryController
    async createCategory(req: Request, res: Response) { // Método assíncrono para criar uma categoria
        try { // Inicia um bloco try para lidar com possíveis erros
            const { nome, cor } = req.body; // Extrai os campos nome e cor do corpo da solicitação
            const category = await Category.create({ nome, cor }); // Cria uma nova categoria no banco de dados
            return res.status(201).json(category); // Retorna a categoria criada com o status 201 (Created)
        } catch (error) { // Captura erros
            return res.status(500).json({ message: 'Erro ao criar categoria', error }); // Retorna uma resposta de erro
        }
    }

    async getCategories(req: Request, res: Response) { // Método assíncrono para buscar todas as categorias
        try { // Inicia um bloco try para lidar com possíveis erros
            const categories = await Category.find(); // Busca todas as categorias no banco de dados
            return res.status(200).json(categories); // Retorna as categorias encontradas
        } catch (error) { // Captura erros
            return res.status(500).json({ message: 'Erro ao buscar categorias', error }); // Retorna uma resposta de erro
        }
    }

    async getCategoryById(req: Request, res: Response) { // Método assíncrono para buscar uma categoria por ID
        try { // Inicia um bloco try para lidar com possíveis erros
            const categoryId = req.params.id; // Obtém o ID da categoria da solicitação
            const category = await Category.findById(categoryId); // Busca a categoria no banco de dados pelo ID
            if (!category) { // Verifica se a categoria foi encontrada
                return res.status(404).json({ message: 'Categoria não encontrada' }); // Retorna uma resposta de erro
            }
            return res.status(200).json(category); // Retorna a categoria encontrada
        } catch (error) { // Captura erros
            return res.status(500).json({ message: 'Erro ao buscar categoria', error }); // Retorna uma resposta de erro
        }
    }

    async updateCategory(req: Request, res: Response) { // Método assíncrono para atualizar uma categoria
        try { // Inicia um bloco try para lidar com possíveis erros
            const categoryId = req.params.id; // Obtém o ID da categoria da solicitação
            const { nome, cor } = req.body; // Extrai os campos nome e cor do corpo da solicitação
            const updatedCategory = await Category.findByIdAndUpdate(categoryId, { nome, cor }, { new: true }); // Atualiza a categoria no banco de dados
            if (!updatedCategory) { // Verifica se a categoria foi encontrada
                return res.status(404).json({ message: 'Categoria não encontrada' }); // Retorna uma resposta de erro
            }
            return res.status(200).json(updatedCategory); // Retorna a categoria atualizada
        } catch (error) { // Captura erros
            return res.status(500).json({ message: 'Erro ao atualizar categoria', error }); // Retorna uma resposta de erro
        }
    }

    async deleteCategory(req: Request, res: Response) { // Método assíncrono para excluir uma categoria
        try { // Inicia um bloco try para lidar com possíveis erros
            const categoryId = req.params.id; // Obtém o ID da categoria da solicitação
            const deletedCategory = await Category.findByIdAndDelete(categoryId); // Exclui a categoria do banco de dados
            if (!deletedCategory) { // Verifica se a categoria foi encontrada
                return res.status(404).json({ message: 'Categoria não encontrada' }); // Retorna uma resposta de erro
            }
            return res.status(200).json({ message: 'Categoria excluída com sucesso' }); // Retorna uma mensagem de sucesso
        } catch (error) { // Captura erros
            return res.status(500).json({ message: 'Erro ao excluir categoria', error }); // Retorna uma resposta de erro
        }
    }
}

export default new CategoryController(); // Exporta uma instância da classe CategoryController
