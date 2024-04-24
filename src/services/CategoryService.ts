// Importando o modelo de categoria
import Category from '../models/Category';

// Definindo a classe CategoryService
class CategoryService {
    // Método para obter todas as categorias
    async getAllCategories() {
        try {
            const categories = await Category.find(); // Busca todas as categorias no banco de dados
            return categories; // Retorna as categorias encontradas
        } catch (error) {
            throw new Error('Erro ao buscar categorias'); // Lança um erro se ocorrer um problema ao buscar as categorias
        }
    }

    // Método para obter uma categoria por ID
    async getCategoryById(id: string) {
        try {
            const category = await Category.findById(id); // Busca uma categoria pelo seu ID no banco de dados
            if (!category) {
                throw new Error('Categoria não encontrada'); // Lança um erro se a categoria não for encontrada
            }
            return category; // Retorna a categoria encontrada
        } catch (error) {
            throw new Error('Erro ao buscar categoria por ID'); // Lança um erro se ocorrer um problema ao buscar a categoria pelo ID
        }
    }

    // Método para criar uma nova categoria
    async createCategory(categoryData: any) {
        try {
            const category = await Category.create(categoryData); // Cria uma nova categoria no banco de dados com os dados fornecidos
            return category; // Retorna a categoria criada
        } catch (error) {
            throw new Error('Erro ao criar categoria'); // Lança um erro se ocorrer um problema ao criar a categoria
        }
    }

    // Método para atualizar uma categoria existente
    async updateCategory(id: string, categoryData: any) {
        try {
            const category = await Category.findByIdAndUpdate(id, categoryData, { new: true }); // Atualiza a categoria no banco de dados com os dados fornecidos
            if (!category) {
                throw new Error('Categoria não encontrada'); // Lança um erro se a categoria não for encontrada
            }
            return category; // Retorna a categoria atualizada
        } catch (error) {
            throw new Error('Erro ao atualizar categoria'); // Lança um erro se ocorrer um problema ao atualizar a categoria
        }
    }

    // Método para excluir uma categoria
    async deleteCategory(id: string) {
        try {
            const category = await Category.findByIdAndDelete(id); // Exclui a categoria do banco de dados pelo seu ID
            if (!category) {
                throw new Error('Categoria não encontrada'); // Lança um erro se a categoria não for encontrada
            }
            return category; // Retorna a categoria excluída
        } catch (error) {
            throw new Error('Erro ao excluir categoria'); // Lança um erro se ocorrer um problema ao excluir a categoria
        }
    }
}


export default new CategoryService();
