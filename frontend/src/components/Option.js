import React from 'react';

const Option = (props) => {

const style = {
  display: 'inline-block',
  padding: '3px',
  textAlign: 'center',
  margin: '3px',
  border: '1px solid black'
    };

const dt = new Date();
const date = dt.getDate()+ "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear();

  return(
    <div style={style}>
      <p>
        <strong>Strong </strong>
         Text
      </p>
      <i>
         Icon
      </i>
      <div>
        {date}
      </div>
    </div>
    )
};

export default Option;