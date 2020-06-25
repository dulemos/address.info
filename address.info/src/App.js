import React from "react";
import "./App.css";
import { ZipCode } from "./components";

function App() {


  return (

    <div className="App">
      <ZipCode/>
      {/* <Address cep='0306300' logradouro='123456 teste' localidade='dsadpaso' uf='SP' /> */}
      {/* <Loading /> */}
      {/* <NoData message = "Dados não encontrados"/> */}
    </div>
  );
}

export default App;
