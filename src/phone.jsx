import React from 'react';

export default ( {phone, update, index} ) => {
    return (
        <div className="phone-box col-sm-12" data-id={phone.id} key={index} onClick={() => {update({ openPhone:true, focus: index}) }}>
            <div className="photo col-sm-3">
                <img src={phone.img} alt={phone.name}/>
            </div>
            <div className="phone-info col-sm-9">
                <div className="info col-sm-9">
                    <h4>{phone.name}</h4>
                </div>
                <div className="phone-price col-sm-3">
                    <h5>{phone.price} грн</h5>
                </div>
            </div>
        </div>
    )
};