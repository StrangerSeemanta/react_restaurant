import { Alert, AlertTitle, Box, Button, Dialog, Divider, IconButton, Stack, TextField, Typography, outlinedInputClasses } from '@mui/material'
import PatternBg from "./../assets/pattern.png"
import { Fragment, useState } from 'react'
import { createTheme, ThemeProvider, Theme, useTheme } from '@mui/material/styles';
import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';
import { Outlet, useNavigate } from 'react-router-dom';

const customTheme = (outerTheme: Theme) =>
    createTheme({
        palette: {
            mode: outerTheme.palette.mode,
        },
        components: {
            MuiTextField: {
                styleOverrides: {
                    root: {
                        '--TextField-brandBorderColor': '#ffffff',
                        '--TextField-brandBorderHoverColor': '#e0dede',
                        '--TextField-brandBorderFocusedColor': '#f5ff96',
                        '& label': {
                            color: '#ffffff',
                        },

                        '& label.Mui-focused': {
                            color: `var(--TextField-brandBorderFocusedColor)`,
                            fontWeight: 600
                        },
                        '& .MuiInputBase-input': {
                            color: '#ffffff',
                        },
                        '& input:focus': {
                            color: '#ffffff',
                            fontWeight: 600

                        },
                    },
                },
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    notchedOutline: {
                        borderColor: 'var(--TextField-brandBorderColor)',
                    },
                    root: {
                        [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                            borderColor: 'var(--TextField-brandBorderHoverColor)',

                        },
                        [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
                            borderColor: 'var(--TextField-brandBorderFocusedColor)',
                            color: "#f5ff96"

                        },
                    },
                },
            },
        },
    });

export function SignInPage() {
    const inputTheme = useTheme();
    const navigate = useNavigate()
    const [emailId, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [visiblePassword, setPasswordVisiblity] = useState<boolean>(false)

    const [signinFailed, setSigninFailed] = useState(false);
    return (
        <>
            <Box width={"100%"} minHeight={"90vh"} bgcolor={"#e1f7f1"}>
                <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} width={"100%"} minHeight={"90vh"} sx={{
                    background: `url(${PatternBg}) `,
                    backgroundPosition: "center",
                    backgroundSize: "cover",

                }} >
                    <Box component={"div"} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} width={{ xs: "100%", md: 410 }} bgcolor={"rgba(0,0,31,0.4)"} height={{ xs: "100%", md: "auto" }} sx={{ borderRadius: { xs: 0, md: 3 }, boxShadow: "0px 0px 129px rgba(0,0,0,0.1),0px 32px 64px -48px rgba(0,0,0,0.5),5px 5px 39px -20px  rgba(0,0,0,0.3)", overflow: "hidden", position: 'relative', backdropFilter: "blur(7px)" }} >
                        <Stack className="secStack" alignItems={"center"} component={"div"} width={"100%"} height={"100%"} p={3} spacing={8}>
                            <Typography variant='h4' textTransform={"capitalize"} fontWeight={500} fontFamily={"'poppins',serif"} color={"#f5ff96"} textAlign={"center"}>Sign In</Typography>
                            <ThemeProvider theme={customTheme(inputTheme)}>

                                <Stack spacing={2} component={"form"} action='#' width={"280px"}  >

                                    <TextField
                                        name='registered_email'
                                        label="Email ID"
                                        placeholder='enter your registered email address'
                                        value={emailId}
                                        onChange={(e) => { setEmail(e.target.value) }}
                                    />
                                    <TextField
                                        name='registered_password'
                                        type={!visiblePassword ? 'password' : "text"}
                                        label="Password"
                                        placeholder='your account password'
                                        value={password}
                                        onChange={(e) => { setPassword(e.target.value) }}
                                        InputProps={{
                                            endAdornment: (Boolean(password) &&
                                                <IconButton onMouseLeave={() => { setPasswordVisiblity(false) }} onClick={() => { setPasswordVisiblity(!visiblePassword) }}>
                                                    {!visiblePassword ? <VisibilityOutlined sx={{ color: "white" }} /> : <VisibilityOffOutlined sx={{ color: "white" }} />}
                                                </IconButton>)

                                        }}
                                    />
                                    <Button type='button' variant='contained' sx={{ background: "#d14d72", color: "#fff", fontSize: "16px", fontWeight: 600, ":hover": { background: "#d14d72", } }}>
                                        Sign In
                                    </Button>

                                    <Box width={"100%"} >
                                        <Divider sx={{ color: "#f5ff96", "::before": { borderTopColor: "white" }, "::after": { borderTopColor: "white" }, background: "transparent", }} > OR </Divider>
                                    </Box>

                                </Stack>
                                <Stack px={3} direction={"row"} spacing={2} width={"100%"}>
                                    <Typography color={"#f5ff96"} fontWeight={700} variant='h6' fontFamily={"'Poppins'"}>New To Hotbite?
                                        <Typography component={"span"} onClick={() => { navigate("/account/signup") }} ml={1} variant='h6' color={'#fcfcfc'} fontFamily={"Poppins"} sx={{ ":hover": { textDecoration: "underline", cursor: "pointer" } }}>Sign Up Now</Typography>

                                    </Typography>
                                </Stack>
                            </ThemeProvider>


                        </Stack>

                    </Box>

                </Stack>
            </Box>


            {/* Sign In Failure */}

            <Dialog open={signinFailed} >
                <Alert severity='error' className={signinFailed ? 'slide-in' : ""} onClose={() => { setSigninFailed(false) }}>
                    <AlertTitle sx={{ fontWeight: 600 }}>
                        Something Went Wrong
                    </AlertTitle>
                    <Typography component={"p"} fontSize={13}>
                        We can't find this account on our database. Please try again or

                        <Typography component={"span"} onClick={() => { navigate("/account/signup") }} mx={0.6} sx={{ textDecoration: "underline", cursor: "pointer" }} fontSize={13}>Create a new account</Typography>
                    </Typography>
                </Alert>
            </Dialog>
        </>
    )
}
function AccountPage() {

    return (
        <Fragment>
            <Outlet />
        </Fragment >
    )
}

export default AccountPage