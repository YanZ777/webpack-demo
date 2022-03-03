import PropTypes from 'prop-types';
import React, { useState } from 'react';

function ButtonCounter({ buttonText }) {
   const [counter, setCounter] = useState(0);

   const handleClick = () => {
      setCounter(counter + 1);
   };

   return (
      <button onClick={handleClick}>
         {counter} {buttonText}
      </button>
   );
}

ButtonCounter.propTypes = {
   buttonText: PropTypes.string,
};

ButtonCounter.defaultProps = {
   buttonText: 'Meow',
};

export default ButtonCounter;