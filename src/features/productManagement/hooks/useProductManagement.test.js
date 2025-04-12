import { renderHook, act } from '@testing-library/react';
import useProductManagement from '../hooks/useProductManagement';
import productService from '../services/productService';

jest.mock('../services/productService');

describe('useProductManagement', () => {
  const mockProducts = [{ id: 1, nome: 'Produto 1', marca: 'Marca 1' }, { id: 2, nome: 'Produto 2', marca: 'Marca 2' }];

  beforeEach(() => {
    productService.getProducts.mockResolvedValue(mockProducts);
    productService.createProduct.mockImplementation((product) => Promise.resolve({ ...product, id: 3 }));
    productService.updateProduct.mockImplementation((product) => Promise.resolve(product));
    productService.deleteProduct.mockResolvedValue({});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch products on initial render', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useProductManagement());

    expect(result.current.products).toEqual([]);
    expect(result.current.isSubmitting).toBe(true);

    await waitForNextUpdate();

    expect(result.current.products).toEqual(mockProducts);
    expect(result.current.isSubmitting).toBe(false);
    expect(productService.getProducts).toHaveBeenCalledTimes(1);
  });

  it('should handle errors when fetching products', async () => {
    productService.getProducts.mockRejectedValue(new Error('Erro ao buscar produtos'));

    const { result, waitForNextUpdate } = renderHook(() => useProductManagement());

    await waitForNextUpdate();

    expect(result.current.products).toEqual([]);
    expect(result.current.error).toBe('Erro ao buscar produtos: Erro ao buscar produtos');
    expect(result.current.isSubmitting).toBe(false);
  });

  it('should create a product', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useProductManagement());
    await waitForNextUpdate();

    const newProduct = { nome: 'Produto 3', marca: 'Marca 3' };

    await act(async () => {
      result.current.createProduct(newProduct);
    });

    expect(productService.createProduct).toHaveBeenCalledWith(newProduct);

    await waitForNextUpdate();

    expect(result.current.products).toContainEqual({ ...newProduct, id: 3 });
  });

  it('should handle errors when creating a product', async () => {
    productService.createProduct.mockRejectedValue(new Error('Erro ao criar produto'));
    const { result, waitForNextUpdate } = renderHook(() => useProductManagement());
    await waitForNextUpdate();

    const newProduct = { nome: 'Produto 3', marca: 'Marca 3' };

    await act(async () => {
      result.current.createProduct(newProduct);
    });

    await waitForNextUpdate();

    expect(result.current.error).toBe('Erro ao criar produto: Erro ao criar produto');
  });

  it('should update a product', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useProductManagement());
    await waitForNextUpdate();

    const updatedProduct = { id: 1, nome: 'Produto 1 Atualizado', marca: 'Marca 1 Atualizada' };

    await act(async () => {
      result.current.updateProduct(updatedProduct);
    });

    expect(productService.updateProduct).toHaveBeenCalledWith(updatedProduct);

    await waitForNextUpdate();

    expect(result.current.products).toContainEqual(updatedProduct);
    expect(result.current.selectedProduct).toBeNull();
  });

  it('should handle errors when updating a product', async () => {
    productService.updateProduct.mockRejectedValue(new Error('Erro ao atualizar produto'));
    const { result, waitForNextUpdate } = renderHook(() => useProductManagement());
    await waitForNextUpdate();

    const updatedProduct = { id: 1, nome: 'Produto 1 Atualizado', marca: 'Marca 1 Atualizada' };

    await act(async () => {
      result.current.updateProduct(updatedProduct);
    });

    await waitForNextUpdate();

    expect(result.current.error).toBe('Erro ao atualizar produto: Erro ao atualizar produto');
  });

  it('should delete a product', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useProductManagement());
    await waitForNextUpdate();

    const productIdToDelete = 1;

    await act(async () => {
      result.current.deleteProduct(productIdToDelete);
    });

    expect(productService.deleteProduct).toHaveBeenCalledWith(productIdToDelete);

    await waitForNextUpdate();

    expect(result.current.products.find(p => p.id === productIdToDelete)).toBeUndefined();
    expect(result.current.selectedProduct).toBeNull();
  });

  it('should handle errors when deleting a product', async () => {
    productService.deleteProduct.mockRejectedValue(new Error('Erro ao excluir produto'));
    const { result, waitForNextUpdate } = renderHook(() => useProductManagement());
    await waitForNextUpdate();

    const productIdToDelete = 1;

    await act(async () => {
      result.current.deleteProduct(productIdToDelete);
    });

    await waitForNextUpdate();

    expect(result.current.error).toBe('Erro ao excluir produto: Erro ao excluir produto');
  });

  it('should select a product', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useProductManagement());
    await waitForNextUpdate();

    act(() => {
      result.current.selectProduct(0);
    });

    expect(result.current.selectedProduct).toEqual(mockProducts[0]);
  });

  it('should clear the selected product', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useProductManagement());
    await waitForNextUpdate();

    act(() => {
      result.current.selectProduct(0);
    });

    expect(result.current.selectedProduct).toEqual(mockProducts[0]);

    act(() => {
      result.current.clearSelectedProduct();
    });

    expect(result.current.selectedProduct).toBeNull();
  });
});