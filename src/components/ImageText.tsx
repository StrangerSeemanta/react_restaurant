import { Fragment, ReactNode, useState, useEffect } from 'react'
import { Stack, Box, Typography, Divider } from '@mui/material'
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
    bottomComp?: ReactNode;
    showDivider: boolean;
}
function ImageText({ children, margin, imagePos, textBody, heading, headingColor, bottomComp, showDivider }: Props) {
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
                <Stack direction={{ md: "row", xs: "column" }} useFlexGap justifyContent="space-between" spacing={10}>
                    {isImageOnLeft ?
                        <>
                            <Box data-aos="flip-right" data-aos-duration="2500" sx={{ mx: { sm: "auto", md: "0px" }, py: 2, width: { xs: "100%", sm: "70%", md: "40%" }, height: { xs: "70vh", md: "70vh" }, background: "transparent" }}>
                                {children}
                            </Box>
                            <Box data-aos="flip-left" data-aos-duration="2500" display="flex" flexDirection="column" gap={3} justifyContent="space-around" sx={{ py: 2, width: { xs: "100%", md: "50%" }, minHeight: { xs: "70vh", md: "70vh" }, background: "transparent" }}>
                                <Typography variant="h2" className="foodName" color={headingColor} fontFamily="'poppins',sans-serif" fontWeight="600">{heading}</Typography>
                                <Typography variant='body1' fontWeight={300} >{textBody}</Typography>
                                <Box>
                                    {bottomComp}
                                </Box>
                            </Box>
                        </>
                        :
                        <>

                            <Box data-aos="flip-left" data-aos-duration="2500" display="flex" flexDirection="column" gap={3} justifyContent="space-around" sx={{ py: 2, width: { xs: "100%", md: "45%" }, minHeight: { xs: "70vh", md: "70vh" }, background: "transparent" }}>
                                <Typography variant="h2" className="foodName" color={headingColor} fontFamily="'poppins',sans-serif" fontWeight="600">{heading}</Typography>
                                <Typography variant='body1' fontWeight={300} >{textBody}</Typography>
                                <Box>
                                    {bottomComp}
                                </Box>
                            </Box>
                            <Box data-aos="flip-right" data-aos-duration="2500" sx={{ mx: { sm: "auto", md: "0px" }, py: 2, width: { xs: "100%", sm: "70%", md: "45%" }, height: { xs: "70vh", md: "70vh" }, background: "transparent" }}>
                                {children}
                            </Box>
                        </>}
                </Stack>
                {showDivider && <Divider sx={{ height: '4px', width: "70%", borderRadius: "40px", background: "rgba(255, 171, 171,0.8)", my: 6, mx: "auto" }} />
                }
            </Box>
        </Fragment>
    )
}

export default ImageText