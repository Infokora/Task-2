import React from 'react';
import { Link } from 'react-router-dom';

export default ({data, props}) => {

    if (!data) {
        return (
            <p>Loading...</p>
        )
    }
    var phone;
    data.forEach( (e) => {
        if(e.id == props.match.params.active){
            phone = e;
        }
    });
    return (
        <div className="phoneOpen row">
            <Link to='/home' className="btn-back" data-back="list">повернутися назад до списку</Link>
            <div className="phoneImg col-sm-4">
                <img src={phone.img} alt={phone.img}/>
            </div>
            <div className=" col-sm-8">
                <h1>{phone.name}</h1>
                <p>{phone.txt}</p>
                <span>{phone.price} грн</span>
            </div>
        </div>
    )
};