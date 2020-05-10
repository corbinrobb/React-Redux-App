import React from 'react';

const Fact = (props) => {
  return (
    <div className="fact">
      <h2>{(props.data.upvotes > 1 || props.data.upvotes === 0) ? props.data.upvotes + ' upvotes' : props.data.upvotes + ' upvote'}</h2>
      <p>{props.data.text}</p>
    </div>
  );
}

export default Fact;