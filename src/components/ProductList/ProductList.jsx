import { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { getAllProducts } from '../../services/products';
import './ProductList.styles.scss';

function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchAllProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };
    fetchAllProducts();
  }, []);

  return (
    <div className="productlist">
      {products.map((prod) => (<ProductCard key={prod.id} product={prod} />))}
    </div>
  );
}

export default ProductList;
