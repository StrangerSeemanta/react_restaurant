import { Box, Container, Typography, Button, Stack, createTheme, ThemeProvider } from "@mui/material"
import { Fragment, useRef } from "react"
import Grid from "@mui/material/Unstable_Grid2"
import Background from "./../assets/background.png"
import Lottie, { LottieRefCurrentProps } from "lottie-react"
import FoodAnime2 from "./../assets/Lotties/FoodAnime2.json"

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
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

});

theme = createTheme(theme, {
    palette: {
        salmon: theme.palette.augmentColor({
            color: {
                main: "#FF5733"
            },
            name: "salmon"
        })
    }
})
function Home() {
    const foodAnime = useRef<LottieRefCurrentProps | null>(null)


    return (
        <Fragment>
            <ThemeProvider theme={theme}>
                <Box position={"relative"} sx={{ overflowX: "hidden", background: `url(${Background})`, backgroundPosition: "center", height: "100vh", m: 0 }}>
                    <Container >
                        <Grid direction={"column"} width="100%" container position={"absolute"} mt={"20vh"} rowSpacing={6} columnSpacing={12}>
                            <Stack width="90%" ml={6} direction={"row"} useFlexGap flexWrap="wrap" spacing={2} justifyContent="space-between">
                                <Box >
                                    <Typography variant="h4" sx={{ fontSize: { xs: "4rem", sm: "5rem", md: "6rem" } }} fontWeight="800" textTransform={"uppercase"} fontFamily={"'poppins', serif"} color={"yellow"} >
                                        Hot Bite
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontSize: { xs: "1rem", sm: "2rem", md: "2rem" } }} fontWeight="800" textTransform={"capitalize"} fontFamily={"'Roboto', sans-serif;"} color={"white"} >
                                        Feel The Taste of Every Bite
                                    </Typography>
                                </Box>

                                <Box sx={{ width: { xs: "110px", sm: "150px", md: "250px" }, height: { xs: "110px", sm: "150px", md: "220px" } }}>
                                    <Lottie animationData={FoodAnime2} lottieRef={foodAnime} />
                                </Box>
                            </Stack>
                            <Stack ml={6} spacing={3} useFlexGap flexWrap="wrap" direction="row">
                                <Button color="ochre" sx={{ width: "170px", height: "60px", color: "ochre.light", fontSize: "20px", fontWeight: 600 }} variant="outlined">Explore<ArrowDownwardIcon sx={{ ml: 1 }} /></Button>
                                <Button color="salmon" sx={{ width: "250px", color: "salmon", fontSize: "20px", fontWeight: 600 }} variant="contained">Order <AddShoppingCartIcon sx={{ ml: 1 }} /></Button>

                            </Stack>
                        </Grid>

                    </Container>
                </Box>
            </ThemeProvider>
        </Fragment>
    )
}

export default Home