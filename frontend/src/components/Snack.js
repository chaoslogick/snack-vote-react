import React from 'react';
import PropTypes from 'prop-types';

class Snack extends React.Component {
  static propTypes = {
    image: PropTypes.string,
    brand: PropTypes.string,
    product: PropTypes.string,
    votes: PropTypes.number
  };

  render() {
    const { image, brand, product, votes } = this.props;
    return (
      <li className="snack-item">
        <div className="image-wrap">
          <span className="votes">
            <span>{votes}</span>
          </span>
          <img src={image} alt={brand} />
        </div>
        <div className="text-wrap">
          <h3 className="product-name">
            {product}
          </h3>
          <p>{brand}</p>
        </div>
      </li>
    );
  }
}

export default Snack;

