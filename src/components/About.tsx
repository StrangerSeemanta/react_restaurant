import { Box, Stack, Container, createTheme, ThemeProvider, Typography, ListItem, Divider } from "@mui/material";
import { Fragment, useRef, useState } from "react";

import Lottie, { LottieRefCurrentProps } from "lottie-react";
import AboutTypo from "./../assets/Lotties/AboutTyp.json"
import AboutAnime from "./../assets/Lotties/About.json"

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
                main: "#FF5733",
            },
            name: "salmon"
        })
    }
})
function About() {
    const aboutTypo = useRef<LottieRefCurrentProps | null>(null);
    const aboutAnime = useRef<LottieRefCurrentProps | null>(null);
    const [typoDirectionReversed, setTypoDirection] = useState(false)
    return (
        <Fragment>
            <ThemeProvider theme={theme}>

                <Container sx={{ mt: 4 }}>
                    <Box>
                        <Stack>
                            <Lottie style={{ height: "50vh" }} onComplete={() => { aboutTypo.current?.setSpeed(0.2); typoDirectionReversed ? aboutTypo.current?.playSegments([40, 0], true) : aboutTypo.current?.playSegments([0, 40], true); setTypoDirection(!typoDirectionReversed) }} onMouseEnter={() => { aboutTypo.current?.stop(); aboutTypo.current?.setSpeed(0.3); aboutTypo.current?.play() }} loop={false} lottieRef={aboutTypo} animationData={AboutTypo} />
                            {/* <Typography textAlign="center" fontWeight="700" sx={{ fontFamily: "'poppins',serif", color: "#FF5733", mb: 3 }} variant="h2" >About US</Typography> */}
                        </Stack>

                        <Stack direction={"row"} useFlexGap flexWrap="wrap" justifyContent="space-between">
                            <Lottie style={{ height: "50vh" }} lottieRef={aboutAnime} animationData={AboutAnime} />
                            <Box sx={{ width: "55%", height: "70vh", }}>
                                <Typography textAlign="left" fontWeight="700" textTransform="capitalize" variant="h5" color="#FF5733" >Our Promises:</Typography>
                                <Typography my={3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt natus blanditiis totam aperiam hic dicta excepturi laudantium minus inventore accusantium quia, velit error id, reprehenderit ad autem porro sequi ea ullam soluta iste! Iste.</Typography>
                                <Box>
                                    <Typography variant="h6" fontWeight={600} color={"#FF5733"}>Speciality</Typography>
                                    <ListItem> Fast Delivary</ListItem>
                                    <Divider />
                                    <ListItem> 24 x 7 Services</ListItem>
                                    <Divider />

                                    <ListItem> Fresh & Healthy</ListItem>
                                    <Divider />

                                    <ListItem> Membership Features</ListItem>
                                </Box>
                            </Box>
                        </Stack>
                    </Box>

                </Container>
            </ThemeProvider>
        </Fragment>
    )
}

export default About