import React, {Component} from "react";
import "./Login.css"

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div className="form">
                <div style={{marginTop: '150px'}}><h1>Login</h1></div>
                <br/>
                <form>
                    <div className="input-container" style={{marginTop: '10px'}}>
                        <label>Username </label>
                        <input style={{borderRadius: '20px'}} type="text" name="uname" required/>
                    </div>
                    <br/><br/>
                    <div className="input-container">
                        <label>Password </label>
                        <input style={{borderRadius: '20px'}} type="password" name="pass" required/>
                    </div>
                    <br/><br/>
                    <div className="button-container">
                        <input style={{borderRadius: '20px'}} type="submit"/>
                    </div>
                </form>
            </div>
        );
    }
}

