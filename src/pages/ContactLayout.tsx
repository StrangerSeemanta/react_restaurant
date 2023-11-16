import { Fragment, useRef, } from "react"
import { Box, Button, Container, Divider, Stack, TextField, Typography, outlinedInputClasses } from "@mui/material"
import Lottie, { LottieRefCurrentProps } from "lottie-react"
import ContactAnime from "./../assets/Lotties/contact_anime.json"
import SocialMedia from "../components/SocialMedia"
import { ApartmentOutlined, Call, Send, TextsmsOutlined } from "@mui/icons-material"
import { createTheme, ThemeProvider, Theme, useTheme } from '@mui/material/styles';

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
    const inputTheme = useTheme();
    return (
        <Fragment>
            {/* Contact Home */}
            <Box height="95vh" width="100%" display="flex" px={4} py={9} justifyContent="space-between" alignItems="center" sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}>
                <Box display="flex" sx={{ width: { xs: "100%", md: "40%" } }} justifyContent="flex-start" gap="1rem" alignItems="flex-start" flexDirection="column">
                    <Typography color={"#D14D72"} sx={{ transition: "all linear 350ms", fontSize: { xs: "1.3rem", sm: "4.2rem" } }} variant='h1' fontWeight="900" >
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

            <Box mt={4} height={"100vh"} py={2}>
                <Container sx={{ height: "100%" }} >
                    <Stack direction={"row"} height={"100%"} justifyContent={"space-between"}>
                        <Box width={"40%"}>
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
                                <Box component={"a"} href="mailto:ssworkmail22@gmail.com" width={150} borderRadius={1} my={2} height={40} bgcolor={"#d14d72"} color={"white"} display={"flex"} justifyContent={"center"} alignItems={"center"} sx={{ textDecoration: "none", cursor: "pointer", transition: "all linear 250ms", ":hover": { filter: "opacity(0.7)" } }}>
                                    <TextsmsOutlined sx={{ fontSize: "17px", mr: 1 }} />
                                    Start Chat
                                </Box>
                            </Box>
                            <Box >
                                <Divider sx={{ mb: 2 }}></Divider>
                                <Typography mb={1}>
                                    <Call sx={{ fontSize: "16px", mr: 1 }} />
                                    +880 1312 700 722
                                </Typography>
                                <Typography>
                                    <ApartmentOutlined sx={{ fontSize: "16px", mr: 1 }} />
                                    Hot Bite Main Restaurant, 24 Stanley Road, South East London, UK
                                </Typography>
                            </Box>
                        </Box>
                        <Stack width={"50%"} spacing={2} alignItems={"center"}>
                            <Stack height={"15%"} width={"100%"} >
                                <Typography variant="h3" fontWeight={600}>Contact Us</Typography>
                                <Typography variant="body2">Any questions or remarks? Just write us a message</Typography>
                            </Stack>
                            <Stack py={2} sx={{ width: "100%", height: "80%" }} >
                                <Stack
                                    spacing={2}
                                    component={"form"}
                                    autoComplete="off"
                                >
                                    <ThemeProvider theme={customTheme(inputTheme)}>
                                        <Stack direction={"row"} justifyContent={"space-between"}>
                                            <TextField
                                                variant="outlined"
                                                label="First Name"
                                                placeholder="example: Shuvo"
                                                sx={{ width: "48%" }}
                                            />
                                            <TextField
                                                variant="outlined"
                                                label="Last Name"
                                                placeholder="example: Sarker"

                                                sx={{ width: "48%" }}

                                            />
                                        </Stack>
                                        <TextField
                                            variant="outlined"
                                            type="email"
                                            label="Email Address"
                                            placeholder="mail@example.com"
                                            fullWidth
                                        />
                                        <TextField
                                            variant="outlined"
                                            type="number"
                                            label="Phone Number"
                                            placeholder="+8801312***"

                                            fullWidth
                                        />
                                        <TextField
                                            variant="outlined"
                                            type="text"
                                            label="Message"
                                            placeholder="Write your message with details."
                                            fullWidth
                                            multiline
                                            rows={4}
                                        />
                                        <Button
                                            variant="contained"
                                            disableElevation
                                            sx={{ background: "#34b2d9", ":hover": { background: "#3ac2ed" }, height: "50px", fontSize: "18px" }}
                                            endIcon={<Send />}
                                        >
                                            Send
                                        </Button>
                                    </ThemeProvider>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Container>
            </Box>
        </Fragment >
    )
}

export default ContactLayout