import PropTypes from 'prop-types';
import React from 'react';
import axios from 'axios';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();
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
            username: '',
            name: '',
            referer_email: '',
            password: '',
            email: '',
            user: null,
            error: ''
        };
    }

    componentDidMount() {
    }

    submit = (e) => {
        e.preventDefault()
        const { password, email, referer_email, name, username } = this.state;
        const object = {
            user: {
                password,
                email,
                username,
                name,
                referer_email
            }
        }

        if (password.length == 0 || email.length == 0) {
            this.setState({ error: "Please provide a password and an email" });
            return;
        }

        axios.post(`/api/users`, object).
            then((response) => {
                this.setState({ user: response.data.user });
            }).
            catch((error) => {
                if (error.response) {
                    this.setState({ error: "An error has occured" });
                }
            });
    }

    changeHandler = (item) => {
        this.setState({
            [item.name]: item.value
        });
    };

    render() {
        return (
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            my: 10,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        {this.state.error.length > 0 && <Alert severity="error">{this.state.error}!</Alert>}
                        <Box component="form" noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Full Name"
                                name="name"
                                value={this.state.name}
                                onChange={(e) => this.changeHandler(e.target)}
                                autoComplete="name"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                value={this.state.name}
                                onChange={(e) => this.changeHandler(e.target)}
                                autoComplete="email"
                            />
                            <TextField
                                margin="normal"
                                fullWidth
                                id="email"
                                label="Referer Email Address"
                                name="referer_email"
                                value={this.state.name}
                                onChange={(e) => this.changeHandler(e.target)}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                value={this.state.name}
                                onChange={(e) => this.changeHandler(e.target)}
                                autoComplete="current-password"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={this.submit}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Link href="/login" variant="body2">
                                        {"Have an account? Login"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        );
    }
}
