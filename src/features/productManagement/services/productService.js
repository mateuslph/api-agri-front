const baseURL = 'http://localhost:8080/api/produtos';

const productService = {
    getProducts: async () => {
        const response = await fetch(baseURL);
        if (!response.ok) {
            throw new Error('Erro ao buscar produtos');
        }
        return response.json();
    },

    getProductById: async (id) => {
        const response = await fetch(`${baseURL}/${id}`);
        if (!response.ok) {
            throw new Error(`Erro ao buscar produto com ID ${id}`);
        }
        return response.json();
    },

    createProduct: async (product) => {
        const response = await fetch(baseURL, {
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
        const response = await fetch(`${baseURL}/${product.id}`, {
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
        const response = await fetch(`${baseURL}/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error(`Erro ao excluir produto com ID ${id}`);
        }
        return response.status;
    },
};

export default productService;