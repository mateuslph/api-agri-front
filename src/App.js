import React from 'react';
import './App.css';
import Footer from './Footer/Footer';
import Formulario from './Formulario/Formulario';
import Menu from './Menu';
import ProductList from './ProductList/ProductList';
import useProductManagement from './hooks/useProductManagement';

function App() {
  const { products, selectedProduct, isSubmitting, error, createProduct, updateProduct, deleteProduct, selectProduct, clearSelectedProduct } = useProductManagement();

  return (
    <div>
      <Menu />
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      <Formulario
        obj={selectedProduct}
        cadastrar={createProduct}
        cancelar={clearSelectedProduct}
        remover={deleteProduct}
        alterar={updateProduct}
      />
      <ProductList
        vetor={products}
        selecionar={selectProduct}
      />
      <Footer />
    </div>
  );
}

export default App;
