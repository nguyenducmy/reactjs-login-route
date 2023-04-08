import React, {Component} from "react";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            role: '',
            phone: ''
        };

    }

    const = {
        name: 'Nguyen Duc My',
        role: 'Java developer',
        phone: '0799945560'
    };

    render() {
        return (
            <div>
                <Header></Header>
                <div>
                    <SideMenu/>
                    <div class="col-10 page" id="pages">
                        <br/><br/><br/><br/>
                        <div style={{margin: 'auto'}}><h2>Contact</h2></div>
                        <br/><br/>
                        <div style={{float: 'left'}}><a style={{marginLeft: '50px'}}>Name: {this.const.name}</a></div>
                        <br/><br/>
                        <div style={{float: 'left'}}><a style={{marginLeft: '50px'}}>Role: {this.const.role}</a></div>
                        <br/><br/>
                        <div style={{float: 'left'}}><a style={{marginLeft: '50px'}}>Phone: {this.const.phone}</a></div>
                        <br/><br/>
                    </div>
                </div>

            </div>
        );
    }
}

