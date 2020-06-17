import App from "../App";
import { ZipCode, Address, Loading, NoData } from "../components";
import React from "react";
import { render, fireEvent } from "@testing-library/react";

describe("Components rendering", () => {
  it("Should render zipCode component properly", () => {
    const { getByTestId } = render(<ZipCode />);
    const container = getByTestId("zipCodeForm");

    expect(container).toBeDefined();
  });
  it("Should render address component properly", () => {
    const { getByTestId } = render(
      <Address
        cep="0000-000"
        logradouro="Rua numero zero"
        localidade="Bairro"
        uf="DF"
      />
    );
    const container = getByTestId("address");

    expect(container).toBeDefined();
  });
  it("Should render loading component properly", () => {
    const { getByTestId } = render(<Loading />);
    const container = getByTestId("loading");

    expect(container).toBeDefined();
  });
  it("Should render noData component properly", () => {
    const { getByTestId } = render(<NoData />);
    const container = getByTestId("nodata");

    expect(container).toBeDefined();
  })
});
