import PropTypes from 'prop-types';
import './ProductCard.styles.scss';

function ProductCard({ product }) {
  const { title, image } = product;
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
          <button type="button">Detalles</button>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.instanceOf(Object),
  title: PropTypes.string,
  image: PropTypes.string,
};

ProductCard.defaultProps = {
  product: {},
  title: 'Title',
  image: 'Image not found',
};

export default ProductCard;
