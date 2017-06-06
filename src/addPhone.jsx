import React, {Component} from 'react';

export default({togglePopup, addPhone, that}) => {
    return (
        <div
            className="bg-popup"
            ref={(popup) => {
            that.popup = popup
        }}>
            <div className="popup-form">
                <div
                    className="dagger"
                    onClick={togglePopup}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="box-form">
                    <form
                        action=""
                        method=""
                        ref={(form) => {
                        that.addForm = form
                        
                    }}
                        onSubmit={addPhone}>
                        <label htmlFor=""><input name="img" type="text" placeholder="Введіть адресу картинки" required/></label>
                        <label htmlFor=""><input name="name" type="text" placeholder="Назва телефона" required/></label>
                        <label htmlFor=""><input name="price" type="number" placeholder="Ціна телефона" required/></label>
                        <button className="button">Створити новий телефон</button>
                    </form>
                </div>
            </div>
        </div>
    )
};
