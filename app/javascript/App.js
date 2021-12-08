// app/javascript/App.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import {
    useNavigate
} from "react-router-dom";

const App = (props) => {
    let navigate = useNavigate();
    const token = localStorage.getItem("token");

    console.log(navigate)
    const logOut = () => {
        localStorage.clear();
        navigate('/login')
    }

    return (
        <>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
            >
                <Toolbar sx={{ flexWrap: 'wrap' }}>
                    <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                        Referer App
                    </Typography>
                    <nav>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="/"
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            Home
                        </Link>
                        {token ? (
                            <Link
                                variant="button"
                                color="text.primary"
                                onClick={() => logOut()}
                                sx={{ my: 1, mx: 1.5 }}
                            >
                                Log Out
                            </Link>
                        ) : (
                            <>
                                <Link
                                    variant="button"
                                    color="text.primary"
                                    href="login"
                                    sx={{ my: 1, mx: 1.5 }}
                                >
                                    Login
                                </Link>
                                <Link
                                    variant="button"
                                    color="text.primary"
                                    href="register"
                                    sx={{ my: 1, mx: 1.5 }}
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default App;