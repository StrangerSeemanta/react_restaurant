import { Fragment, useEffect, useRef } from "react"
import Lottie, { LottieRefCurrentProps } from "lottie-react"
import Animation from "./../assets/Lotties/NoResultAnime.json"
import { Box, Chip, Stack, Typography } from "@mui/material"
function NoResult() {
    const animeRef = useRef<LottieRefCurrentProps>(null)
    useEffect(() => {
        animeRef.current?.playSegments([48, 90], true)
    }, [])
    return (
        <Fragment>
            <Stack height={"100vh"} width={"100%"} p={5} spacing={3} display={"flex"} alignItems={"center"}>
                <Box width={200} height={200}>
                    <Lottie animationData={Animation} autoplay={false} loop lottieRef={animeRef} />
                </Box>
                <Box>
                    <Typography textAlign={"center"} color={"rgb(209, 77, 114)"} fontSize={"2rem"} fontWeight={600}>Sorry! No results found
                    </Typography>
                    <Typography textAlign={"center"}>
                        Try updating your search term or filters, or check out these popular dishes:
                    </Typography>
                </Box>
                <Box>
                    <Stack direction={"row"} spacing={1}>
                        <Chip
                            label="Burger"
                            component="a"
                            href="#"
                            clickable />
                        <Chip
                            label="Fried Chicken"
                            component="a"
                            href="#"
                            clickable />
                        <Chip
                            label="Indian Thali"
                            component="a"
                            href="#"
                            clickable />

                    </Stack>
                </Box>
            </Stack>
        </Fragment>
    )
}

export default NoResult