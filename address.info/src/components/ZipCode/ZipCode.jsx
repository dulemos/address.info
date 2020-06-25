import React, { useState, useEffect } from "react";
import { Loading, NoData, Address } from "../../components";
import "./ZipCode.css";

const ZipCode = () => {
  const [zipcode, setZipcode] = useState("");
  const [loading, setLoading] = useState(false);
  const [noData, setNoData] = useState(false);
  const [address, setAddress] = useState(false);

  useEffect(() => {
    zipcode.length > 8 ? api(removeMask(zipcode)) : console.log("ainda nao..");
  }, [zipcode]);

  const handleChange = (e) => {
    setZipcode(zipcodeMask(e.target.value));
  };

  const api = async (zipcode) => {
    setLoading(true);
    setInterval(() =>  {
      setLoading(false)
      setAddress(true)
    }, 1000)
    return zipcode;
  };

  return (
    <React.Fragment>
      <div data-testid="zipCodeForm" className="container box">
        <form className="box__items">
          <input
            type="text"
            name="zipcode"
            id="zipcode"
            className="box__items__text"
            placeholder="00000-000"
            data-testid="ZipCode-Input"
            value={zipcode}
            onChange={(event) => handleChange(event)}
          ></input>
          <button type="submit" className="box__items__button">
            Buscar CEP
          </button>
        </form>
      </div>
      {!loading || <Loading />}
      {!noData || <NoData />}
      {!address || <Address />}
    </React.Fragment>
  );
};

const zipcodeMask = (value) => {
  return value
    .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{5})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{3})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
};

const removeMask = (value) => {
  return value.replace(/\D/g, "");
};

export default ZipCode;
