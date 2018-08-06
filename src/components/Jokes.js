import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { API_CALL_REQUEST } from '../actions/types';

class Jokes extends Component {
  componentDidMount() {
    this.props.onRequestJoke();
  }

  render() {
    const { fetching, jokes, error } = this.props;
    const baseImgUrl = 'https://s2.coinmarketcap.com/static/img/coins/32x32/2428';
    if (fetching || !jokes  ) {return null;}
    return <div className="container">
      {jokes.map(singleJoke => 
        <div className="joke" key={singleJoke.id} >
          <div className="joke-content">
            <img src={baseImgUrl + '.png'} alt=" icon" />
            <span>Joke : </span>
            <span>{singleJoke.id}</span>
          </div>
          <div>
            <span>{singleJoke.joke}</span>
          </div>
          {error && <p>Failed to fetch joke api!</p>}
        </div>
      )}          
    </div>;   
  }
}
const mapStateToProps = state => {
  return {
    fetching: state.jokeCollection.fetching,
    jokes: state.jokeCollection.jokes,
    error: state.jokeCollection.error,
  };
};

Jokes.propTypes = {
  fetching: PropTypes.bool.isRequired,
  jokes: PropTypes.array.isRequired,
  error: PropTypes.string,
  onRequestJoke: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestJoke: () => dispatch({ type: API_CALL_REQUEST })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Jokes);