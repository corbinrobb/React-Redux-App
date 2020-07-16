import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAPI } from './actions';
import './App.css';

import Fact from './components/Fact';


const App = (props) => {
  // const { getAPI } = props;
  useEffect(() => {
    props.getAPI()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (props.facts.length === 0) return <div className="ui container">
    <div className="ui active dimmer">
      <div className="ui massive text loader">Loading</div>
    </div>
  </div>

  return (
    <div className="container">
      <h1>CAT FACTS</h1>
      {props.facts.all && props.facts.all.sort((a, b) => b.upvotes - a.upvotes).map((fact, id) => <Fact key={id} data={fact} />)}
    </div>
  );
}

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps, { getAPI })(App);