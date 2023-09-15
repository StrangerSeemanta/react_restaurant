import { Box, Container, Typography, Button, Stack, createTheme, ThemeProvider } from "@mui/material"
import { Fragment } from "react"
import Grid from "@mui/material/Unstable_Grid2"
import Background from "./../assets/background.png"
// import Lottie, { LottieRefCurrentProps } from "lottie-react"
// import FoodAnime2 from "./../assets/Lotties/FoodAnime2.json"

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
declare module '@mui/material/styles' {
    interface Palette {
        ochre: Palette['primary'];
        salmon: Palette['primary'];
        peace_white: Palette['primary'];
    }

    interface PaletteOptions {
        ochre?: PaletteOptions['primary'];
        salmon?: PaletteOptions['primary'];
        peace_white?: PaletteOptions['primary'];
    }
}

// Update the Button's color options to include an ochre option
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        ochre: true;
        salmon: true;
        peace_white: true;
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
        peace_white: {
            main: '#e3e3e3',
            light: '#ffffff',
            dark: '#adacac',
            contrastText: '#242105',
        }
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
    // const foodAnime = useRef<LottieRefCurrentProps | null>(null)


    return (
        <Fragment>
            <ThemeProvider theme={theme}>
                <section id="home">
                    <Box position={"relative"} sx={{ overflowX: "hidden", background: `url(${Background})`, backgroundPosition: "center", height: "100vh", m: 0 }}>
                        <Container >
                            <Grid direction={"column"} sx={{ justifyContent: { xs: "center", sm: "space-evenly" } }} alignItems="center" height="100%" width="100%" container position={"absolute"} rowSpacing={6} columnSpacing={12}>
                                <Stack width="100%" direction={"row"} useFlexGap flexWrap="wrap" spacing={2} justifyContent="center" alignItems={"center"}>
                                    <Box >
                                        <Typography className="IntroHead" variant="h1" sx={{ fontSize: { xs: "4.5rem", sm: "8rem", md: "11rem" }, background: "linear-gradient(to top,#FF5733 0%,yellow 95%)" }} fontWeight="800" textTransform={"uppercase"} letterSpacing="5px" fontFamily={"'Lilita One', cursive"} >
                                            Hot Bite
                                        </Typography>
                                        <Typography variant="h3" textAlign="center" sx={{ fontSize: { xs: "1.2rem", sm: "2rem", md: "2rem" } }} fontWeight="800" textTransform={"capitalize"} fontFamily={"'Roboto', sans-serif;"} color="white" >
                                            Feel The Taste of Every Bite
                                        </Typography>
                                    </Box>


                                </Stack>
                                <Stack sx={{ mt: { xs: 8, sm: 2 } }} spacing={3} useFlexGap flexWrap="wrap" direction="row">
                                    <Button color="peace_white" sx={{ width: { xs: "130px", sm: "170px" }, height: { xs: "40px", sm: "60px" }, fontSize: { sm: "20px" }, fontWeight: 600 }} variant="contained" onClick={() => { window.location.href = '#about' }}>Explore<ArrowDownwardIcon sx={{ ml: 1 }} /></Button>
                                    <Button color="salmon" sx={{ width: { xs: "150px", sm: "250px" }, color: "salmon", fontSize: { sm: "20px" }, fontWeight: 600 }} variant="contained">Order <AddShoppingCartIcon sx={{ ml: 1 }} /></Button>

                                </Stack>
                            </Grid>

                        </Container>
                    </Box>
                </section>
            </ThemeProvider>
        </Fragment>
    )
}

export default Home