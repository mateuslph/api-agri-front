const baseURL = 'http://localhost:8080/api/produtos'; // Base URL for the API

const productService = {
    getProducts: async () => {
        const response = await fetch(`${baseURL}/listar`);
        if (!response.ok) {
            throw new Error(`Erro ao buscar produtos`);
        }
        return response.json();
    },

    createProduct: async (product) => {
        const response = await fetch(`${baseURL}/cadastrar`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        });
        if (!response.ok) {
            throw new Error('Erro ao criar produto');
        }
        return response.json();
    },

    updateProduct: async (product) => {
        const response = await fetch(`${baseURL}/alterar/${product.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        });
        if (!response.ok) {
            throw new Error(`Erro ao atualizar produto com ID ${product.id}`);
        }
        return response.json();
    },

    deleteProduct: async (id) => {
        const response = await fetch(`${baseURL}/remover/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error(`Erro ao excluir produto com ID ${id}`);
        }
        return response.status;
    },
};

export default productService;