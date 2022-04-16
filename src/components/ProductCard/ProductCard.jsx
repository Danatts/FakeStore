import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProductCard.styles.scss';

function ProductCard({ product }) {
  const { id, title, image } = product;
  return (
    <div className="productcard">
      <div className="productcard__content">
        <div className="productcard__header">
          <p className="productcard__title">{title}</p>
        </div>
        <div className="productcard__figure">
          <img className="productcard__image" src={image} alt="producto" />
        </div>
        <div className="productcard__body">
          <span>Contador</span>
          <Link to={`/product/${id}`}>
            <button className="productcard__button" type="button">Detalles</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.instanceOf(Object),
  id: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
};

ProductCard.defaultProps = {
  product: {},
  id: null,
  title: 'Title',
  image: 'Image not found',
};

export default ProductCard;
