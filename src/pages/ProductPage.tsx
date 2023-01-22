import * as React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';

const ProductPage: React.FC = () => {
  const { handle } = useParams();

  const { fetchProductByHandle, addItemToCheckout, product } =
    React.useContext<any>(ShopContext);

  React.useEffect(() => {
    fetchProductByHandle(handle);
  }, [fetchProductByHandle, handle]);

  if (!product.title) return <div>Loading...</div>;

  return (
    <div className='product-container'>
      <h1>{product.title}</h1>
    </div>
  );
};

export default ProductPage;
