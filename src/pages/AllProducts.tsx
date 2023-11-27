import { Fragment, useRef, useState, MouseEvent, useEffect } from "react"
import { Alert, Box, IconButton, Rating, Skeleton, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2


import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import LoveAnime from "./../assets/Lotties/LoveAnimation.json"
import toast, { Toaster } from 'react-hot-toast';
import { AddBoxOutlined, ArrowOutward } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const baseColor = "rgb(209, 77, 114)";

interface ITEMCARDPROPS {
    productDetails: {
        title: string;
        img: string;
        price: number;
        originalPrice: number;
        ratings: number;
        reviews: number;
        catagory: string;
        special: boolean;
        remwishbtn?: boolean;
    }
    aos?: {
        style: string;
        delay: number;
    }
    removeWishlist: (Event: MouseEvent) => void;
    addWishlist: (event: MouseEvent) => void;
}
function ItemCard({ productDetails, addWishlist, removeWishlist }: ITEMCARDPROPS) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const loveAnimeRef = useRef<LottieRefCurrentProps>(null);
    const [lovedThis, setLove] = useState(false);
    const navigate = useNavigate()
    useEffect(() => {
        const image = new Image();
        image.src = productDetails.img;
        image.onload = () => {
            setImageLoaded(true);
        }
        image.onerror = (error: string | Event) => {
            console.error("Image failed to load", error);
        };
    }, [productDetails.img])
    const handleLoveClick = (event: MouseEvent) => {
        if (lovedThis) {
            toast.custom((t) => (
                <Alert elevation={1} variant="filled" severity="error" onClose={() => { toast.remove(t.id) }}>
                    {productDetails.title} Removed From Your Wishlist
                </Alert>
            ), {
                duration: 2500
            })
            removeWishlist(event);
        } else {
            toast.custom((t) => (
                <Alert elevation={1} variant="filled" severity="success" onClose={() => { toast.remove(t.id) }}>
                    {productDetails.title} Added To Your Wishlist
                </Alert>
            ), {
                duration: 2500
            })
            addWishlist(event);

        }
        setLove(!lovedThis);
        addWishlist(event);
    }

    const handleDishClick = () => {
        const url = encodeURIComponent(productDetails.title.toLowerCase())
        navigate(url)
    }
    return (
        <Fragment>
            <Grid xs={2} sm={6} md={4} display={"flex"} justifyContent={"center"}>
                <Box
                    component={"div"}
                    width={{ xs: "100%", md: "250px" }}
                    display={"flex"}
                    px={2}
                    py={3}
                    justifyContent={"center"}
                    alignItems={"center"}
                    flexDirection={"column"}
                    minHeight={"250px"}
                    boxShadow={"5px 5px 10px #b8b9ba"}
                    sx={{ background: "whitesmoke", transition: "background 250ms linear", ":hover": { background: "rgba(0,0,0,0.09)" }, }}
                >
                    <Box display={"flex"} justifyContent={"space-between"} alignItems={productDetails.remwishbtn ? "flex-start" : "center"} width={"100%"} height={"110px"} sx={{ marginBottom: "5%" }}>
                        {
                            imageLoaded ?
                                <img style={{ height: "100%", objectFit: "contain", filter: "drop-shadow(3px 9px 5px rgba(0,0,0,0.25))" }} src={productDetails.img} alt={productDetails.title + " image"} />
                                :
                                <Skeleton animation="wave" variant="circular" sx={{ height: "100%", width: "50%", bgcolor: "rgba(0,0,0,0.1)", objectFit: "contain", }} />

                        }
                        <Stack spacing={1} >
                            {productDetails.remwishbtn
                                ?
                                <>
                                    <IconButton onClick={handleLoveClick}>
                                        {lovedThis ?
                                            <RemoveCircleOutlineIcon sx={{ fontSize: "2rem", color: baseColor }} />
                                            : <AddBoxOutlined sx={{ fontSize: "2rem", color: baseColor }} />
                                        }                                    </IconButton>
                                </>
                                :
                                !lovedThis &&
                                <Lottie onMouseEnter={() => {
                                    loveAnimeRef.current?.setSpeed(2);
                                    loveAnimeRef.current?.playSegments([9, 45], true);
                                }}
                                    onMouseLeave={() => {
                                        loveAnimeRef.current?.setSpeed(2);
                                        loveAnimeRef.current?.playSegments([35, 0], true);
                                    }} title="add to wishlist" lottieRef={loveAnimeRef} onClick={(handleLoveClick)} animationData={LoveAnime} autoplay={false} loop={false} style={{ cursor: "pointer", width: "3rem", height: "3rem" }}
                                />
                            }
                            <Stack component={"div"} justifyContent={"center"} alignItems={"center"}>
                                <IconButton onClick={handleDishClick} title="Get More Details about this product">
                                    <ArrowOutward />
                                </IconButton>
                            </Stack>

                        </Stack>
                    </Box>
                    <Stack className="card-stack" width={"100%"} height={"45%"} spacing={1}>
                        <Box>
                            <Typography className="card-title" fontSize={"23px"} color={baseColor} fontWeight={600}>{productDetails.title}</Typography>
                        </Box>
                        <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                            <Rating value={productDetails.ratings} readOnly size="small" />
                            <Typography component="i" variant="body1" fontSize={"14px"}>{`(${productDetails.reviews} reviews)`}</Typography>
                        </Box>
                        <Box>
                            <Typography component={"div"} display={"flex"} alignItems={"center"} gap={"10px"}>
                                <Typography component={"span"} variant="h5" fontSize={"23px"} color={"black"} fontWeight={600}>{`$${productDetails.price.toFixed(2)}`}</Typography>

                                <Typography component={"span"} fontSize={"17px"} color={"GrayText"} fontWeight={600} className="strike">{`$${productDetails.originalPrice.toFixed(2)}`}</Typography>
                            </Typography>
                        </Box>
                    </Stack>
                </Box>
            </Grid>

            <Toaster position="bottom-left" reverseOrder />
        </Fragment >
    )
}
interface Props {
    dataset: {
        title: string;
        img: string;
        price: number;
        originalPrice: number;
        ratings: number;
        reviews: number;
        catagory: string;
        special: boolean;
    }[];
    onAddWishlist: (event: MouseEvent) => void;
    onRemoveWishlist: (event: MouseEvent) => void;

}
function AllProducts({ dataset, onAddWishlist, onRemoveWishlist }: Props) {
    return (
        <Fragment>
            <Box py={4} >
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 12, md: 12 }}>
                    {dataset.map((dish, dishIndex) => (
                        <Fragment key={dishIndex}>

                            <ItemCard
                                removeWishlist={onRemoveWishlist}
                                addWishlist={onAddWishlist}
                                productDetails={dish}
                            />
                        </Fragment>
                    ))}
                </Grid>

            </Box>

        </Fragment >
    )
}

export default AllProducts