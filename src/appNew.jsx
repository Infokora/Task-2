import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import load from './load.js';
import PhoneList from './phoneList.jsx';
import ActivePhone from './activePhone.jsx';
import AddPhone from './addPhone.jsx';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            phone: null,
            phoneNew: undefined,
            focus: 0,
            openPhone: false
        };
    };

    componentDidMount(){
        load(this.props.phone).then( phones => {
            this.setState({
                phone: JSON.parse(phones)
            })
        });
    };

    updateData(config) {
        this.setState(config);
    }

    togglePopup() {
        console.log(this);
        this.popup.classList.toggle('active');
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

        let max = this.addForm.length,
            phone = [{}];

        for (var i = 0; i < max; i++) {
            phone[0][this.addForm[i].name] = this.addForm[i].value;
        }
        phone[0].id = this.createNewId();
        phone = phone.concat(this.state.phone);

        this.setState({phone: phone, phoneNew: phone});
    }

    render() {
        return (
            <div className="wrap container">
                <div className="row">
                    <div className="col-sm-12 btn-add" onClick={this.togglePopup.bind(this)}>
                        Добавити телефон новий
                    </div>
                </div>

                {
                    this.state.openPhone ?
                        <ActivePhone data={this.state.phone} active={this.state.focus} update={this.updateData.bind(this)}/>
                    : <PhoneList data={this.state.phone} update={this.updateData.bind(this)}/>
                }

                <AddPhone that={this} togglePopup={this.togglePopup.bind(this)} addPhone={this.addPhone.bind(this)} />
            </div>
        )
    };
};

var box = document.getElementById('container');
ReactDom.render(
    <BrowserRouter>
        <Route path='/'>
            <App phone='src/phone.json'></App>
        </Route>
    </BrowserRouter>,
     box)