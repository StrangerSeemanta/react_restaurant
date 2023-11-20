import { Fragment, useState } from "react"
import { Box, Button, Divider, IconButton, Stack, TextField, Typography, outlinedInputClasses } from '@mui/material'
import { createTheme, ThemeProvider, Theme, useTheme } from '@mui/material/styles';
import { ArrowRightAltOutlined, Google, VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import PatternBg from "./../assets/pattern.png"
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
function SignUpPage() {
    const inputTheme = useTheme()
    const navigate = useNavigate()
    const [emailId, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [visiblePassword, setPasswordVisiblity] = useState<boolean>(false)
    return (
        <Fragment>

            <Box width={"100%"} minHeight={"90vh"} bgcolor={"#e1f7f1"}>
                <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} width={"100%"} minHeight={"90vh"} sx={{
                    background: `url(${PatternBg}) `,
                    backgroundPosition: "center",
                    backgroundSize: "cover",

                }} >
                    <Box component={"div"} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} width={{ xs: "100%", md: 410 }} bgcolor={"rgba(0,0,31,0.4)"} height={{ xs: "100%", md: "auto" }} sx={{ borderRadius: { xs: 0, md: 3 }, boxShadow: "0px 0px 129px rgba(0,0,0,0.1),0px 32px 64px -48px rgba(0,0,0,0.5),5px 5px 39px -20px  rgba(0,0,0,0.3)", overflow: "hidden", position: 'relative', backdropFilter: "blur(7px)" }} >
                        <Stack alignItems={"center"} className="secStack" component={"div"} width={"100%"} height={"100%"} p={3} gap={3}>
                            <Typography variant='h4' textTransform={"capitalize"} fontWeight={500} fontFamily={"'poppins',serif"} color={"#f5ff96"} textAlign={"center"}>Registration</Typography>
                            <ThemeProvider theme={customTheme(inputTheme)}>

                                <Stack spacing={2} component={"form"} action='#' width={"300px"} >
                                    <TextField
                                        name='member_name'
                                        label="Full Name"
                                        placeholder='enter your full name'

                                    />
                                    <TextField
                                        name='member_email'
                                        label="Email ID"
                                        placeholder='enter your registered email address'
                                        value={emailId}
                                        onChange={(e) => { setEmail(e.target.value) }}
                                    />
                                    <TextField
                                        name='member_password'
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
                                        Sign Up
                                    </Button>
                                    <Button variant="contained" sx={{ background: "white", color: "black", ":hover": { background: "white" }, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <Google sx={{ fontSize: "1.3rem", color: "green", }} />
                                        <Typography component={"span"} sx={{ fontSize: "0.9rem", fontWeight: 600, fontFamily: '"Poppins"' }}>Sign Up With Google</Typography>
                                        <ArrowRightAltOutlined sx={{ color: "green", }} />
                                    </Button>
                                    <Box width={"100%"} >
                                        <Divider sx={{ color: "#f5ff96", "::before": { borderTopColor: "white" }, "::after": { borderTopColor: "white" }, background: "transparent", }} > OR </Divider></Box>
                                    <Stack width={"100%"} direction={"row"}  >
                                        <Button fullWidth color="warning" variant="contained" onClick={() => { navigate("/account/signin") }}>Sign In</Button>
                                    </Stack>
                                </Stack>
                            </ThemeProvider>


                        </Stack>

                    </Box>

                </Stack>
            </Box>


        </Fragment >
    )
}

export default SignUpPage