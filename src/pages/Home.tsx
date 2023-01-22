import * as React from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';

const Home: React.FC = () => {
  const { fetchAllProducts, products } = React.useContext<any>(ShopContext);

  React.useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  if (!products) return <div>Loading...</div>;

  return (
    <div className='home-container'>
      {products.map((product: any) => {
        return (
          <Link to={`products/${product.handle}`} key={product.id}>
            <h2>{product.title}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
