import { Fragment } from 'react'
import { Box, Typography, LinearProgress } from '@mui/material'
function Loader() {
    return (
        <Fragment>
            <Box position={"fixed"} display={"flex"} justifyContent={"center"} alignItems={"center"} width={"100%"} height={"100%"} top={0} left={0} zIndex={999999} bgcolor={"white"}>
                <Box width={{ xs: "200px", sm: "400px" }}>
                    <Typography fontWeight={800} color={"#ff6c0a"} component={"p"} fontSize={{ xs: "15px", sm: "25px" }} mb={3} textAlign={"center"}>
                        Foods are preparing ...
                    </Typography>
                    <LinearProgress color="warning" />

                </Box>
            </Box>
        </Fragment>
    )
}

export default Loader