import React from 'react';
import '../../App.css';
import Footer from '../../Components/Footer';
import Formulario from './ui/Formulario';
import Menu from '../../Components/Menu';
import ProductList from './ui/ProductList';
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
        alterar={updateProduct}
        remover={deleteProduct}
      />
      <Footer />
    </div>
  );
}

export default App;