import { useState, useEffect } from 'react';
import * as productService from './productService';

const useProductManagement = () => {
  // State variables
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({
    id: '',
    nome: '',
    preco: 0,
    quantidade: 0,
    descricao: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch products from the API
  const fetchProducts = async () => {
    setIsSubmitting(true);
    setError(null);
    try {
      const data = await productService.getProducts();
      setProducts(data);
    } catch (err) {
      setError('Failed to fetch products.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to create a new product
  const createProduct = async (product) => {
    setIsSubmitting(true);
    setError(null);
    try {
      const createdProduct = await productService.createProduct(product);
      setProducts([...products, createdProduct]);
    } catch (err) {
      setError('Failed to create product.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to update an existing product
  const updateProduct = async (product) => {
    setIsSubmitting(true);
    setError(null);
    try {
      const updatedProduct = await productService.updateProduct(product);
      setProducts(products.map((p) => (p.id === product.id ? updatedProduct : p)));
    } catch (err) {
      setError('Failed to update product.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to delete a product
  const deleteProduct = async (productId) => {
    setIsSubmitting(true);
    setError(null);
    try {
      await productService.deleteProduct(productId);
      setProducts(products.filter((p) => p.id !== productId));
    } catch (err) {
      setError('Failed to delete product.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to select a product
  const selectProduct = (product) => {
    setSelectedProduct(product);
  };

  // Function to clear the selected product
  const clearSelectedProduct = () => {
    setSelectedProduct({
      id: '',
      nome: '',
      preco: 0,
      quantidade: 0,
      descricao: '',
    });
  };

  // Fetch products on initial load
  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    selectedProduct,
    isSubmitting,
    error,
    fetchProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    selectProduct,
    clearSelectedProduct,
  };
};

export default useProductManagement;