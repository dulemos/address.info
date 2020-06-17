import React from 'react';

const NoData = (props) =>  {
    const {message} = props;

    return (
        <div data-testid="nodata">
            <h1>{message}</h1>
        </div>
    ) 
}

export default NoData