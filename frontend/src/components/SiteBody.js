import React from 'react';
import Axios from 'axios';

import Hero from './Hero';
import Stock from './Stock';
import Voting from './Voting';
import Form from './Form';
import Error from './Error';

const auth = {
  headers: {
    'Authorization': 'bearer 33b55673-57c7-413f-83ed-5b4ae8d18827'
  }
}

class SiteBody extends React.Component {
  state = {
    snacks: [],
    availableSnacks: [],
    selectedSnacks: [],
    votesRemaining: 3,
    error: null
  }

  componentDidMount() {
    Axios.get('http://localhost:3333/snacks', auth).then(
      response => {
        console.log(response.data)
        const snacks = response.data
        this.setState({snacks, availableSnacks: [...snacks].sort(this.sortByVoteCount)})
      }
    ).catch(_error => this.setState({error: 'Could not retrieve data from API'}))
  }

  updateVoteCount = (id) => (snack) => {
    if (snack.id === id) {
      snack.votes++
    }
    return snack
  }

  sortByVoteCount = (a, b) => {
    // Sort in descending order
    return b.votes - a.votes
  }

  sortByAlpha = (a, b) => {
    // Sort in alphanumeric order
    const one = a.brand.toLowerCase();
    const two = b.brand.toLowerCase();
    return (one < two) ? -1 : (one > two) ? 1 : 0;
  }

  vote = (id) => {
    if (this.state.votesRemaining > 0) {
      Axios.post(`http://localhost:3000/snacks/vote/${id}`, {}, auth).then(
        response => {
          console.log(response.data)
          const updatedSnack = response.data
          this.setState(state => ({
            snacks: state.snacks.map(this.updateVoteCount(id)),
            availableSnacks: state.availableSnacks.filter(snack => snack.id !== id),
            selectedSnacks: state.selectedSnacks.concat(updatedSnack).sort(this.sortByAlpha),
            votesRemaining: state.votesRemaining - 1
          }))
        }
      ).catch(_error => this.setState({error: 'Could not vote'}));
    } else {
      this.setState({ error: 'No votes remaining'})
    }
  }

  closeError = () => {
    this.setState({error: null})
  }

  render() {
    return (
      <div className="site-bd">
        <Hero />
        <Stock snacks={this.state.snacks} />
        <Voting
          availableSnacks={this.state.availableSnacks}
          selectedSnacks={this.state.selectedSnacks}
          votesRemaining={this.state.votesRemaining}
          vote={this.vote}
        />
        <Form />
        <Error error={this.state.error} closeError={this.closeError} />
      </div>
    );
  }
}

export default SiteBody;