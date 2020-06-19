import React from 'react';
import './ZipCode.css'

const ZipCode = () => {
    return (
        <div data-testid='zipCodeForm' className="container box">
            <form className="box__items"> 
                <input type="text" name="zipcode" id="zipcode" className="box__items__text"/>
                <button type="submit" className="box__items__button">Buscar CEP</button>
            </form> 
        </div>
    )
}

export default ZipCode