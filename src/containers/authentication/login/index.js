import React, { Component, Fragment } from 'react';
import { Grid, Form, Button, Checkbox } from 'semantic-ui-react';
import TwitterLogin from 'react-twitter-auth';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import {push} from 'connected-react-router';
import store from '../../../store';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { isAuthenticated: false, user: null, token: '' };
    }

    logout = () => {

        this.setState({ isAuthenticated: false, token: '', user: null })
    };
    handleClick = (e) => {
        e.preventDefault();
        this.props.store.dispatch(push('/register'));
    }
    twitterResponse = (e) => { };

    facebookResponse = (response) => {
        const tokenBlob = new Blob([JSON.stringify({ access_token: response.accessToken }, null, 2)], { type: 'application/json' });

        const options = {

            method: 'POST',

            body: tokenBlob,

            mode: 'cors',

            cache: 'default'
        };
        fetch('http://localhost:4000/api/v1/auth/facebook', options).then(r => {

            const token = r.headers.get('x-auth-token');
            console.log(r);

            r.json().then(user => {

                    if (token) {
                        this.setState({ isAuthenticated: true, user, token })
                    }
                });
        })
    }
        googleResponse = (e) => { };

        onFailure = (error) => {
            alert(error);
        }

        render() {
            let content = !!this.state.isAuthenticated ?
                (
                    <div>
                        <p>Authenticated</p>
                        <div>
                            {this.state.user.email}
                        </div>
                        <div>
                            <button onClick={this.logout} className="button">
                                Log out
                        </button>
                        </div>
                    </div>
                ) :
                (
                    <div>
                        <TwitterLogin loginUrl="http://localhost:4000/api/v1/auth/twitter"
                            onFailure=
                            {this.twitterResponse} onSuccess={this.twitterResponse}
                            requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse" />
                        <FacebookLogin
                            appId="285967122092096"
                            autoLoad=
                            {false}
                            fields="name,email,picture"
                            callback=
                            {this.facebookResponse} />
                        <GoogleLogin
                            clientId="XXXXXXXXXX"
                            buttonText="Login"
                            onSuccess=
                            {this.googleResponse}
                            onFailure={this.googleResponse}
                        />
                    </div>
                );
            return (
                <Fragment>
                    <div className="myView">
                        <style>
                            {`
    body > div,
    body > div > div,
    body > div > div > div.myView {
        height :100%;
    }
                    `}
                        </style>
                        <Grid style={{ 'height': '100%' }} centered columns={3} textAlign='center' verticalAlign='middle'>
                            <Grid.Column>
                                <Form>
                                    <Form.Field>
                                        <label>First Name</label>
                                        <input placeholder='First Name' />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Last Name</label>
                                        <input placeholder='Last Name' />
                                    </Form.Field>
                                    <Form.Field>
                                        <Checkbox label='I agree to the Terms and Conditions' />
                                    </Form.Field>
                                    <Button type='submit'>Submit</Button>
                                </Form>
                                {content}
                                <Button onClick={this.handleClick}>Register</Button>
                            </Grid.Column>
                        </Grid>
                    </div>
                </Fragment>
            );
        }
    }

    export default Login;
