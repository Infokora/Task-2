import React, {Component} from 'react';
import ReactDom from 'react-dom';

function Phone(properties) {

    return (
        <div className="phone-box row" data-id={properties.id}>
            <div className="photo col-sm-3">
                <img src={properties.img} alt={properties.name}/>
            </div>
            <div className="phone-info col-sm-9">
                <div className="info col-sm-9">
                    <h4>{properties.name}</h4>
                </div>
                <div className="phone-price col-sm-3">
                    <h5>{properties.price}
                        грн</h5>
                </div>
            </div>
        </div>
    )
};

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            phone: this.actionAjax(),
            phoneNew: undefined,
            focus: '',
            openPhone: false
        };
    };

    actionAjax() {
        var req = new XMLHttpRequest();
        req.open('get', 'src/phone.json', false);
        req.send();
        return JSON.parse(req.response)
    };

    handleClick(e) {
        if (e.target.dataset.id) {
            this.setState({focus: e.target.dataset.id, openPhone: true});
        }
        console.log(e.target);
        // let phone = e.target; if (phone.dataser.id){     e.target.parentNode }else{
        // phone = phone.parentNode; }

        if (e.target.dataset.back == 'list') {
            this.setState({focus: e.target.dataset.id, openPhone: false});
        }
    }

    openPhone() {
        var id = this.state.focus,
            element = this
                .state
                .phone
                .map(function (e) {
                    if (id == e.id) {
                        return (
                            <div className="phoneOpen row">
                                <div className="btn-back" data-back="list">повернутися назад до списку</div>
                                <div className="phoneImg col-sm-4">
                                    <img src={e.img} alt=""/>
                                </div>
                                <div className=" col-sm-8">
                                    <h1>{e.name}</h1>
                                    <p>{e.txt}</p>
                                    <span>{e.price}
                                        грн</span>
                                </div>
                            </div>
                        )
                    }
                });

        return element
    };

    togglePopup() {
        this
            .testPopup
            .classList
            .toggle('active');
    };

    createNewId() {
        var id = 0,
            arrId = [];

        arrId = this
            .state
            .phone
            .map(function (e) {
                return + e.id
            });
        let max = arrId.length;
        for (var i = 0; i < max; i++) {
            if (id < arrId[i]) {
                id = arrId[i];
            }
        }

        return id + 1
    }

    addPhone(e) {
        e.preventDefault();

        let max = this.phoneForm.length,
            phone = [{}];

        for (var i = 0; i < max; i++) {
            phone[0][this.phoneForm[i].name] = this.phoneForm[i].value;
        }
        phone[0].id = this.createNewId();
        phone = phone.concat(this.state.phone);

        this.setState({phone: phone, phoneNew: phone});
    }

    createElements() {
        var phones = this
            .state
            .phone
            .map(function (e, i) {
                return <Phone key={i} id={e.id} img={e.img} name={e.name} price={e.price}/>
            });

        return phones
    };

    render() {
        if (this.state.openPhone) {
            var create = this.openPhone();
        } else {
            var create = this.createElements();
        }

        return (
            <div
                className="wrap"
                onClick={this
                .handleClick
                .bind(this)}>
                <div
                    className="btn-add"
                    onClick={this
                    .togglePopup
                    .bind(this)}>
                    Добавити телефон новий
                </div>

                {create}

                <div
                    className="bg-popup"
                    ref={(popup) => {
                    this.testPopup = popup
                }}>
                    <div className="popup-form">
                        <div
                            className="dagger"
                            onClick={this
                            .togglePopup
                            .bind(this)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="box-form">
                            <form
                                action=""
                                method=""
                                ref={(form) => {
                                this.phoneForm = form
                            }}
                                onSubmit={this
                                .addPhone
                                .bind(this)}>
                                <label htmlFor=""><input name="img" type="text" placeholder="Введіть адресу картинки" required/></label>
                                <label htmlFor=""><input name="name" type="text" placeholder="Назва телефона" required/></label>
                                <label htmlFor=""><input name="price" type="number" placeholder="Ціна телефона" required/></label>
                                <button className="button">Створити новий телефон</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};

var box = document.getElementById('container');
ReactDom.render(
    <App></App>, box)