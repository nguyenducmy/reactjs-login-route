import React, {Component} from "react";

export default class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <footer>
                <div className="pull-right">
                    Gentelella - Bootstrap Admin Template by <a href="https://colorlib.com">Colorlib</a>
                </div>
                <div className="clearfix"></div>
            </footer>
        );
    }
}


