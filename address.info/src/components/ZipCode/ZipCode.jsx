import React from 'react';

const ZipCode = () => {
    return (
        <div data-testid='zipCodeForm'>
            <form> 
                <input type="text" name="zipcode" id="zipcode"/>
                <button type="submit">Buscar CEP</button>
            </form>
        </div>
    )
}

export default ZipCode