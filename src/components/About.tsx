import { Box, Stack, Container, createTheme, ThemeProvider, Typography, ListItem, Divider, Radio, Skeleton } from "@mui/material";
import { Fragment, useRef, useState, useEffect, useCallback } from "react";

import Lottie, { LottieRefCurrentProps } from "lottie-react";
import AboutTypo from "./../assets/Lotties/AboutTyp.json"

import AboutPic from "./../assets/aboutPic.png"
// Speciality Banners
import AmbienceBG from "./../assets/AmbienceBG.png"
import CateringBG from "./../assets/CateringBG.png"
import QualityBG from "./../assets/QualityBG.png"
import MenuBG from "./../assets/LargermenuBG.png"

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

declare module '@mui/material/Radio' {
    interface RadioPropsColorOverrides {
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
const promises = ["Fast Delivary", "24 x 7 Services", " Fresh & Healthy", "Membership Features"];
const specialities = [AmbienceBG, CateringBG, QualityBG, MenuBG];
function About() {
    const [BannerLoading, setBannerLoading] = useState(true);
    const aboutTypo = useRef<LottieRefCurrentProps | null>(null);
    const [typoDirectionReversed, setTypoDirection] = useState(false)

    // const [selectedSpeciality, setSelectedSpeciality] = useState(" ");
    const [specialityIndex, setSpecialityIndex] = useState(0);

    const handleRadioChange = useCallback((index: number) => {
        setSpecialityIndex(index);
    }, []);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setSpecialityIndex((prevIndex) => (prevIndex + 1) % specialities.length);
        }, 3000);

        return () => clearTimeout(timeoutId); // Clear the timeout on unmount or when dependencies change
    }, [specialityIndex]);


    useEffect(() => {
        const image = new Image();
        image.src = specialities[specialityIndex];
        image.onload = () => {
            setBannerLoading(false);
        };
        image.onerror = (error: string | Event) => {
            console.error("Image failed to load", error);
        };
    }, [specialityIndex]);

    return (
        <Fragment>
            <section id="about" data-aos="fade-in" className="fixed">

                <ThemeProvider theme={theme}>
                    <Container sx={{ mt: 4 }} >
                        <Box>
                            <Stack>
                                <Lottie style={{ height: "50vh" }} onComplete={() => { aboutTypo.current?.setSpeed(0.2); typoDirectionReversed ? aboutTypo.current?.playSegments([40, 0], true) : aboutTypo.current?.playSegments([0, 40], true); setTypoDirection(!typoDirectionReversed) }} onMouseEnter={() => { aboutTypo.current?.stop(); aboutTypo.current?.setSpeed(0.3); aboutTypo.current?.play() }} loop={false} lottieRef={aboutTypo} animationData={AboutTypo} />
                                {/* <Typography textAlign="center" fontWeight="700" sx={{ fontFamily: "'poppins',serif", color: "#FF5733", mb: 3 }} variant="h2" >About US</Typography> */}
                            </Stack>

                            <Stack direction={{ md: "row", xs: "column" }} useFlexGap justifyContent="space-between">
                                <Box data-aos="zoom-in" sx={{ width: { xs: "100%", md: "45%" }, height: { xs: "50vh", md: '100vh' } }}>
                                    <img width="100%" height="100%" style={{ objectFit: "cover" }} src={AboutPic} alt="Picture Of Cookings" />
                                </Box>
                                <Box data-aos="zoom-in" sx={{ width: { xs: "100%", md: "50%" }, height: "100%", mt: { xs: 4 } }}>
                                    <Typography sx={{ textAlign: { xs: "center", md: "left" } }} fontWeight="700" textTransform="capitalize" variant="h4" color={textColor} >Who are we?</Typography>
                                    <Typography sx={{ textAlign: { xs: "center", md: "left" } }} my={3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt natus blanditiis totam aperiam hic dicta excepturi laudantium minus inventore accusantium quia, velit error id, reprehenderit ad autem porro sequi ea ullam soluta iste! Iste.</Typography>


                                    <Box >
                                        <Typography sx={{ textAlign: { xs: "center", md: "left" } }} variant="h4" fontWeight={600} color={textColor}>Our Promises: </Typography>
                                        {promises.map((features, no) => (
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
                        {/* Chefs */}

                        <Box data-aos="zoom-in" my={5} height="60vh" display="flex" flexDirection="column" justifyContent="center">

                            <Box height={{ xs: "20vh", sm: "50vh" }} sx={{ overflow: "hidden" }}>
                                {BannerLoading ?
                                    <Skeleton width="100%" variant="rectangular" sx={{ bgcolor: "grey.400" }}><div style={{ paddingTop: "50%" }}></div></Skeleton>
                                    :
                                    <Box width="100%" height="100%" sx={{ background: `url(${specialities[specialityIndex]})`, backgroundPosition: "center", backgroundSize: { xs: "contain", md: "cover" }, backgroundRepeat: "no-repeat", transition: "all linear 500ms" }}></Box>
                                }
                            </Box>
                            <Box display="flex" height="10vh" justifyContent="center" alignItems="center">
                                {specialities.map((speciality, index) => (
                                    <Radio
                                        id={speciality}
                                        color="salmon"
                                        key={index}
                                        checked={specialityIndex === index}
                                        value={index}
                                        onChange={() => { handleRadioChange(index) }}
                                    />
                                ))}
                            </Box>
                        </Box>


                    </Container>

                </ThemeProvider >
            </section>

        </Fragment >
    )
}

export default About