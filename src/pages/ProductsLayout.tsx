import { Fragment, useState, useEffect, ChangeEvent, SyntheticEvent, ReactNode } from "react"
import { Box, Button, Container, Divider, IconButton, AppBar, Avatar, Toolbar, CssBaseline, Drawer, Stack, Rating, ListItemButton, ListItemText, LinearProgress, } from "@mui/material"
import Typography from "@mui/material/Typography"
import ListGroup, { ListButton } from "../components/ListGroups";
import StarRateIcon from '@mui/icons-material/StarRate';
import { TuneRounded } from "@mui/icons-material";
import Logo from "./../assets/Logo.svg"
import CatagoriesJSON from "../data/catagories.json"
import Range from "../components/Range"
import AllProducts from "./AllProducts";
import SearchBar from "../components/SearchBar";
import { Data } from "./../data/Data"
import NoResult from "../components/NoResult";


const baseColor = "rgb(209, 77, 114)";

interface SidePanelProps {
    onRatingChange: (event: SyntheticEvent<Element, Event>, newValue: number | null) => void;
    RatingValue: number | null;
    priceRangeValue: number | number[];
    onPriceRangeChange: (event: Event, newValue: number | number[], activeThumb: number) => void;
    onReset: () => void;
    maximumPrice: number;
    catagories: ReactNode;
    onWishlistShow: () => void;
}
function SidePanel({ onRatingChange, onWishlistShow, onPriceRangeChange, priceRangeValue, onReset, RatingValue, maximumPrice, catagories }: SidePanelProps) {

    return (
        <>
            <Stack direction={"column"} spacing={2} mt={2} px={2}>
                <Box width={"100%"}>
                    <Button onClick={onReset} variant="outlined" color="secondary" sx={{ fontSize: "12px", fontWeight: 600 }} >Show All Products</Button>
                </Box>
                <Box width={"100%"}>
                    <Typography color={"GrayText"} variant="body1" fontWeight="600">
                        Price
                    </Typography>

                    <Range rangeValue={priceRangeValue} onChange={onPriceRangeChange} width={"100%"} max={maximumPrice} />
                    <Divider />

                </Box>
                <Box width={"100%"}>
                    <Typography color={"GrayText"} variant="body1" fontWeight="600">
                        Ratings
                    </Typography>
                    <Rating
                        name="filterRating"
                        value={RatingValue}
                        onChange={onRatingChange}
                    />
                    {RatingValue && <Typography><span style={{ fontSize: "16px", color: 'rgb(209, 77, 114)' }}>{RatingValue}<StarRateIcon sx={{ fontSize: "13px" }} />  </span>Dishes only </Typography>
                    }
                    <Divider />

                </Box>
                <Box>
                    <Typography color={"GrayText"} variant="body1" fontWeight="600">
                        Catagories
                    </Typography>
                    {
                        catagories
                    }
                    <Divider />

                </Box>
                <Box>
                    <ListItemButton onClick={onWishlistShow}>
                        <ListItemText>Wishlists</ListItemText>
                    </ListItemButton>

                </Box>
            </Stack>
        </>
    )
}



