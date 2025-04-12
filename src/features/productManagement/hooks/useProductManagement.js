import { useState, useEffect } from 'react';
import productService from '../services/productService';

const useProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await productService.getProducts();
      setProducts(data);
    } catch (err) {
      setError('Erro ao carregar produtos.');
    }
  };

  const create = async (product) => {
    setIsSubmitting(true);
    setError(null);
    try {
      const createdProduct = await productService.createProduct(product);
      setProducts([...products, createdProduct]);
      setSelectedProduct(null);
    } catch (err) {
      setError('Erro ao criar produto.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const update = async (product) => {
    setIsSubmitting(true);
    setError(null);
    try {
      await productService.updateProduct(product);
      setProducts(products.map(p => (p.id === product.id ? product : p)));
      setSelectedProduct(null);
    } catch (err) {
      setError('Erro ao atualizar produto.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const remove = async (id) => {
    setIsSubmitting(true);
    setError(null);
    try {
      await productService.deleteProduct(id);
      setProducts(products.filter(product => product.id !== id));
      setSelectedProduct(null);
    } catch (err) {
      setError('Erro ao remover produto.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const select = (product) => {
    setSelectedProduct(product);
  };

  const clearSelected = () => {
    setSelectedProduct(null);
  };

  return {
    products,
    selectedProduct,
    isSubmitting,
    error,
    createProduct: create,
    updateProduct: update,
    deleteProduct: remove,
    selectProduct: select,
    clearSelectedProduct: clearSelected,
  };
};

export default useProductManagement;