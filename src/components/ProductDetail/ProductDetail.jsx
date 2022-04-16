import PropTypes from 'prop-types';

function ProductDetail({ product }) {
  return (
    <pre className="productdetail">
      { JSON.stringify(product, null, 2) }
    </pre>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.instanceOf(Object),
};

ProductDetail.defaultProps = {
  product: {},
};

export default ProductDetail;
