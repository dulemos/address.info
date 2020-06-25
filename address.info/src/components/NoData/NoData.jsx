import React from 'react';

const NoData = (props) =>  {
    const {message} = props;

    return (
        <div data-testid="nodata" className="container box">
            <h1 className="box__items">{message}</h1>
        </div>
    ) 
}

export default NoData