import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div id="voting" className="site-bd-section">
        <div className="Voting">
          <div className="Voting-content">
            <div className="Voting-content-hd">
              <h2 className="hdg hdg_2">Snack Voting</h2>
            </div>
            <div className="Voting-content-bd">
              <p className="copy">
                Vote on the snacks you want to see in this month's rotation

                <span className="votes-remaining">
                  {`${this.props.votesRemaining} Votes Remaining`}
                </span>
              </p>

              <div className="grid">
                <div className="grid-col grid-col_2of3">
                  <div className="available-items">
                    <div className="th">
                      Available Items
                      <span className="vote-count">{this.props.availableSnacks.length}</span>
                    </div>
                    {this.props.availableSnacks.map(snack => (
                    <div className="tr" key={snack.id}>
                      <button className="vote" onClick={() => this.props.vote(snack.id)}></button>
                      <span className="item-name">{snack.brand} {snack.product}</span>
                      <span className="vote-count">{snack.votes}</span>
                    </div>
                    ))}
                  </div>
                </div>
                <div className="grid-col grid-col_1of3">
                  <div className="selected-items">
                    <div className="th">
                      Selection
                      <span className="vote-count">{this.props.selectedSnacks.length}</span>
                    </div>
                    {this.props.selectedSnacks.length ? this.props.selectedSnacks.map(snack => (
                    <div className="tr" key={snack.id}>
                      <span className="item-name">{snack.brand} {snack.product}</span>
                      <span className="vote-count">{snack.votes}</span>
                    </div>
                    )) :
                    <div className="tr">
                      <span className="item-name no-border">No snacks selected</span>
                    </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;