import { Request, Response } from 'express';
import Category from '../models/Category';

class CategoryController {
    async createCategory(req: Request, res: Response) {
        try {
            const { nome, cor } = req.body;
            const category = await Category.create({ nome, cor });
            return res.status(201).json(category);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao criar categoria', error });
        }
    }

    async getCategories(req: Request, res: Response) {
        try {
            const categories = await Category.find();
            return res.status(200).json(categories);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao buscar categorias', error });
        }
    }

    async getCategoryById(req: Request, res: Response) {
        try {
            const categoryId = req.params.id;
            const category = await Category.findById(categoryId);
            if (!category) {
                return res.status(404).json({ message: 'Categoria não encontrada' });
            }
            return res.status(200).json(category);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao buscar categoria', error });
        }
    }

    async updateCategory(req: Request, res: Response) {
        try {
            const categoryId = req.params.id;
            const { nome, cor } = req.body;
            const updatedCategory = await Category.findByIdAndUpdate(categoryId, { nome, cor }, { new: true });
            if (!updatedCategory) {
                return res.status(404).json({ message: 'Categoria não encontrada' });
            }
            return res.status(200).json(updatedCategory);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao atualizar categoria', error });
        }
    }

    async deleteCategory(req: Request, res: Response) {
        try {
            const categoryId = req.params.id;
            const deletedCategory = await Category.findByIdAndDelete(categoryId);
            if (!deletedCategory) {
                return res.status(404).json({ message: 'Categoria não encontrada' });
            }
            return res.status(200).json({ message: 'Categoria excluída com sucesso' });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao excluir categoria', error });
        }
    }
}

export default new CategoryController();
