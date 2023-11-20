import { Fragment, useRef, useState, } from "react"
import { Alert, AlertTitle, Box, Button, CircularProgress, Container, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, Stack, TextField, Typography, outlinedInputClasses } from "@mui/material"
import Lottie, { LottieRefCurrentProps } from "lottie-react"
import ContactAnime from "./../assets/Lotties/contact_anime.json"
import SocialMedia from "../components/SocialMedia"

import { ApartmentOutlined, Call, CloseOutlined, Done, Send, TextsmsOutlined } from "@mui/icons-material"
import { createTheme, ThemeProvider, Theme, useTheme } from '@mui/material/styles';
import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router-dom"

const customTheme = (outerTheme: Theme) =>
    createTheme({
        palette: {
            mode: outerTheme.palette.mode,
        },
        components: {
            MuiTextField: {
                styleOverrides: {
                    root: {
                        '--TextField-brandBorderColor': '#3ac2ed',
                        '--TextField-brandBorderHoverColor': '#34b2d9',
                        '--TextField-brandBorderFocusedColor': '#2c9fca',
                        '& label': {
                            color: '#3ac2ed',
                        },

                        '& label.Mui-focused': {
                            color: '#2c9fca',
                            fontWeight: 600
                        },
                        '& .MuiInputBase-input': {
                            color: '#2c9fca',
                        },
                        '& input:focus': {
                            color: '#186f98',
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
                            color: "#d14d72"

                        },
                    },
                },
            },
            MuiFilledInput: {
                styleOverrides: {
                    root: {
                        '&:before, &:after': {
                            borderBottom: '2px solid var(--TextField-brandBorderColor)',
                        },
                        '&:hover:not(.Mui-disabled, .Mui-error):before': {
                            borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
                        },
                        '&.Mui-focused:after': {
                            borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
                        },
                    },
                },
            },
            MuiInput: {
                styleOverrides: {
                    root: {
                        '&:before': {
                            borderBottom: '2px solid var(--TextField-brandBorderColor)',
                        },
                        '&:hover:not(.Mui-disabled, .Mui-error):before': {
                            borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
                        },
                        '&.Mui-focused:after': {
                            borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
                        },
                    },
                },
            },
        },
    });


