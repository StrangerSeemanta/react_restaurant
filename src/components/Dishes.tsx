import { Fragment, ReactNode, useState, useEffect } from "react"
import { Container, Box, Typography, Skeleton, Button } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import BurgerImgSrc from "./../assets/Burger_TD.svg"
import PancakeImgSrc from "./../assets/Pancake_TD.svg"
import ChickenImgSrc from "./../assets/ChickenFry_TD.svg"
import { Link as RouterLink } from "react-router-dom"

const textColor = "rgb(209, 77, 114)";

interface ITEMCARDPROPS {
    productDetails: {
        dishName: ReactNode;
        imageSrc: string;
        offerPrice: string;
        regularPrice: string;
    }
    aos: {
        style: string;
        delay: number;
    }
}
function ItemCard({ productDetails, aos }: ITEMCARDPROPS) {
    const [imgLoadStat, setImgLoadStat] = useState(false)
    useEffect(() => {
        const image = new Image();
        image.src = productDetails.imageSrc;
        image.onload = () => {
            setImgLoadStat(true);
        }
        image.onerror = (error: string | Event) => {
            console.error("Image failed to load", error);
        };
    }, [productDetails.imageSrc])
    return (
        <Fragment>
            <div className="topdishes">
                <Box
                    p={3}
                    minHeight="80vh"
                    width="100%"
                    sx={{
                        background: "#ebedf0", position: "relative", boxShadow: "5px 5px 10px #b8b9ba"
                    }}
                    data-aos={aos.style}
                    data-aos-easing="ease-out-cubic"
                    data-aos-delay={aos.delay}
                    data-aos-duration={1500}>

                    <Box sx={{ height: "70%", width: "100%" }}>
                        {imgLoadStat ?
                            <img style={{ height: "100%", width: "100%", objectFit: "contain" }} src={productDetails.imageSrc} alt="" />
                            : <Skeleton width="100%" variant="rounded" ><div style={{ paddingTop: "100%" }}></div></Skeleton>
                        }</Box>
                    <Box sx={{ height: "30%", width: "100%", justifyContent: 'center', alignItems: "center", display: "flex", flexDirection: "column" }}>
                        <Typography component="h2" fontSize="3rem" fontFamily="'lilita one',sans-serif" fontWeight="500" textTransform="capitalize" color="green">{productDetails.dishName}</Typography>
                        <Typography component="h6" fontSize="1.5rem" fontFamily="'Poppins',serif" fontWeight="500" textTransform="uppercase" color="red">prices: {productDetails.offerPrice} | <span style={{ color: "black" }} className="strike">{productDetails.regularPrice}</span></Typography>

                    </Box>
                </Box>
            </div>
        </Fragment >
    )
}
function Dishes() {

    const dishes = [
        {
            "dishName": "Burger",
            "imageSrc": BurgerImgSrc,
            "offerPrice": "7$",
            "regularPrice": "12$"
        },
        {
            "dishName": "Pancake",
            "imageSrc": PancakeImgSrc,
            "offerPrice": "6$",
            "regularPrice": "10$"
        },
        {
            "dishName": "Chicken Fry",
            "imageSrc": ChickenImgSrc,
            "offerPrice": "6$",
            "regularPrice": "8$"
        }
    ]

    return (
        <Fragment>,
            <section id="products" >
                <Container>
                    <Box minHeight="120vh" maxHeight="300vh" >
                        <Typography data-aos="zoom-in" mb={4} variant="h1" fontWeight="400" textTransform="uppercase" fontFamily="'lilita one',sans-serif" textAlign="center" color={textColor}>Top Items</Typography>
                        {/* <Stack height="90vh" width="100%" useFlexGap direction="row" flexWrap="wrap">
                        <ItemCard />

                    </Stack> */}
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                            {
                                dishes.map((dish, dishIndex) => (
                                    <Grid xs={2} sm={4} md={4} key={dishIndex}>
                                        <ItemCard
                                            aos={{ style: "slide-right", delay: dishIndex * 500 }}
                                            productDetails={dish}
                                        />
                                    </Grid>
                                ))
                            }
                        </Grid>

                        <Box data-aos="zoom-in" sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} mt={6}>
                            <RouterLink className="routerLink" to="/products">
                                <Button sx={{ fontWeight: "700", fontSize: "17px", color: "white", transition: "all linear 250ms", cursor: "pointer", background: textColor, p: 2, ":hover": { background: textColor, filter: "brightness(1.1)" } }}

                                >Show All Items</Button>

                            </RouterLink>
                        </Box>
                    </Box>
                </Container>
            </section>
        </Fragment >
    )
}

export default Dishes