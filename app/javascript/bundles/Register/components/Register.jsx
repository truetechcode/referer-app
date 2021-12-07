import PropTypes from 'prop-types';
import React from 'react';
import axios from 'axios';

export default class Register extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired, // this is passed from the Rails view
    };

    /**
     * @param props - Comes from your rails view.
     */
    constructor(props) {
        super(props);

        // How to set initial state in ES6 class syntax
        // https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class
        this.state = {
            password: '',
            email: '',
            user: null
        };
    }

    componentDidMount() {
    }

    submit = (e) => {
        e.preventDefault()
        console.log(this.state);
        const { password, email } = this.state;
        const object = {
            user: {
                password,
                email,
            }
        }
        axios.post(`/api/users`, object).
            then(function (response) {
                console.log(response.data);
                (response) => this.setState({ user: response.data.user });
            }).
            catch(function (error) {
                console.log(error);
            });
    }

    changeHandler = (item) => {
        this.setState({
            [item.name]: item.value
        });
    };

    render() {
        return (
            <div>
                <h3>
                    Hello, Guest! Register
                </h3>
                <hr />
                <form >
                    <label htmlFor="name">
                        Name:
                    </label>
                    <input
                        id="name"
                        type="email"
                        value={this.state.name}
                        onChange={(e) => this.changeHandler(e.target)}
                    />

                    <label htmlFor="email">
                        Email:
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={(e) => this.changeHandler(e.target)}
                    />

                    <label htmlFor="password">
                        Password:
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={(e) => this.changeHandler(e.target)}
                    />

                    <label htmlFor="referer">
                        Referer Email:
                    </label>
                    <input
                        id="referer"
                        type="email"
                        value={this.state.referer}
                        onChange={(e) => this.changeHandler(e.target)}
                    />

                    <button onClick={this.submit}>Submit</button>
                </form>
            </div>
        );
    }
}
