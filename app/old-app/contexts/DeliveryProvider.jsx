import React, { createContext, useContext, useState } from 'react';

const DeliveryContext = createContext('DefaultValue');

export const useDelivery = () => {
  return useContext(DeliveryContext);
};
const DeliveryProvider = ({ children }) => {
  // const [quantity, setQuantity] = useState(1)
  const [input, setInput] = useState({});
  const [disabled, setDisabled] = useState(true);

  let value = {
    input,
    disabled,
    setInput,
    setDisabled
  };
  return (
    <DeliveryContext.Provider value={value}>
      {children}
    </DeliveryContext.Provider>
  );
};

export default DeliveryProvider;