
import NavBar from './NavBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { auth, GithubAuthProvider, signInWithPopup} from './firebase-config';
import { useHistory } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';

const Login = () => {

  const provider = new GithubAuthProvider();
    const history = useHistory();
  const login = () => {

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


  return (
    <div>
       <NavBar
       method={"login"}/>
        <Box sx={{ flexGrow: 1 }}  mt={30} ml={85}>
         <Button color="primary" variant="contained" endIcon={<GitHubIcon />} onClick={login}>Login with Github</Button>

          </Box>

    </div>
  )
}
export default Login;