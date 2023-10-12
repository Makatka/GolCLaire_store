import React from 'react';
import {AvailableLabel, Wrapper} from "./StackStatus.styles";

const StackStatus = ({stackStatus}) => {
  if (stackStatus) {
    return (
      <Wrapper >
        <AvailableLabel />
        <div>
          <p>Sold:<span>12</span></p>

        </div>
        <div>
          <p>Available:<span>30</span></p>
        </div>
      </Wrapper>
    );
  }



};

export default StackStatus;