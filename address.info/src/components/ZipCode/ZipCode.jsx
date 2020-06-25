import React, { useState, useEffect } from "react";
import { Loading, NoData, Address } from "../../components";
import "./ZipCode.css";

const ZipCode = () => {
  const [zipcode, setZipcode] = useState("");
  const [loading, setLoading] = useState(false);
  const [noData, setNoData] = useState(false);
  const [address, setAddress] = useState(false);
  const [addressInfo, setAddressInfo] = useState({});
  const [message, setMessage] = useState({});

  useEffect(() => {
    setNoData(false)
    setAddress(false)
    zipcode.length > 8 ? api(removeMask(zipcode)) : console.log("ainda nao..");
  }, [zipcode]);

  useEffect(() => {
    setLoading(false);
    !addressInfo.cep || setAddress(true);
  }, [addressInfo]);

  useEffect(() => {
    setLoading(false);
    !message.erro || setNoData(true);
  }, [message])

  const handleChange = (e) => {
    setZipcode(zipcodeMask(e.target.value));
  };

  const handleClick = (e) => {
    e.preventDefault();
    const data = removeMask(zipcode);
    data.length === 8 ? api(data) : setMessage({'erro': 'Caracteres insuficientes.'}) 
  }

  const api = async (zipcode) => {
    setLoading(true);
    const data = await fetch(`http://localhost:5000/cep/${zipcode}`);
    const jsonData = await data.json();

    data.status === 201 ? setAddressInfo(jsonData) : setMessage(jsonData);
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
          <button type="submit" className="box__items__button" onClick={handleClick}>
            Buscar CEP
          </button>
        </form>
      </div>
      {!loading || <Loading />}
      {!noData || <NoData message={message} />}
      {!address || (
        <Address
          cep={addressInfo.cep}
          logradouro={addressInfo.logradouro}
          localidade={addressInfo.localidade}
          uf={addressInfo.uf}
        />
      )}
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
