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
    <div className="main-content">
      <Menu />
      <div className="product-management-container">

        {error != null && (
          <div className="error-overlay">
            <p style={{ padding: '0', margin: '0', color: 'red', textAlign: 'center' }}>{error}</p>
          </div>
        )}

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
      </div>
      <Footer />
    </div>
  );
}

export default App;