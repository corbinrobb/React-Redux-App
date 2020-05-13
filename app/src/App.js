import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAPI } from './actions';
import './App.css';

import Fact from './components/Fact';


const App = ({ getAPI, facts }) => {
  useEffect(() => {
    getAPI()
  }, [getAPI])

  return (
    <div className="container">
      <h1>CAT FACTS</h1>
      {facts.all && facts.all.sort((a, b) => b.upvotes - a.upvotes).map((fact, id) => <Fact key={id} data={fact} />)}
    </div>
  );
}

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps, { getAPI })(App);