function ProductsLayout() {
    // Page Loader State
    const [pageloaded, setPageLoaded] = useState(false);
    useEffect(() => {
        fetch(window.location.href)
            .then(r => {
                if (r.ok && r.status === 200) {
                    setPageLoaded(true)
                }
            })
    }, [])

    const [filteredData, updateFilteredData] = useState(Data)
    const [productData, updateProductData] = useState(filteredData)

    const [openMenu, setOpenMenu] = useState(false);
    // SearchBar States
    const [searchValue, setSearchVal] = useState("")
    const [startTypingSearch, setTypingStatus] = useState(false);
    // Rating States
    const [ratingValue, setRatingValue] = useState<number | null>(null);

    // Price Range States
    const minDistance = 30;
    const maxPrice = 400;
    const [rangeValue, setRangeValue] = useState<number[]>([0, 0 + minDistance]);

    // wishlist
    const [wishlists, updateWishlists] = useState<string[]>([])
    useEffect(() => {
        if (searchValue.length > 0) {
            setTypingStatus(true);
        } else {
            setTypingStatus(false);
        }
    }, [searchValue])


    // Filter By Rating __
    function handleRatingSort(e: SyntheticEvent<Element, Event>, newValue: number | null) {

        const ratingMatchedData = Data.filter((product) => {
            return newValue ? product.ratings == newValue : true
        })
        setRangeValue([0, maxPrice])
        updateFilteredData(ratingMatchedData)
        updateProductData(ratingMatchedData)

        e && setRatingValue(newValue);

    }

    // Search Dishes__
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const matchedProducts = filteredData.filter((product) => {
            if (e.target.value) {
                return product && product.title && product.title.toLowerCase().includes(e.target.value.toLowerCase())
            } else {
                return true
            }
        })
        updateProductData(matchedProducts)
        setSearchVal(e.target.value);

    }

    // Range Filters
    const handlePriceChange = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {

        if (event.target) {
            if (!Array.isArray(newValue)) {
                return;
            }

            if (activeThumb === 0) {
                setRangeValue([Math.min(newValue[0], rangeValue[1] - minDistance), rangeValue[1]]);
            } else {
                setRangeValue([rangeValue[0], Math.max(newValue[1], rangeValue[0] + minDistance)]);
            }
        }

        const filteredByPriceRange = Data.filter((product) => {
            return ((rangeValue[0] < product.price) && (rangeValue[1] > product.price))
        })
        setRatingValue(null)
        updateFilteredData(filteredByPriceRange)
        updateProductData(filteredByPriceRange)
    }

    // Clear Filters
    const handleReset = () => {
        setSearchVal('');
        setRatingValue(null)
        updateProductData(Data)
    }

    // handle Wishlistts
    const handleWishLists = () => {
        const wishlistData = Data.filter((product) => {
            return wishlists.map((title) => { return title.toLowerCase() }).includes(product.title.toLowerCase())
        }).map((product) => {
            return {
                ...product,
                remwishbtn: true
            }
        })
        updateProductData(wishlistData)
    }
    // Open Drawer
    const handleDrawer = () => {
        setOpenMenu((prevstat) => (!prevstat))
    }
    return (
        <Fragment>
            {
                pageloaded ?
                    <Box component={"section"} id="allproducts"  >
                        <Box sx={{ width: "100%", height: "10vh", background: "red", position: "relative" }} >
                            <CssBaseline />
                            <AppBar sx={{ background: "whitesmoke", boxShadow: "none", height: "10vh", }} component="nav" position="sticky" >
                                <Toolbar sx={{ display: "flex", justifyContent: { xs: "space-between", md: "center" } }} >
                                    <IconButton sx={{ display: { xs: "block", md: "none" }, }}
                                        onClick={handleDrawer}>
                                        <TuneRounded sx={{ color: baseColor }} />
                                    </IconButton>

                                    <SearchBar
                                        style={{ primaryColor: baseColor, iconColor: baseColor }}
                                        startTypingSearch={startTypingSearch}
                                        value={searchValue}
                                        onChange={handleSearch}
                                        onClose={() => { setSearchVal("") }} />
                                    <Typography ml={3} color={baseColor}>{productData.length} Results Found</Typography>
                                </Toolbar>

                            </AppBar>
                            {/* For Mobile */}
                            <Box component="nav">
                                <Drawer
                                    variant="temporary"
                                    open={openMenu}
                                    onClose={handleDrawer}

                                >
                                    <Box width="250px" bgcolor="transparent">
                                        <Box height="10vh" bgcolor={baseColor}>
                                            <Toolbar>
                                                <Avatar component="div" src={Logo} sx={{ mr: 1.5, width: "50px", height: "50px" }} />
                                                <Typography color="white" component="div" variant="h5" fontWeight="700">
                                                    Hot Bite
                                                </Typography>
                                            </Toolbar>
                                        </Box>
                                        <Box height="10vh" bgcolor="whitesmoke">
                                            <Toolbar>
                                                <IconButton sx={{ mr: 1.5 }} onClick={handleDrawer}>
                                                    <TuneRounded sx={{ color: baseColor }} />
                                                </IconButton>
                                                <Typography color={baseColor} component="div" variant="h6" fontWeight="700">
                                                    Filter Your Food
                                                </Typography>
                                            </Toolbar>
                                        </Box>
                                        <Box px={2}>
                                            <SidePanel priceRangeValue={rangeValue} onReset={handleReset} RatingValue={ratingValue} onRatingChange={handleRatingSort} onPriceRangeChange={handlePriceChange} maximumPrice={maxPrice}
                                                catagories={
                                                    <>
                                                        <ListGroup GroupName="By Country">
                                                            {CatagoriesJSON.country.map((country, index) => (
                                                                <ListButton key={index}>{
                                                                    <Box component={"li"} onClick={() => {
                                                                        const filteredByCountry = Data.filter((product) => {
                                                                            return product.country.toLowerCase().includes(country.toLowerCase())
                                                                        })
                                                                        updateProductData(filteredByCountry)
                                                                    }}>{country}</Box>
                                                                }</ListButton>
                                                            ))}
                                                        </ListGroup>
                                                        <ListGroup GroupName="Food Types">
                                                            {CatagoriesJSON.types.map((type, index) => (
                                                                <ListButton key={index}>
                                                                    <Box component={"li"} onClick={() => {
                                                                        const filteredByType = Data.filter((product) => {
                                                                            return product.catagory.toLowerCase().includes(type.toLowerCase())
                                                                        })
                                                                        updateProductData(filteredByType)
                                                                    }}>{type}</Box>
                                                                </ListButton>
                                                            ))}
                                                        </ListGroup>
                                                        <ListGroup GroupName="Special Items">
                                                            {CatagoriesJSON.specials.map((special, index) => (
                                                                <ListButton key={index}>
                                                                    <Box component={"li"} onClick={() => {
                                                                        const filteredBySpecial = Data.filter((product) => {
                                                                            return product.catagory.toLowerCase().includes(special.toLowerCase())
                                                                        })
                                                                        updateProductData(filteredBySpecial)
                                                                    }}>{special}</Box>
                                                                </ListButton>
                                                            ))}
                                                        </ListGroup>
                                                    </>
                                                }
                                                onWishlistShow={handleWishLists}
                                            />
                                        </Box>
                                    </Box>
                                </Drawer>
                            </Box>
                        </Box>

                        <Box sx={{ width: "100%", height: "90vh", background: "transparent", display: "flex" }} >
                            {/* Left Column */}
                            <Box component="section" className="filterSection" sx={{ display: { xs: "none", md: "block" }, p: 2, width: "300px", height: "90vh", background: "transparent", borderRight: "2px solid whitesmoke", overflowY: "scroll" }} >
                                <Box>
                                    <Typography textAlign="center" variant="h6" color={baseColor} fontWeight="600">
                                        Filter Your Food
                                    </Typography>
                                    <Divider />
                                </Box>

                                <SidePanel priceRangeValue={rangeValue} onReset={handleReset} RatingValue={ratingValue} onRatingChange={handleRatingSort} onPriceRangeChange={handlePriceChange} maximumPrice={maxPrice}
                                    catagories={
                                        <>
                                            <ListGroup GroupName="By Country">
                                                {CatagoriesJSON.country.map((country, index) => (
                                                    <ListButton key={index}>{
                                                        <Box component={"li"} onClick={() => {
                                                            const filteredByCountry = Data.filter((product) => {
                                                                return product.country.toLowerCase().includes(country.toLowerCase())
                                                            })
                                                            updateProductData(filteredByCountry)
                                                        }}>{country}</Box>
                                                    }</ListButton>
                                                ))}
                                            </ListGroup>
                                            <ListGroup GroupName="Food Types">
                                                {CatagoriesJSON.types.map((type, index) => (
                                                    <ListButton key={index}>
                                                        <Box component={"li"} onClick={() => {
                                                            const filteredByType = Data.filter((product) => {
                                                                return product.catagory.toLowerCase().includes(type.toLowerCase())
                                                            })
                                                            updateProductData(filteredByType)
                                                        }}>{type}</Box>
                                                    </ListButton>
                                                ))}
                                            </ListGroup>
                                            <ListGroup GroupName="Special Items">
                                                {CatagoriesJSON.specials.map((special, index) => (
                                                    <ListButton key={index}>
                                                        <Box component={"li"} onClick={() => {
                                                            const filteredBySpecial = Data.filter((product) => {
                                                                return product.catagory.toLowerCase().includes(special.toLowerCase())
                                                            })
                                                            updateProductData(filteredBySpecial)
                                                        }}>{special}</Box>
                                                    </ListButton>
                                                ))}
                                            </ListGroup>
                                        </>
                                    }
                                    onWishlistShow={handleWishLists}
                                />  </Box>
                            {/* Right Column */}
                            <Box sx={{ px: 1, width: "100%", height: "100%", background: "transparent" }}>
                                <Container>
                                    {
                                        productData.length !== 0 ?
                                            <AllProducts dataset={productData}
                                                onAddWishlist={(e) => {

                                                    const title = e.currentTarget.parentElement?.parentElement?.parentElement?.querySelector(".card-title")?.innerHTML
                                                    // Check if the title is not already in the wishlists
                                                    if (title && !wishlists.includes(title)) {
                                                        // Use the updateWishlists function to add the new title to the wishlists
                                                        updateWishlists((prevWishlists) => [...prevWishlists, title]);
                                                    }
                                                }}
                                                onRemoveWishlist={(e) => {
                                                    const title = e.currentTarget.parentElement?.parentElement?.parentElement?.querySelector(".card-title")?.innerHTML
                                                    // Check if the title is not already in the wishlists
                                                    if (title && wishlists.includes(title)) {
                                                        // Use the updateWishlists function to remove the title from the wishlists
                                                        updateWishlists((prevWishlists) => prevWishlists.filter((item) => item !== title));
                                                    }
                                                }}
                                            /> :
                                            <NoResult />
                                    }                    </Container>
                            </Box>
                        </Box>

                    </Box>
                    :
                    <Box position={"fixed"} display={"flex"} justifyContent={"center"} alignItems={"center"} width={"100%"} height={"100%"} top={0} left={0} zIndex={999999} bgcolor={"white"}>
                        <Box width={{ xs: "200px", sm: "400px" }}>
                            <Typography fontWeight={800} color={"#ff6c0a"} component={"p"} fontSize={{ xs: "15px", sm: "23px" }} mb={3} textAlign={"center"}>
                                Foods are preparing ...
                            </Typography>
                            <LinearProgress color="warning" />

                        </Box>
                    </Box>
            }
        </Fragment>
    )
}

export default ProductsLayout