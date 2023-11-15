import { Box, Typography, Stack, } from "@mui/material"
import { Fragment } from "react"
// import Lottie, { LottieRefCurrentProps } from "lottie-react"
// import FoodAnime2 from "./../assets/Lotties/FoodAnime2.json"
import Bg from "./../assets/Background.svg"

function Home() {
    // const foodAnime = useRef<LottieRefCurrentProps | null>(null)


    return (
        <Fragment>
            <section id="home">
                <Box position={"relative"} sx={{ overflow: "hidden", height: "100vh", background: `url(${Bg})`, backgroundPosition: "right bottom", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", m: 0, px: { xs: 2, md: 5 }, py: 5 }}>
                    <Stack width="100%" height={"100%"} display={"flex"} alignItems={{ xs: "center", sm: "flex-start" }} justifyContent={{ xs: "flex-start", sm: "center" }} spacing={2} >
                        <Box width={{ xs: "90%", sm: "40%" }}>
                            <Typography className="IntroHead" color={"rgb(209, 77, 114)"} variant="h1" sx={{ fontSize: { xs: "2.5rem", sm: "2.5rem", md: "3.3rem" } }} fontWeight="500" textTransform={"uppercase"} textAlign={"left"} fontFamily={'"Poppins",serif'}  >
                                Order Your <Typography component={"span"} color={'orange'} variant="h1" sx={{ fontSize: { xs: "3rem", sm: "2.5rem", md: "3.8rem" } }} fontWeight="500" textTransform={"uppercase"} textAlign={{ md: "left" }} fontFamily={'"Poppins",serif'} >Favorite Dish</Typography>  And Enjoy!
                            </Typography>
                            <Typography mt={2} display={{ xs: "none", sm: "block" }}>
                                Enjoy your special moments with lots of special menus from your favorite restaurants in town that you can order!
                            </Typography>
                        </Box>

                    </Stack>
                </Box>
            </section >
        </Fragment >
    )
}

export default Home