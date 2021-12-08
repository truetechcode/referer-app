import React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const theme = createTheme();

function ReferDialog(props) {
  const { open, onClose } = props;
  const [email, setEmail] = React.useState("");
  const [sent, setSent] = React.useState(false);
  const [error, setError] = React.useState('');
  const [message, setMessage] = React.useState('');

  const submit = (e) => {
    e.preventDefault()

    if (email.length == 0) {
      setError("Please provide an email");
      return;
    }

    const token = localStorage.getItem("token");

    if (token) {
      axios.get(`/api/user/refer?email=${email}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${JSON.parse(token)}`
        },
      }).
        then((response) => {
          setMessage(response.data.message);
          setSent(true);
          setEmail('');
        }).
        catch((error) => {
          if (error.response) {
            setSent(true);
          }
        });
    }
  }

  return (
    <Dialog
      className={'refer-dialog'}
      fullWidth
      maxWidth="md"
      open={open}
      onClose={() => onClose()}
    >
      <DialogContent className={'refer-dialog-content'}>
        <Grid container>
          <Grid item xs={12}>
            {message.length > 0 && <Alert severity="success">{message}!</Alert>}
            {error.length > 0 && <Alert severity="error">{error}!</Alert>}
            <TextField
              style={{ marginBottom: 20 }}
              fullWidth
              variant="outlined"
              label="Email Address"
              id="refer-email"
              name="refer-email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoFocus
            />
            <Button onClick={e => submit(e)} variant="contained">Send</Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
export default class HelloWorld extends React.Component {

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class
    this.state = {
      name: '',
      email: '',
      show: false,
      token: '',
      open: false
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");

    if (token) {
      this.setState({ token });

      axios.get(`/api/user`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${JSON.parse(token)}`
        },
      }).
        then((response) => {
          this.setState({ name: response.data.user.name, email: response.data.user.email, show: true });
        }).
        catch(function (error) {
          console.log(error);
        });
    }
  }

  onClose = () => {
    this.setState({ open: false })
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main>
          <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                {'Welcome ' + (this.state.name.length > 0 ? this.state.name : 'Guest')}
              </Typography>
              <Typography variant="h5" align="center" color="text.secondary" paragraph>
                This is a simple referer app.
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                {this.state.token.length > 0 ? (
                  <Button onClick={e => this.setState({ open: true })} variant="contained">Send Referer</Button>
                ) : (
                  <>
                    <Button href="login" variant="contained">Login</Button>
                    <Button href="register" variant="outlined">Register</Button>
                  </>
                )}
              </Stack>
            </Container>
          </Box>
          <ReferDialog open={this.state.open} onClose={this.onClose} />
        </main>
      </ThemeProvider>
    );
  }
}
