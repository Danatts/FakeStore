import Menu from '../../components/Menu/Menu';
import ProductCard from '../../components/ProductCard/ProductCard';
import Footer from '../../components/Footer/Footer';
import './Home.styles.scss';

function Home() {
  return (
    <>
      <Menu />
      <div className="home__list">
        <ProductCard />
      </div>
      <Footer />
    </>
  );
}

export default Home;
