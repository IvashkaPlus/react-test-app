import React from 'react';
import {ClickedContext} from "../App";

export default props => {
    return (
        <div style={{
            border: '1px solid #ccc',
            margin: 'auto',
            width: '400px'
        }}>
            <h3>Counter 2</h3>
            <ClickedContext>
                {clicked => clicked ?  <p>Clicked</p> : null}
            </ClickedContext>
        </div>
    )
}