import React from 'react';
import Snack from './Snack'

class Stock extends React.Component {
  render() {
    return (
      <div id="current" className="site-bd-section">
        <div className="Stock">
          <div className="Stock-content u-constrainer">
            <div className="Stock-content-hd">
              <h2 className="hdg hdg_2">Currently In Stock</h2>
            </div>
            <div className="Stock-content-bd">
              <p className="copy">
                Here are the snacks that are available in the kitchen now.
              </p>

              <div className="tile-content">
                <ul className="snack-list">
                  {this.props.snacks.map(snack => (
                    <Snack
                      key={snack.id}
                      {...snack}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Stock;