import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAPI } from './actions';
import './App.css';

import Fact from './components/Fact';


const App = (props) => {
  
  useEffect(() => {
    props.getAPI()
  }, [])

  return (
    <div className="container">
      <h1>CAT FACTS</h1>
      {props.state.facts.all && props.state.facts.all.map((fact, id) => <Fact key={id} data={fact} />)}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { state }
}

export default connect(mapStateToProps, { getAPI })(App);