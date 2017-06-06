import React from 'react';

export default({data, active, update}) => {
    if (!data || !data[active]) {
        return <h3>Nothing found:</h3>
    }

    const phone = data[active];

    return (
        <div className="phoneOpen row">
            <div className="btn-back" data-back="list" onClick={() => {update({openPhone:false}) }} >повернутися назад до списку</div>
            <div className="phoneImg col-sm-4">
                <img src={phone.img} alt={phone.img}/>
            </div>
            <div className=" col-sm-8">
                <h1>{phone.name}</h1>
                <p>{phone.txt}</p>
                <span>{phone.price}
                    грн</span>
            </div>
        </div>
    )
};