import Category from '../models/Category';

class CategoryService {
    async getAllCategories() {
        try {
            const categories = await Category.find();
            return categories;
        } catch (error) {
            throw new Error('Erro ao buscar categorias');
        }
    }

    async getCategoryById(id: string) {
        try {
            const category = await Category.findById(id);
            if (!category) {
                throw new Error('Categoria não encontrada');
            }
            return category;
        } catch (error) {
            throw new Error('Erro ao buscar categoria por ID');
        }
    }

    async createCategory(categoryData: any) {
        try {
            const category = await Category.create(categoryData);
            return category;
        } catch (error) {
            throw new Error('Erro ao criar categoria');
        }
    }

    async updateCategory(id: string, categoryData: any) {
        try {
            const category = await Category.findByIdAndUpdate(id, categoryData, { new: true });
            if (!category) {
                throw new Error('Categoria não encontrada');
            }
            return category;
        } catch (error) {
            throw new Error('Erro ao atualizar categoria');
        }
    }

    async deleteCategory(id: string) {
        try {
            const category = await Category.findByIdAndDelete(id);
            if (!category) {
                throw new Error('Categoria não encontrada');
            }
            return category;
        } catch (error) {
            throw new Error('Erro ao excluir categoria');
        }
    }
}

export default new CategoryService();
