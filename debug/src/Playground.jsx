import Axios from 'axios';
import React from 'react';

import ButtonCounter from './ButtonCounter';


function Playground() {
   const handleClick = (event) => {
      Axios.get('https://cat-fact.herokuapp.com/facts').then((response) => {
         console.log(response.data);
      });
   };

   return (
      <div>
         <div>Hello World!</div>
         <ButtonCounter />
      </div>
   );
}

export default Playground;