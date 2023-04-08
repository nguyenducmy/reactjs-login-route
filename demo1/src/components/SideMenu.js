import React, {Component} from "react";
import "./SideMenu.css"
export default class SideMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div id="sidebar-menu" className="main_menu_side hidden-print main_menu col-2">
                <div className="menu_section">
                        <ul className="nav side-menu">
                            <li><a href="/home">Home </a></li>
                            <br/><br/>
                            <li><a href="/partner-info"> Partner Infomation </a></li>
                            <br/><br/>
                            <li><a> Latest Brochures </a></li>
                            <br/><br/>
                            <li><a> Signed Agreements</a></li>
                            <br/><br/>
                            <li><a>Leads To Corsiva </a></li>
                            <br/><br/>
                            <li><a> Leads From Corsiva </a></li>
                        </ul>
                </div>
            </div>
        );
    }
}


