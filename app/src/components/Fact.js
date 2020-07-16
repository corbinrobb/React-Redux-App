import React from 'react';
import { connect } from 'react-redux';
import { upvoteFact } from '../actions';

const Fact = (props) => {
  return (
    <div className="fact">
      <div className="card-header">
        <h3>{props.data.user && props.data.user.name.first} {props.data.user && props.data.user.name.last}</h3>
        <div>
          <i onClick={() => {
            (!props.data.upvoted) ? props.upvoteFact(props.data, 1) : props.upvoteFact(props.data, -1);
          }} style={{ color: (!props.data.upvoted) ? 'black' : 'blue', cursor: 'pointer' }} className="thumbs up outline icon"></i>
          <p>{(props.data.upvotes > 1 || props.data.upvotes === 0) ? props.data.upvotes + ' upvotes' : props.data.upvotes + ' upvote'}</p>
        </div>
      </div>
      <p>{props.data.text}</p>
    </div>
  );
}

export default connect(null, { upvoteFact })(Fact);