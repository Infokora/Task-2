import React, {Component} from 'react';

export default( {togglePopup, addPhone, that, printImg} ) => {
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
                        onSubmit={addPhone}
                        onChange={printImg}
                        >
                        <label htmlFor="">
                            <input name="img" type="file" placeholder="Введіть адресу картинки" required
                            ref={(input) => {
                                that.inputImg = input
                            }}/>
                            <img className="imgBox" src="" title="Загрузите фото"></img>
                        </label>
                        <label htmlFor=""><input name="name" type="text" placeholder="Назва телефона" required/></label>
                        <label htmlFor=""><input name="price" type="number" placeholder="Ціна телефона" required/></label>
                        <button className="button">Створити новий телефон</button>
                    </form>
                </div>
            </div>
        </div>
    )
};
