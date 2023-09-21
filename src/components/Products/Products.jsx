import React, { useContext, useEffect } from 'react';

import './Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';
import AppContext from '../../context/AppContext';

function Products () {

  const { products, setProducts, loading, setLoading } = useContext(AppContext);

  useEffect(() => {
    fetchProducts('iphone').then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, []);


  return (
    (loading && <Loading/>) || ( 
      <section className="products container">
        { products.map((product) => <ProductCard key={product.id} data={product}/>)}
        {/* {products.map((product) => <a style={{ display: 'block' }} href={product.permalink} key={product.title}>{product.title}</a>)} */}
      </section>)
    
  );
}

export default Products;
