import React from "react";

const Address = (props) => {
  const { cep, logradouro, localidade, uf } = props;

  return (
    <div data-testid="address" className="container box">
      <ul className="box__list">
        <li className="box__list__item"><b>CEP:</b> {cep}</li>
        <li className="box__list__item"><b>Logradouro:</b> {logradouro}</li>
        <li className="box__list__item"><b>Localidade:</b> {localidade}</li>
        <li className="box__list__item"><b>UF:</b> {uf}</li>
      </ul>
    </div>
  );
};

export default Address;
