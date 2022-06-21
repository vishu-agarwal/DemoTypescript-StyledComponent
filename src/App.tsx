import React, { useState } from 'react';
import './App.css';
import Product from './components/product';
import CreateProduct from './components/CreateProduct';
import { Products } from './components/ProductModel';

const App: React.FC = () => {
  // const [pname, setPname] = useState<{ id: String; name: String }[]>([]);
  const [product, setProduct] = useState<Products[]>([
    {
      id: 'p101',
      name: 'Television',
      image: require('./allImages/profilepic2.png')
      
    },
    {
      id: 'p102',
      name: 'Refrigirator',
      image: require('./allImages/profilepic3.png')
   
    },
    {
      id: 'p103',
      name: 'Air Conditioner',
      image: require('./allImages/join.png')
    }
  ]);

  
  const [updateProduct, setUpdateProduct] = useState<Products>();
  const addProductHandler = (pname: String, image: File) => {
    setProduct((prevState) => [
      ...prevState,
      { id: Math.random().toString(), name: pname, image: image },
    ]);
  };
  const deleteProductHandler = (pid: String) => {
    setProduct((prevState) => {
      return prevState.filter((prods) => prods.id !== pid);
    });
  };
  const updateProductHandler = (pid: String) => {
    const update = product.find((item) => item.id === pid);
    setUpdateProduct(update);
  };
  const updateProducts = (pid: String, pname: String, image: File) => {
    setProduct((prevState) =>
      prevState.filter((prods) => {
        if (prods.id === pid) {
          return (prods.name = pname,prods.image = image);
        } else {
          return (prods.name,prods.image);
        }
      })
    );
  };
  return (
    <div className="App">
      <CreateProduct
        addProduct={addProductHandler}
        fetchProduct={updateProduct}
        update={updateProducts}
      />
      <Product
        pro={product}
        delProduct={deleteProductHandler}
        updtPro={updateProductHandler}
      />
    </div>
  );
};

export default App;
