import * as React from 'react';

import { auth, GithubAuthProvider, signInWithPopup ,signOut} from './firebase-config';
import { useHistory } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar( props) {
    const provider = new GithubAuthProvider();
    const history = useHistory();

    const login = (e) => {

        signInWithPopup(auth, provider)
          .then((result) => {
            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            const credential = GithubAuthProvider.credentialFromResult(result);
            console.log(credential)
            // const token = credential.accessToken;

            // The signed-in user info.
            const user = result.user;

            console.log(user)

            history.push("/home");
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage, errorCode)

          });

      }


      const logout= () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            window.localStorage.clear();
            sessionStorage.clear();
            console.log("  Log-out successfully ... ")
            history.push("/");
        }).catch((error) => {
            // An error happened.
        });


    }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Products
          </Typography>

          {
                props.method ==='login'?  <Button color="inherit"onClick={login}></Button>
              : <Button color="inherit"onClick={logout}>{props.method}</Button>
          }


        </Toolbar>
      </AppBar>
    </Box>
  );
}
