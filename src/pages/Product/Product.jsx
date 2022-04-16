import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import { getSingleProduct } from '../../services/products';

function Product() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  console.log(product);

  useEffect(() => {
    const fetchSingleProduct = async () => {
      const data = await getSingleProduct(id);
      setProduct(data);
    };
    fetchSingleProduct(id);
  }, []);

  return (
    <>
      <Menu />
      <ProductDetail product={product} />
      <Footer />
    </>
  );
}

export default Product;
