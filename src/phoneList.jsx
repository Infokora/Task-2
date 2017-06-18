import React from 'react';
import Phone from './phone.jsx';

export default({data, props}) => {
    if (!data) {
        return (
            <p>Loading...</p>
        )
    }
    // console.log(data);
    const phones = data.map((e, i) => {
        return (<Phone phone={e} index={i} key={i}/>)
    });

    return (
        <div className="row">
            {phones}
        </div>
    )
};
