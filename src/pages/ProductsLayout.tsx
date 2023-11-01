import { Fragment, useState, useEffect } from "react"
import { Box, Button, Container, Divider, IconButton, AppBar, Avatar, Toolbar, CssBaseline, Drawer, Stack, } from "@mui/material"
import Typography from "@mui/material/Typography"
import Navbar from "../components/Navbar";
import ListGroup, { ListButton } from "../components/ListGroups";
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { TuneRounded } from "@mui/icons-material";
import Logo from "./../assets/Logo.svg"
import CatagoriesJSON from "../data/catagories.json"
import Range from "../components/Range"
import { Outlet } from "react-router-dom";
const baseColor = "rgb(209, 77, 114)";

const SidePanel = (
    <>
        <Stack direction={"column"} spacing={2} mt={2} px={2}>
            <Box width={"100%"}>
                <Typography color={"GrayText"} variant="body1" fontWeight="600">
                    Price
                </Typography>

                <Range width={"100%"} max={300} min={10} startValue={10} minGap={30} />
                <Divider />

            </Box>
            <Box>
                <Typography color={"GrayText"} variant="body1" fontWeight="600">
                    Catagories
                </Typography>
                <ListGroup GroupName="Starter">
                    {CatagoriesJSON.starter.map((dishname, index) => (
                        <ListButton key={index}>{dishname}</ListButton>
                    ))}
                </ListGroup>
                <ListGroup GroupName="Launch">
                    {CatagoriesJSON.launch.map((dishname, index) => (
                        <ListButton key={index}>{dishname}</ListButton>
                    ))}
                </ListGroup>
                <ListGroup GroupName="Dinner">
                    {CatagoriesJSON.dinner.map((dishname, index) => (
                        <ListButton key={index}>{dishname}</ListButton>
                    ))}
                </ListGroup>
                <Divider />

            </Box>
        </Stack>
    </>
)
export function SearchBar() {

    const [searchValue, setSearchVal] = useState("")
    const [startTypingSearch, setTypingStatus] = useState(false);
    // const [searchBarCollapsed, setSearchBarCollapse] = useState(true);
    useEffect(() => {
        if (searchValue.length > 0) {
            setTypingStatus(true);
        } else {
            setTypingStatus(false);
        }
    }, [searchValue])

    return (
        <Fragment>
            <Box
                component="div"
                sx={{

                    width: { xs: "300px", md: "550px" },
                    overflow: "hidden",
                    height: "40px",
                    border: "2px solid",
                    borderColor: baseColor,
                    borderRadius: "50px",
                    position: "relative",
                    padding: "0",
                    background: "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: 'flex-start',
                    cursor: "text",
                    color: baseColor,
                    transition: "all linear 250ms",
                }}
            >
                <Box component="div" display="flex" justifyContent="center" alignItems="center" bgcolor="transparent" height="100%">
                    <SearchIcon sx={{ cursor: "pointer", ":hover": { color: baseColor }, ml: 1, color: baseColor, fontSize: { xs: "14px", md: "20px" }, width: "30px" }} />
                </Box>
                <form style={{ width: "100%", height: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <input
                        autoComplete="off"
                        placeholder="Search Your Dishes"
                        style={{ border: "0", outline: "0", color: baseColor, padding: "2px 5px", borderRadius: "50px", margin: "0", background: "transparent", width: "75%", height: "100%", fontSize: "16px" }}
                        id="searchbar"
                        name="search"
                        value={searchValue}
                        onChange={(e) => {
                            setSearchVal(e.target.value)
                        }}
                    />
                    {startTypingSearch &&
                        <Box component="div" onClick={() => { setSearchVal("") }} height="100%" display="flex" justifyContent="center" alignItems="center">
                            <ClearIcon sx={{ cursor: "pointer", ":hover": { color: 'black' }, fontSize: { xs: "16px", md: "20px" } }} />
                        </Box>
                    }
                    <Button type="submit" variant="outlined" sx={{ width: { xs: "10%", md: "20%" }, fontSize: { xs: "13px", md: "16px" }, borderBottomRightRadius: "50px", color: baseColor, height: "100%", ":hover": { background: baseColor, color: "white", border: "none", boxShadow: "none" }, border: "none", borderTopRightRadius: "50px", ":active": { boxShadow: "none" } }} >
                        search
                    </Button>

                </form>

            </Box >
        </Fragment >
    )
}
function ProductsLayout() {
    const [openMenu, setOpenMenu] = useState(false);
    const handleDrawer = () => {
        setOpenMenu((prevstat) => (!prevstat))
    }
    return (
        <Fragment>
            <Navbar NavColor={baseColor} />
            <Box sx={{ width: "100%", height: "10vh", background: "red", position: "relative" }} >
                <CssBaseline />
                <AppBar sx={{ background: "whitesmoke", boxShadow: "none", height: "10vh", }} component="nav" position="sticky" >
                    <Toolbar sx={{ display: "flex", justifyContent: { xs: "space-between", md: "center" } }} >
                        <IconButton sx={{ display: { xs: "block", md: "none" }, }}
                            onClick={handleDrawer}>
                            <TuneRounded sx={{ color: baseColor }} />
                        </IconButton>

                        <SearchBar />
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
                                {SidePanel}
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

                    {SidePanel}
                </Box>
                {/* Right Column */}
                <Box sx={{ px: 1, width: "100%", height: "100%", background: "transparent" }}>
                    <Container>
                        <Outlet />
                    </Container>
                </Box>
            </Box>

            {/* <Typography textAlign="center" variant="h2" color={baseColor} fontWeight="700" fontFamily="'Poppins',sans-serif">
                        Menu Lists
                    </Typography> */}
        </Fragment>
    )
}

export default ProductsLayout