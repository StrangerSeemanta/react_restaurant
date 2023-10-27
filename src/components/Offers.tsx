import { Container, Box, Typography, Button } from "@mui/material"
import { Fragment } from "react"

import ImageText from "./ImageText";
import ImageComp from "./Image";
import Marquee from './Marquee';

// assets
import foodPic from "./../assets/food_pic.jpg";
import Pancake from "./../assets/pancake.png";
import AglioOlioDP from "./../assets/aglio_olio_dp.png"
import AglioOlio from "./../assets/aglio_olio.svg"

const textColor = "rgb(209, 77, 114)";

function Offers() {
    return (
        <Fragment>
            <section id="offers">
                <Container sx={{ mt: 8 }} >
                    <Box mt={3}>
                        <Typography data-aos="zoom-out-up" mb={4} variant="h1" fontWeight="400" textTransform="uppercase" fontFamily="'lilita one',sans-serif" textAlign="center" color="orange">Blogs</Typography>

                        {/* BLOGS */}
                        <ImageText
                            imagePos="left"
                            heading="Budget Friendly Pancake"
                            textBody="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae accusantium iure aut nulla, ipsam pariatur! Nemo consectetur repellendus asperiores ipsam vel quia, aperiam a aliquid vero libero suscipit rerum modi corporis accusamus. Eaque, molestiae."
                            headingColor={textColor}
                            showDivider
                            bottomComp={
                                <Box sx={{ width: "100%", height: "10vh", background: "rgb(252, 200, 209)" }}>
                                    <Marquee>
                                        <Typography width="100%" height="100%" fontWeight="700" textAlign="center" display="flex" alignItems="center" justifyContent="center" variant='h5' color="rgb(209, 77, 114)" textTransform="capitalize">Get 20% Discount On Pancake</Typography>
                                    </Marquee>
                                </Box>
                            }
                        >
                            <ImageComp csx={{ my: 2 }} imageSource={foodPic} floatPic={Pancake} textOnFloat="Pancake" className="Pancake" />
                        </ImageText>


                        <ImageText
                            imagePos="right"
                            heading="Aglio e Olio Is Coming..."
                            textBody="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae accusantium iure aut nulla, ipsam pariatur! Nemo consectetur repellendus asperiores ipsam vel quia, aperiam a aliquid vero libero suscipit rerum modi corporis accusamus. Eaque, molestiae."
                            headingColor={textColor}
                            showDivider
                            bottomComp={
                                <Box>
                                    <Box sx={{ width: "100%", height: "10vh", background: "transparent" }}>
                                        <Marquee>
                                            <Typography textTransform="capitalize" width="100%" height="100%" fontWeight="700" textAlign="center" display="flex" alignItems="center" justifyContent="center" variant='h6' fontSize="19px" color="orange">Our New Item "Aglio E Olio" Is Coming | Be Ready To Taste it </Typography>
                                        </Marquee>
                                    </Box>
                                    <Box>
                                        <Button color="error" variant="outlined" sx={{ mt: 5, color: textColor, fontSize: "15px", fontFamily: "'poppins',serif" }}>More Details</Button>
                                    </Box>
                                </Box>

                            }
                        >
                            <ImageComp csx={{ my: 2 }} imageSource={AglioOlioDP} floatPic={AglioOlio} textOnFloat="Aglio E Olio" className="Aglio" />
                        </ImageText>
                    </Box>

                </Container>
            </section>
        </Fragment>
    )
}

export default Offers