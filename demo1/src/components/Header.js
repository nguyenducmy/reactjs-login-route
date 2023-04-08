import React, {Component} from "react";

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
          <div>
              <div className="col-12 col-sm-12 col-lg-12 col-xl-10" id="header">
                  <a style={{color: 'red'}}><h2>Admin</h2> <a href="/login"><span
                      className="glyphicon glyphicon-off" aria-hidden="true"></span></a></a>
              </div>
          </div>
        );
    }
}

