import React from 'react';
/**
 * Star em homenagem à um velho amigo (μ)
 * :)
 */
const StarContext = React.createContext({
  names: null,
  incrementValue: () => {},
});

export default StarContext;
