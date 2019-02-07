import React from 'react';

const result = (props) => (
    <div className="Result">
        <p dangerouslySetInnerHTML={{__html: props.content}}></p>
    </div>
);

export default result;