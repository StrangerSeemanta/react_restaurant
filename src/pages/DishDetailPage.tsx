import { Fragment, useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Data, DataProps } from './../data/Data';
import Nopage from '../components/Nopage';
import Loader from '../Loader';
import { Box, Rating, Stack, Typography } from '@mui/material';
import { ExtractColor } from '../scripts/extractColor';
import Marquee from '../components/Marquee';
interface layoutProps {
    product: DataProps
}
function Layout({ product }: layoutProps) {
    const image = useRef<HTMLImageElement>(null)
    const detailDiv = useRef<HTMLDivElement>(null)
    const priceDiv = useRef<HTMLDivElement>(null)

    const [isFixed, setIsFixed] = useState(false)
    const [translateY, setTranslateY] = useState(10)
    const [translateX, setTranslateX] = useState(10)

    const [mainColor, setMainColor] = useState<string>("#fff");
    const [secondColor, setSecondColor] = useState('')
    const [thirdColor, setThirdColor] = useState('#000')
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (image.current) {
            ExtractColor(image.current)
                .then((response) => {
                    setMainColor(response[0].hex)
                    setSecondColor(response[2].hex)
                    setThirdColor(response[1].hex)
                })
            const img = new Image();
            img.src = image.current?.src;
            img.onload = () => {
                setLoading(false)
            }
        }

        const handleScroll = () => {
            // Adjust the threshold based on your design
            if (detailDiv.current && priceDiv.current) {


                // Check if the scroll position is beyond the threshold
                if (window.scrollY > detailDiv.current.offsetTop / 2) {
                    setIsFixed(true);
                    setTranslateY(window.scrollY / 4)
                    setTranslateX(screen.availWidth - 200)
                    if (window.scrollY > detailDiv.current.offsetTop + 100) {
                        setTranslateX(0 - 200)
                    }
                    if (window.scrollY > priceDiv.current.offsetTop + 100) {
                        setTranslateX(screen.availWidth - 200)
                    }
                    if (window.scrollY > priceDiv.current.offsetTop + priceDiv.current.offsetTop / 4) {
                        setIsFixed(false)
                    }
                } else {
                    setIsFixed(false);
                }
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])



    return (
        <>
            {isLoading &&
                <Fragment>
                    <Loader />
                </Fragment>
            }
            <Fragment>
                <Stack width={"100%"} minHeight={"90vh"} px={3} direction={{ xs: "column", md: "row" }} alignItems={"center"} py={{ xs: 4, md: 0 }} justifyContent={{ xs: "center", md: "space-between" }} sx={{ background: `${secondColor}24` }}>
                    <Box width={{ xs: "100%", md: "40%" }}>
                        <Typography variant='h1' fontSize={{ xs: "3rem", md: "7rem" }} width={"100%"} textAlign={"left"} color={mainColor} fontWeight={600}>
                            {product.title}

                        </Typography>
                        <Typography variant='h6' fontWeight={600} color={secondColor}>
                            your tasty {product.title.toLowerCase()} is waiting ...
                        </Typography>
                    </Box>
                    <Box height={{ xs: "70%", md: "75vh" }} width={{ xs: "70%", md: "50%" }} sx={{ transition: 'all 0.3s ease', transform: isFixed ? `scale(0.6) translateY(${translateY}px) translateX(${translateX}px)` : 'none', filter: isFixed ? "grayscale(1)" : "grayscale(0)", }} position={isFixed ? "fixed" : "relative"}>
                        <img ref={image} src={product.img} alt={`image of ${product.title}`} style={{ width: "100%", height: "100%", objectFit: "contain", filter: "drop-shadow(20px 45px 13px  rgba(0,0,0,0.26)" }} />
                    </Box>
                </Stack>

                <Stack ref={detailDiv} position={"relative"} component={"div"} zIndex={9999} width={"100%"} minHeight={"90vh"} px={3} direction={"column"} justifyContent={"center"} alignItems={"center"} sx={{ background: `${thirdColor}54` }}>
                    <Typography variant='h2' fontSize={{ xs: "2.5rem", md: "4rem" }} width={"100%"} textAlign={"center"} color={mainColor} fontWeight={600}>
                        Taste the

                    </Typography>
                    <Typography className='product_country_name'
                        fontFamily={"poppins"} variant='h1'
                        fontSize={{ xs: "3rem", md: "7rem" }}
                        width={"100%"}
                        textAlign={"center"}
                        color={secondColor}
                        fontWeight={600}
                    >
                        {product.country}

                    </Typography>
                    <Typography variant='h2' fontSize={{ xs: "2.5rem", md: "4rem" }} width={"100%"} textAlign={"center"} color={mainColor} fontWeight={600}>
                        {product.catagory}

                    </Typography>

                </Stack>
                <Stack component={"div"} ref={priceDiv} className='productpage_price_section' color={"red"} data-price={`$${product.price}`} spacing={2} width={"100%"} minHeight={"90vh"} px={3} justifyContent={"center"} alignItems={"center"} sx={{ background: `${secondColor}64` }}>
                    <Typography variant='h2' fontFamily={'lilita one'} fontSize={{ xs: "4rem", md: "8rem" }} width={"100%"} textAlign={"center"} color={mainColor} >
                        Only For

                    </Typography>
                    <Typography variant='h2' fontFamily={'lilita one'} fontSize={{ xs: "4rem", md: "8rem" }} width={"100%"} textAlign={"center"} color={"dodgerblue"} sx={{ borderBottom: `thick solid ${mainColor}` }} >
                        {`$${product.price}`}

                    </Typography>


                </Stack>
                <Stack component={"div"} position={"relative"} color={"red"} spacing={2} width={"100%"} minHeight={"100vh"} px={3} justifyContent={"center"} alignItems={"center"} sx={{ background: `${mainColor}34` }}>
                    {product.special && <Box width={"85%"} height={"10vh"} >
                        <Marquee config={{ speed: 10000 }} customStyle={{ textAlign: "center", fontSize: 30, fontWeight: 600, textTransform: "uppercase", color: "red" }}>
                            It is one of our <span style={{ color: "dodgerblue" }}>special</span>  and <span style={{ color: "orange" }}>Hot</span>  item. You need to taste it soon.
                        </Marquee>
                    </Box>}
                    <Stack alignItems={"center"} spacing={2} bgcolor={"white"} px={7} py={10} sx={{ boxShadow: "12px 12px 15px rgba(0,0,0,0.15)", borderRadius: 2 }}>
                        <Rating size='large' value={product.ratings} readOnly />
                        <Typography fontSize={24} fontFamily={'"poppins"'} color={"dodgerblue"} textAlign={"center"}>
                            Reviewed By <strong style={{ fontSize: 30 }}>{product.reviews}</strong>  customers
                        </Typography>
                    </Stack>

                </Stack >

            </Fragment>
        </>
    )
}
function DishDetailPage() {
    const { dishURL } = useParams();
    const [productDetails, setProductDetails] = useState<DataProps>(Data[0]);

    useEffect(() => {
        if (dishURL) {

            const matchingProduct = Data.find(
                (product) => product.title.toLowerCase() === decodeURIComponent(dishURL).toLowerCase()
            );

            if (matchingProduct) {
                setProductDetails(matchingProduct);
            }


        }


    }, [dishURL]);

    return (
        <Fragment>

            {(productDetails ? (
                <Layout product={productDetails} />
            ) : (
                <Nopage />
            ))}
        </Fragment>
    );
}

export default DishDetailPage;
