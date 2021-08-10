import { useState } from "react";
import { Avatar, Button, Paper, Grid, Typography, Container } from "@material-ui/core";
import GoogleLogin from "react-google-login";
import { LockOutlined } from "@material-ui/icons";
import Icon from './icon';
import useStyles from './styles';
import Input from "./input";

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const handleSubmit = () => {

    }
    const handleChange = () => {

    }
    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);
        setShowPassword(false);
    }
    const googleSuccess = (res) => {
        console.log(res);
    }
    const googleFailure = () => {
        console.log("Google Sign In unsuccessful. Try again later.");
    }
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlined />
                </Avatar>
                <Typography variant="h5">
                    {
                        isSignUp ? "Sign Up" : "Sign In"
                    }
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignUp && (
                                <>
                                    <Input
                                        name="firstName" 
                                        label="First Name" 
                                        onChange={handleChange}
                                        half 
                                    />
                                    <Input
                                        name="firstName"
                                        label="First Name"
                                        onChange={handleChange}
                                        half
                                    />
                                </>
                            )
                        }
                        <Input
                            name="email"
                            label="Email Address"
                            onChange={handleChange}
                            type="email"
                        />
                        <Input
                            name="password"
                            label="Password"
                            onChange={handleChange}
                            type={showPassword ? "text" : "password"}
                            handleShowPassword={handleShowPassword}
                        />
                        {
                            isSignUp && <Input name="confirmPassword" label="Repeat Password" onChange={handleChange}/>
                        }
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {
                            isSignUp ? "Sign Up" : "Sign In"
                        }
                    </Button>
                    <GoogleLogin
                        clientId="539218230766-9kuv3q351svcouss0p3rdtm8o2arfg3k.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                                Google Sign In
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
                </form>
                <Grid container justifyContent="flex-end">
                    <Grid item>
                        <Button onClick={switchMode}>
                            {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}

export default Auth;
