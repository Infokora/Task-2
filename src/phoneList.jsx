import React from 'react';
import Phone from './phone.jsx';

export default({data, update}) => {
    if (!data) {
        return (
            <p>Loading...</p>
        )
    }

    const phones = data.map((e, i) => {
        return (<Phone phone={e} index={i} update={update}/>)
    });

    return (
        <div className="row">
            {phones}
        </div>
    )
};