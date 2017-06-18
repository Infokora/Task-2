import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { HashRouter, Switch, Route} from 'react-router-dom';

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
            });
            this.props = {
                phone: JSON.parse(phones)
            };
        });
    };

    togglePopup() {
        this.popup.classList.toggle('active');
    };

    createNewId() {
        var id = 0;
        this.state.phone.forEach(function (e) {
            if (id < e.id) {
                id = +e.id;
            }
        });
        return id + 1
    };

    printImg(){
        var reader = new FileReader();
        reader.onload = (e) => {
            this.inputImg.nextElementSibling.setAttribute('src', e.target.result);
        };
        reader.readAsDataURL(this.inputImg.files[0]);
    };

    addPhone(e) {
        e.preventDefault();

        let max = this.addForm.length-1,
            phone = {};

        for (var i = 0; i < max; i++) {
            phone[this.addForm[i].name] = this.addForm[i].value;
        }
        phone.id = this.createNewId();

        this.setState({
            phone: this.state.phone.concat(phone)
        });
    };

    render() {
        return (
            <div className="wrap container">
                <div className="row">
                    <div className="col-sm-12 btn-add" onClick={this.togglePopup.bind(this)}>
                        Добавити телефон новий
                    </div>
                </div>
                {
                    <Switch>
                        <Route path={'/home'} render={(props) => {
                            return <PhoneList props={props} data={this.state.phone}/>
                        }}/>
                        <Route path={'/phone/:active'} render={(props) => {
                            return <ActivePhone props={props} data={this.state.phone}/>
                        }}/> 
                    </Switch>
                }
                <AddPhone that={this} togglePopup={this.togglePopup.bind(this)} addPhone={this.addPhone.bind(this)} printImg={this.printImg.bind(this)} />
            </div>
        )
    };
};

var box = document.getElementById('container');
ReactDom.render(
    <HashRouter>
        <App/>
    </HashRouter>
    ,
     box)