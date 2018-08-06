import React, { Component } from 'react';
import { connect } from 'react-redux';
import { API_CALL_REQUEST  } from '../actions/types';

class Jokes extends Component {
    componentDidMount() {
        this.props.onRequestJoke();
    }

    render() {
        const { fetching, jokes, error } = this.props;
        const baseImgUrl = "https://s2.coinmarketcap.com/static/img/coins/32x32/2428";
        if (fetching || !jokes  ) return null
        return <div className="container">
            {jokes.map(singleJoke => 
                <div className="joke" key={singleJoke.id} >
                    <div className="joke-content">
                        <img src={baseImgUrl + ".png"} alt=" icon" />
                        <span>Joke : </span>
                        <span>{singleJoke.id}</span>
                    </div>
                    <div>
                        <span>{singleJoke.joke}</span>
                    </div>
                    {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}
                </div>
            )}          
        </div>   
    }
}
const mapStateToProps = state => {
    return {
        fetching: state.jokeCollection.fetching,
        jokes: state.jokeCollection.jokes,
        error: state.jokeCollection.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
      onRequestJoke: () => dispatch({ type: API_CALL_REQUEST })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Jokes);