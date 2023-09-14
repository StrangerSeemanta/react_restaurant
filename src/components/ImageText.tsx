import { Fragment, ReactNode, useState, useEffect } from 'react'
import { Stack, Box, Typography } from '@mui/material'
import Marquee from './Marquee';
interface Props {
    children: ReactNode;
    imagePos: "left" | "right";
    textBody: ReactNode | string;
    margin?: {
        m?: number;
        my?: number;
        mt?: number;
        mb?: number;
        mx?: number;
        mr?: number;
        ml?: number;
    };
    heading?: string;
    headingColor?: string;
}
function ImageText({ children, margin, imagePos, textBody, heading, headingColor }: Props) {
    const [isImageOnLeft, setImageOnLeft] = useState(true);

    useEffect(() => {
        if (imagePos === "left") {
            setImageOnLeft(true);
        } else {
            setImageOnLeft(false);
        }
    }, [imagePos])

    return (
        <Fragment>
            <Box m={margin?.m && margin.m} my={margin?.my && margin.my} mt={margin?.mt && margin.mt} mb={margin?.mb && margin.mb} mx={margin?.mx && margin.mx} mr={margin?.mr && margin.mr} ml={margin?.ml && margin.ml}>
                <Stack direction={{ md: "row", xs: "column" }} useFlexGap justifyContent="space-between">
                    {isImageOnLeft ?
                        <>
                            <Box sx={{ mt: 4, mx: { sm: "auto", md: "0px" }, py: 2, width: { xs: "100%", sm: "70%", md: "45%" }, height: { xs: "70vh", md: "70vh" }, background: "transparent" }}>
                                {children}
                            </Box>
                            <Box display="flex" flexDirection="column" justifyContent="space-around" sx={{ mt: 4, py: 2, width: { xs: "100%", md: "45%" }, height: { xs: "70vh", md: "70vh" }, background: "transparent" }}>
                                <Typography variant="h2" className="foodName" color={headingColor} fontFamily="'poppins',sans-serif" fontWeight="600">{heading}</Typography>
                                <Typography variant='body1' fontWeight={300} >{textBody}</Typography>
                                <Box sx={{ position: "relative", overflow: "hidden", width: "100%", height: "10vh", background: "rgb(252, 200, 209)" }}>
                                    <Marquee>
                                        <Typography width="100%" height="100%" fontWeight="700" textAlign="center" display="flex" alignItems="center" justifyContent="center" variant='h5' color="rgb(209, 77, 114)">Grab The Offert | Get 20% Discount </Typography>
                                    </Marquee>
                                </Box>
                            </Box>
                        </>
                        :
                        <>

                            <Box display="flex" flexDirection="column" justifyContent="space-around" sx={{ mt: 4, py: 2, width: { xs: "100%", md: "45%" }, height: { xs: "70vh", md: "70vh" }, background: "transparent" }}>
                                <Typography variant="h2" className="foodName" color={headingColor} fontFamily="'poppins',sans-serif" fontWeight="600">{heading}</Typography>
                                <Typography variant='body1' fontWeight={300} >{textBody}</Typography>
                                <Box sx={{ position: "relative", overflow: "hidden", width: "100%", height: "10vh", background: "rgb(252, 200, 209)" }}>
                                    <Marquee>
                                        <Typography width="100%" height="100%" fontWeight="700" textAlign="center" display="flex" alignItems="center" justifyContent="center" variant='h5' color="rgb(209, 77, 114)">Grab The Offert | Get 20% Discount </Typography>
                                    </Marquee>
                                </Box>
                            </Box>
                            <Box sx={{ mt: 4, mx: { sm: "auto", md: "0px" }, py: 2, width: { xs: "100%", sm: "70%", md: "45%" }, height: { xs: "70vh", md: "70vh" }, background: "transparent" }}>
                                {children}
                            </Box>
                        </>}
                </Stack>
            </Box>
        </Fragment>
    )
}

export default ImageText