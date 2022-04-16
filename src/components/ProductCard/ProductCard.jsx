import './ProductCard.styles.scss';
import image from '../../assets/scarecrow.svg';

function ProductCard() {
  return (
    <div className="productcard">
      <div className="productcard__content">
        <div className="productcard__header">
          <p className="productcard__title">Título</p>
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

export default ProductCard;
