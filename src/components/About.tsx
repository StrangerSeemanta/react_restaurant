import { Box, Stack, Container, createTheme, ThemeProvider, Typography, ListItem, Divider } from "@mui/material";
import { Fragment, useRef, useState } from "react";
import foodPic from "./../assets/food_pic.jpg";
import Pancake from "./../assets/pancake.png"
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import AboutTypo from "./../assets/Lotties/AboutTyp.json"
import ImageText from "./ImageText";
import Image from "./Image";
import AboutPic from "./../assets/aboutPic.png"
import Marquee from './Marquee';


declare module '@mui/material/styles' {
    interface Palette {
        ochre: Palette['primary'];
        salmon: Palette['primary']
    }

    interface PaletteOptions {
        ochre?: PaletteOptions['primary'];
        salmon?: PaletteOptions['primary']
    }
}

// Update the Button's color options to include an ochre option
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        ochre: true;
        salmon: true;
    }
}

let theme = createTheme({
    palette: {
        ochre: {
            main: '#E3D026',
            light: '#E9DB5D',
            dark: '#A29415',
            contrastText: '#242105',
        },

    },
})


theme = createTheme(theme, {
    palette: {
        salmon: theme.palette.augmentColor({
            color: {
                main: "rgb(209, 77, 114)",
            },
            name: "salmon"
        })
    }
})
const textColor = "rgb(209, 77, 114)";
const specialities = ["Fast Delivary", "24 x 7 Services", " Fresh & Healthy", "Membership Features"];
function About() {
    const aboutTypo = useRef<LottieRefCurrentProps | null>(null);
    const [typoDirectionReversed, setTypoDirection] = useState(false)
    return (
        <Fragment>
            <ThemeProvider theme={theme}>
                <section id="about">
                    <Container sx={{ mt: 4 }} >
                        <Box>
                            <Stack>
                                <Lottie style={{ height: "50vh" }} onComplete={() => { aboutTypo.current?.setSpeed(0.2); typoDirectionReversed ? aboutTypo.current?.playSegments([40, 0], true) : aboutTypo.current?.playSegments([0, 40], true); setTypoDirection(!typoDirectionReversed) }} onMouseEnter={() => { aboutTypo.current?.stop(); aboutTypo.current?.setSpeed(0.3); aboutTypo.current?.play() }} loop={false} lottieRef={aboutTypo} animationData={AboutTypo} />
                                {/* <Typography textAlign="center" fontWeight="700" sx={{ fontFamily: "'poppins',serif", color: "#FF5733", mb: 3 }} variant="h2" >About US</Typography> */}
                            </Stack>

                            <Stack direction={{ md: "row", xs: "column" }} useFlexGap justifyContent="space-between">
                                <Box sx={{ width: { xs: "100%", md: "45%" }, height: { xs: "50vh", md: '100vh' } }}>
                                    <img width="100%" height="100%" style={{ objectFit: "cover" }} src={AboutPic} alt="Picture Of Cookings" />
                                </Box>
                                <Box sx={{ width: { xs: "100%", md: "50%" }, height: "100%", mt: { xs: 4 } }}>
                                    <Typography sx={{ textAlign: { xs: "center", md: "left" } }} fontWeight="700" textTransform="capitalize" variant="h4" color={textColor} >Who are we?</Typography>
                                    <Typography sx={{ textAlign: { xs: "center", md: "left" } }} my={3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt natus blanditiis totam aperiam hic dicta excepturi laudantium minus inventore accusantium quia, velit error id, reprehenderit ad autem porro sequi ea ullam soluta iste! Iste.</Typography>


                                    <Box >
                                        <Typography sx={{ textAlign: { xs: "center", md: "left" } }} variant="h4" fontWeight={600} color={textColor}>Speciality</Typography>
                                        {specialities.map((features, no) => (
                                            <Fragment key={no}>
                                                <ListItem >
                                                    <Typography sx={{ textAlign: { xs: "center", md: "left" } }} variant="subtitle1" width="100%" >
                                                        {features}
                                                    </Typography>
                                                </ListItem>
                                                <Divider />
                                            </Fragment>
                                        ))}

                                    </Box>
                                    <Typography sx={{ textAlign: { xs: "center", md: "left" } }} mt={3} fontWeight="700" textTransform="capitalize" variant="h4" color={textColor} >Location:</Typography>
                                    <Typography sx={{ textAlign: { xs: "center", md: "left" } }} fontWeight="700" textTransform="capitalize" variant="h5" >24 Stanley Road,  south east london, UK</Typography>
                                </Box>
                            </Stack>


                        </Box>
                        <Box mt={5}>

                        </Box>
                        <Box mt={3}>
                            <ImageText
                                imagePos="left"
                                heading="Budget Friendly Pancake"
                                textBody="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae accusantium iure aut nulla, ipsam pariatur! Nemo consectetur repellendus asperiores ipsam vel quia, aperiam a aliquid vero libero suscipit rerum modi corporis accusamus. Eaque, molestiae."
                                headingColor={textColor}
                                bottomComp={
                                    <Box sx={{ width: "100%", height: "10vh", background: "rgb(252, 200, 209)" }}>
                                        <Marquee>
                                            <Typography width="100%" height="100%" fontWeight="700" textAlign="center" display="flex" alignItems="center" justifyContent="center" variant='h5' color="rgb(209, 77, 114)">Grab The Offert | Get 20% Discount </Typography>
                                        </Marquee>
                                    </Box>
                                }
                            >
                                <Image csx={{ my: 2 }} imageSource={foodPic} floatPic={Pancake} textOnFloat="Pancake" className="Pancake" />
                            </ImageText>
                        </Box>
                        <Divider sx={{ height: '4px', width: "70%", borderRadius: "40px", background: "rgba(255, 171, 171,0.8)", my: 6, mx: "auto" }} />
                    </Container>
                </section>

            </ThemeProvider >
        </Fragment >
    )
}

export default About