import React from 'react';
import { Link } from 'react-router-dom';

export default ( {phone, index} ) => {
    return (
        <Link to={`/phone/${phone.id}`} className="phone-box col-sm-12" data-id={phone.id} key={index} >
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
        </Link>
    )
};