function ContactLayout() {
    const contactRef = useRef<LottieRefCurrentProps | null>(null)
    const form = useRef<HTMLFormElement | null>(null);

    const inputTheme = useTheme();
    // Data Managing States
    const [sendingMessage, setSendingStat] = useState(false);
    const [sentSuccess, setSentSuccess] = useState(false);
    const [dataDialog, setDataDialog] = useState(false);
    const [successDialog, setSuccessDialog] = useState(false);

    // input managing states
    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userPhone, setUserPhone] = useState("")
    const [userMessage, setUserMessage] = useState("")

    const navigate = useNavigate();

    const sendEmail = (formData: HTMLFormElement | null) => {
        // Make sure form.current is a valid reference to the HTML form element
        if (formData) {
            // Set a loading state here
            setSendingStat(true)
            console.log('sending')
            // Use formData instead of form.current
            emailjs.sendForm('hotbitecontact_2023', 'template_f5neesb', formData, 'aEWPX1tHdZziRIgbS')
                .then((result) => {
                    console.log('Email sent successfully:', result.text);
                    openSuccessDialog(true);
                })
                .catch((error) => {
                    console.error('Error sending email:', error.text);
                    openSuccessDialog(false);

                    // Handle the error gracefully, e.g., show an error message to the user.
                })
                .finally(() => {
                    // Reset the loading state here
                    setSendingStat(false)
                });
        } else {
            console.error('Form reference is not valid.');
        }
    };

    const handleSubmit = () => {
        closeDataDialog();

        // Gather data from the form fields in the dialog
        if (form.current?.reportValidity()) {
            sendEmail(form.current)
        }
    }

    const closeDataDialog = () => {
        setDataDialog(false);
    }
    const openDataDialog = () => {
        setDataDialog(true)
    }
    const closeSuccessDialog = () => {
        setSuccessDialog(false);
    }
    const openSuccessDialog = (ifSuccess: boolean) => {
        setSuccessDialog(true);
        ifSuccess ? setSentSuccess(true) : setSentSuccess(false);

    }


    return (
        <Fragment>
            {/* Contact Home */}
            <Box height="95vh" width="100%" display="flex" px={4} py={9} justifyContent="space-between" alignItems="center" sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}>
                <Box display="flex" sx={{ width: { xs: "100%", md: "40%" } }} justifyContent="flex-start" gap="1rem" alignItems="flex-start" flexDirection="column">
                    <Typography color={"#D14D72"} sx={{ transition: "all linear 350ms", fontSize: { xs: "2.3rem", sm: "4.2rem" } }} variant='h1' fontWeight="900" >
                        Let's <span style={{ color: "orange" }}>Connect</span> Together...
                    </Typography>
                    <Typography sx={{ transition: "all linear 350ms", fontSize: { xs: "1rem", sm: "1rem" } }} textTransform="capitalize" variant='h5' >
                        Share your problems with us and stay tuned with our social media updates
                        <br />
                    </Typography>

                    <Typography textTransform="uppercase" variant='body1' sx={{ fontStyle: "italic" }} textAlign="left" >
                        ~Hot Bite Authority~
                    </Typography>
                </Box>
                <Box sx={{ width: { xs: "100%", md: "60%" }, height: { xs: "40vh", md: "100vh" } }} display="flex" justifyContent="center"  >
                    <Lottie lottieRef={contactRef} onComplete={() => { contactRef.current?.setSpeed(0.4); contactRef.current?.goToAndPlay(0) }} style={{ transition: "all linear 350ms", userSelect: "none", height: "100%" }} animationData={ContactAnime} loop={false} />

                </Box>
            </Box>
            {/* Social Media Section */}
            <SocialMedia />

            <Box mt={4} minHeight={"100vh"} py={2}>
                <Container sx={{ minHeight: "100%" }} >
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 4, sm: 0 }} height={"100%"} justifyContent={"space-between"}>
                        <Box width={{ xs: "100%", sm: "40%" }}>
                            <Box>
                                <Typography variant="h3" mb={1} fontWeight={600}>Need Direct Mail?</Typography>
                                <Typography variant="body1">Click the button and send us a mail to our official mail address with your problems</Typography>
                                <Box component={"a"} href="mailto:ssworkmail22@gmail.com" width={150} borderRadius={1} my={2} height={40} bgcolor={"black"} color={"white"} display={"flex"} justifyContent={"center"} alignItems={"center"} sx={{ textDecoration: "none", cursor: "pointer", transition: "all linear 250ms", ":hover": { filter: "opacity(0.7)" } }}>
                                    <Send sx={{ fontSize: "17px", rotate: "-35deg", transform: "translateY(-5px)" }} />
                                    Direct Mail
                                </Box>
                            </Box>
                            <Box mt={5}>
                                <Typography variant="h3" mb={1} fontWeight={600}>Live Chat</Typography>
                                <Typography variant="body1">You can start a live conversation with AI on this site.Even One of our agent will join if you ask.</Typography>
                                <Box width={150} borderRadius={1} my={2} height={40} bgcolor={"#d14d72"} color={"white"} display={"flex"} justifyContent={"center"} alignItems={"center"} sx={{ textDecoration: "none", cursor: "pointer", }}>
                                    <Button onClick={() => { navigate('/chat') }} disableElevation sx={{ ":hover": { background: "#ed5f87" }, transition: "all linear 250ms", color: "white", width: "100%", height: "100%" }}>
                                        <TextsmsOutlined sx={{ fontSize: "17px", mr: 1 }} />
                                        Start Chat
                                    </Button>
                                </Box>
                            </Box>

                        </Box>
                        <Divider sx={{ background: "#3ac2ed", height: 2 }} />
                        <Stack width={{ xs: "100%", sm: "50%" }} spacing={2} alignItems={"center"}>
                            <Stack height={"15%"} width={"100%"} >
                                <Typography variant="h3" fontWeight={600}>Contact Us</Typography>
                                <Typography variant="body2">Any questions or remarks? Just write us a message</Typography>
                            </Stack>
                            <Stack py={2} sx={{ width: "100%", height: "80%" }} >
                                <Stack
                                    ref={form}
                                    spacing={2}
                                    component={"form"}
                                >  <ThemeProvider theme={customTheme(inputTheme)}>
                                        <TextField
                                            variant="outlined"
                                            label="Full Name"
                                            placeholder="example: John Doe"
                                            name="user_name"
                                            required
                                            value={userName}
                                            onChange={(e) => { setUserName(e.target.value) }}
                                            fullWidth
                                        />

                                        <TextField
                                            variant="outlined"
                                            type="email"
                                            label="Email Address"
                                            name="user_email"
                                            placeholder="mail@example.com"
                                            fullWidth
                                            required
                                            value={userEmail}
                                            onChange={(e) => { setUserEmail(e.target.value) }}
                                        />
                                        <TextField
                                            variant="outlined"
                                            type="number"
                                            label="Phone Number"
                                            name="user_ph"
                                            placeholder="+8801312***"
                                            fullWidth
                                            value={userPhone}
                                            onChange={(e) => { setUserPhone(e.target.value) }}
                                        />
                                        <TextField
                                            variant="outlined"
                                            type="text"
                                            label="Message"
                                            name="message"
                                            placeholder="Write your message with details."
                                            fullWidth
                                            multiline
                                            rows={4}
                                            required
                                            value={userMessage}
                                            onChange={(e) => { setUserMessage(e.target.value) }}
                                        />
                                        <Button
                                            type="button"
                                            variant="contained"
                                            onClick={openDataDialog}
                                            disableElevation
                                            sx={{ fontWeight: 600, background: "#34b2d9", ":hover": { background: "#3ac2ed" }, height: "50px", fontSize: "18px" }}
                                            endIcon={sentSuccess ? <Done /> : (sendingMessage ? <CircularProgress size={20} color="inherit" /> : <Send />)}
                                            disabled={sendingMessage || sentSuccess ? true : false}
                                        >
                                            {sentSuccess ? "Sent" : "Send"}
                                        </Button>
                                        <Dialog open={dataDialog} onClose={closeDataDialog}>
                                            <DialogTitle sx={{ fontWeight: 600 }}>
                                                Confirm your informations
                                            </DialogTitle>
                                            <IconButton onClick={closeDataDialog} sx={{
                                                position: 'absolute',
                                                right: 8,
                                                top: 8
                                            }}>
                                                <CloseOutlined />
                                            </IconButton>
                                            <DialogContent dividers >
                                                <Typography textTransform={'capitalize'} fontSize={14} gutterBottom>
                                                    Please Confirm that you are submitting correct informations. After that you can't undo the actions.
                                                </Typography>
                                                <Divider sx={{ my: 2 }}></Divider>
                                                <Stack direction={{ sm: "row" }} textTransform={'uppercase'} color={"GrayText"} >
                                                    <Typography width={140} fontWeight={600} >
                                                        full name:
                                                    </Typography>
                                                    <Typography width={140} color={"green"} textTransform={"capitalize"}>
                                                        {userName ? userName : "please enter your name"}
                                                    </Typography>
                                                </Stack>
                                                <Stack direction={{ sm: "row" }} textTransform={'uppercase'} color={"GrayText"}>
                                                    <Typography width={140} fontWeight={600}>
                                                        Email Address:
                                                    </Typography>
                                                    <Typography width={140} color={"green"} textTransform={"lowercase"}>
                                                        {userEmail ? userEmail : "please enter your valid email"}
                                                    </Typography>
                                                </Stack>
                                                <Stack direction={{ sm: "row" }} textTransform={'uppercase'} color={"GrayText"} >
                                                    <Typography width={140} fontWeight={600}>
                                                        phone number
                                                    </Typography>
                                                    <Typography width={140} color={"green"}>
                                                        {userPhone ? userPhone : "N/A"}
                                                    </Typography>
                                                </Stack>
                                                <Stack>
                                                    <Typography fontWeight={700} color={"GrayText"}>
                                                        Message
                                                    </Typography>
                                                    <Typography >
                                                        {userMessage ? userMessage : "write your message"}
                                                    </Typography>
                                                </Stack>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={closeDataDialog} color="error" sx={{ fontWeight: 600 }}>
                                                    Discard
                                                </Button>
                                                <Button type="submit" onClick={handleSubmit} sx={{ fontWeight: 600 }}>
                                                    Submit
                                                </Button>
                                            </DialogActions>
                                        </Dialog>

                                        <Dialog open={successDialog} onClose={closeSuccessDialog}>
                                            <DialogTitle fontWeight={700}>
                                                Report
                                            </DialogTitle>
                                            <DialogContent dividers>
                                                {sentSuccess ? <Alert severity="success">
                                                    <AlertTitle sx={{ fontWeight: 600 }}>Your Message Sent Successfully!</AlertTitle>
                                                    <Typography fontSize={12}>
                                                        Our Team Will review your message and contact with you via email or phone number.
                                                        Thanks
                                                    </Typography>
                                                </Alert> :
                                                    <Alert severity="error">
                                                        <AlertTitle sx={{ fontWeight: 600 }}>Failed To Send The Message</AlertTitle>
                                                        <Typography fontSize={12}>
                                                            please try again..
                                                        </Typography>
                                                    </Alert>}
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={closeSuccessDialog} sx={{
                                                    fontWeight: 600
                                                }}>
                                                    Close
                                                </Button>
                                            </DialogActions>
                                        </Dialog>

                                    </ThemeProvider>

                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Box >
                        <Divider sx={{ mb: 2 }}></Divider>
                        <Stack direction={{ xs: "column", sm: "row" }} justifyContent={"space-between"}>
                            <Typography mb={1}>
                                <Call sx={{ fontSize: "16px", mr: 1 }} />
                                +880 1312 700 722
                            </Typography>
                            <Typography>
                                <ApartmentOutlined sx={{ fontSize: "16px", mr: 1 }} />
                                Hot Bite Main Restaurant, 24 Stanley Road, South East London, UK
                            </Typography>
                        </Stack>
                    </Box>
                </Container>
            </Box>

        </Fragment >
    )
}

export default ContactLayout