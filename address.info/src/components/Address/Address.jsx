import React from "react";

const Address = (props) => {
  const { cep, logradouro, localidade, uf } = props;

  return (
    <div data-testid="address" className="container">
      <ul>
        <li>CEP: {cep}</li>
        <li>Logradouro: {logradouro}</li>
        <li>Localidade: {localidade}</li>
        <li>UF: {uf}</li>
      </ul>
    </div>
  );
};

export default Address;
