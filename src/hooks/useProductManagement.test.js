import { renderHook, act } from '@testing-library/react';
import useProductManagement from './useProductManagement';
import * as productService from '../services/productService';

const mockProducts = [
  { id: '1', nome: 'Product 1', preco: 10, quantidade: 5, descricao: 'Description 1' },
  { id: '2', nome: 'Product 2', preco: 20, quantidade: 10, descricao: 'Description 2' },
];

const mockProduct = { id: '3', nome: 'New Product', preco: 15, quantidade: 7, descricao: 'New Description' };

const mockUpdatedProduct = { id: '1', nome: 'Updated Product 1', preco: 12, quantidade: 6, descricao: 'Updated Description 1' };


describe('useProductManagement', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch products successfully', async () => {
    productService.getProducts = jest.fn().mockResolvedValue(mockProducts);
    const { result } = renderHook(() => useProductManagement());

    expect(result.current.isSubmitting).toBe(true);
    await act(() => Promise.resolve()); // Wait for the effect to complete
    expect(result.current.isSubmitting).toBe(false);
    expect(result.current.products).toEqual(mockProducts);
    expect(productService.getProducts).toHaveBeenCalledTimes(1);
  });

  it('should handle fetch products error', async () => {
    productService.getProducts = jest.fn().mockRejectedValue(new Error('Failed to fetch'));
    const { result } = renderHook(() => useProductManagement());

    expect(result.current.isSubmitting).toBe(true);
    await act(() => Promise.resolve()); // Wait for the effect to complete
    expect(result.current.isSubmitting).toBe(false);
    expect(result.current.products).toEqual([]);
    expect(result.current.error).toBe('Failed to fetch products.');
    expect(productService.getProducts).toHaveBeenCalledTimes(1);
  });

  it('should create a product', async () => {
    productService.createProduct = jest.fn().mockResolvedValue(mockProduct);
    productService.getProducts = jest.fn().mockResolvedValue([]); // Initial fetch returns empty array
    const { result } = renderHook(() => useProductManagement());
    await act(() => Promise.resolve()); // Wait for initial fetch

    await act(() => result.current.createProduct(mockProduct));

    expect(result.current.products).toContainEqual(mockProduct);
    expect(productService.createProduct).toHaveBeenCalledWith(mockProduct);
    expect(productService.createProduct).toHaveBeenCalledTimes(1);
  });

  it('should update a product', async () => {
    productService.updateProduct = jest.fn().mockResolvedValue(mockUpdatedProduct);
    productService.getProducts = jest.fn().mockResolvedValue(mockProducts); // Initial fetch returns some products
    const { result } = renderHook(() => useProductManagement());
    await act(() => Promise.resolve()); // Wait for initial fetch

    await act(() => result.current.updateProduct(mockUpdatedProduct));

    expect(result.current.products).toContainEqual(mockUpdatedProduct);
    expect(productService.updateProduct).toHaveBeenCalledWith(mockUpdatedProduct);
    expect(productService.updateProduct).toHaveBeenCalledTimes(1);
  });

  it('should delete a product', async () => {
    const productIdToDelete = '1';
    productService.deleteProduct = jest.fn().mockResolvedValue({});
    productService.getProducts = jest.fn().mockResolvedValue(mockProducts); // Initial fetch returns some products
    const { result } = renderHook(() => useProductManagement());
    await act(() => Promise.resolve()); // Wait for initial fetch

    await act(() => result.current.deleteProduct(productIdToDelete));

    expect(result.current.products.find(p => p.id === productIdToDelete)).toBeUndefined();
    expect(productService.deleteProduct).toHaveBeenCalledWith(productIdToDelete);
    expect(productService.deleteProduct).toHaveBeenCalledTimes(1);
  });

  it('should select a product', () => {
    productService.getProducts = jest.fn().mockResolvedValue([]); // Initial fetch returns empty array
    const { result } = renderHook(() => useProductManagement());

    act(() => result.current.selectProduct(mockProducts[0]));

    expect(result.current.selectedProduct).toEqual(mockProducts[0]);
  });

  it('should clear the selected product', () => {
    productService.getProducts = jest.fn().mockResolvedValue([]); // Initial fetch returns empty array
    const { result } = renderHook(() => useProductManagement());
    act(() => result.current.selectProduct(mockProducts[0])); // Select a product first

    act(() => result.current.clearSelectedProduct());

    expect(result.current.selectedProduct).toEqual({
      id: '',
      nome: '',
      preco: 0,
      quantidade: 0,
      descricao: '',
    });
  });
});