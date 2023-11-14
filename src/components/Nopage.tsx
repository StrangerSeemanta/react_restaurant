import { Fragment, useState } from 'react'
import { Box, Typography, Button, ButtonGroup } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import ERRORANIME from "./../assets/Lotties/404_Lottie.json"
import ERRAnime2 from "./../assets/Lotties/404_Anime2.json"
import ERRAnime3 from "./../assets/Lotties/404_anime3.json"
import Lottie from 'lottie-react'
interface Props {
    disableNavbar?: boolean;
    disableBottomLink?: boolean;

}
function Nopage({ disableBottomLink }: Props) {
    const errorAnimations = [ERRORANIME, ERRAnime2, ERRAnime3];
    const themeColor = ["GrayText", "#0fd6a1", "#5f62f5"]
    const [ActiveErrorAnimeIndex, SetErrorAnimeIndex] = useState(0)
    return (
        <Fragment>
            <Box height="95vh" width="100%" display="flex" p={9} justifyContent="space-between" alignItems="center" sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}>
                <Box display="flex" sx={{ width: { xs: "100%", md: "40%" } }} justifyContent="flex-start" gap="1rem" alignItems="flex-start" flexDirection="column">
                    <Typography sx={{ transition: "all linear 350ms", fontSize: { xs: "2.3rem", sm: "5.4rem" } }} variant='h1' fontWeight="900" color={themeColor[ActiveErrorAnimeIndex]}>
                        Oops !
                    </Typography>
                    <Typography sx={{ transition: "all linear 350ms", fontSize: { xs: "1rem", sm: "1.4rem" } }} textTransform="capitalize" variant='h5' color={themeColor[ActiveErrorAnimeIndex]}>
                        We Can't Seem To find the page you're looking for.
                        <br />
                    </Typography>

                    <Typography textTransform="uppercase" variant='body1' sx={{ fontStyle: "italic" }} textAlign="left" >
                        Error: 404. Page Not Found.
                    </Typography>
                    {!disableBottomLink &&
                        <ButtonGroup sx={{ width: { xs: "100%", md: "auto" }, gap: "14px", display: "flex", flexDirection: { xs: "column", sm: "row" } }} >
                            <RouterLink to="/home" style={{ textDecoration: "none" }}>
                                <Button variant="outlined" sx={{ mr: 3, borderColor: themeColor[ActiveErrorAnimeIndex], ":hover": { borderColor: themeColor[ActiveErrorAnimeIndex] }, color: themeColor[ActiveErrorAnimeIndex], transition: "all linear 350ms" }}>
                                    Go Home
                                </Button>
                            </RouterLink>

                        </ButtonGroup>

                    }


                </Box>
                <Box sx={{ width: { xs: "100%", md: "60%" }, height: { xs: "30vh", md: "60vh" } }} display="flex" justifyContent="center"  >
                    <Lottie style={{ transition: "all linear 350ms", userSelect: "none", cursor: "pointer", height: "100%" }} title='Click To Change The Animation' animationData={errorAnimations[ActiveErrorAnimeIndex]} onClick={() => {
                        if (ActiveErrorAnimeIndex < errorAnimations.length - 1) {
                            SetErrorAnimeIndex(ActiveErrorAnimeIndex + 1)
                            console.log(ActiveErrorAnimeIndex)
                        } else if (ActiveErrorAnimeIndex >= errorAnimations.length - 1) {
                            SetErrorAnimeIndex(0);
                        }
                    }} />

                </Box>
            </Box>
            <Typography textTransform="uppercase" variant='body1' color="GrayText" textAlign="center" >
                All Right Reserved To <strong style={{ color: "orange" }}> HOT BITE </strong> Authority
            </Typography>
        </Fragment >
    )
}

export default Nopage