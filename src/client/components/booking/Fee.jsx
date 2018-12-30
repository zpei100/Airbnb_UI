import React from 'react';

export default ({text, price}) => (
  <React.Fragment>
    <div className="d-flex justify-content-between my-3 fees" id={text === 'Total' ? 'total' : ''}>
      <p className="my-auto">{text}</p>
      <p className="my-auto">{price}</p>
    </div>
    <hr className="m-0"/>
  </React.Fragment>
)