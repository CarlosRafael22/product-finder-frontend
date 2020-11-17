import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductCard from './components/ProductCard';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(1);
  const [productsCounter, setProductsCounter] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [count])

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:8000/finder/api/products');
      const data = await response.json();
      console.log('Pegou produtos');
      setProductsCounter(productsCounter + 1);
      setProducts(data['products']);
      setCount(data['products'].length);
      console.log(data['products'][0])
      console.log(products[0]);
    } catch (error) {
      console.log('Deu merda');
      console.log(error);
    }
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Magazon Finder
        </a>
      </header> */}
      <Navbar />
      <h1>Teste do MAGAZON</h1>
        <h3>Retornou um total de {count} items</h3>
        <h3>Fez {productsCounter} requisicoes</h3>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
        <div class="row">
          {
            products.map(product => (
              <ProductCard
                link={product.link}
                image_url={product.image_url}
                name={product.name}
                price={product.price} />
            ))
          }
        </div>
    </div>
  );
}

export default App;
