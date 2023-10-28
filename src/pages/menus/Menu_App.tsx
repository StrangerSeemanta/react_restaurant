import { Fragment, useState } from "react"
import Logo from "./../../../public/Logo.svg"
import { Box, Container } from "@mui/material"
import Typography from "@mui/material/Typography"
import Avatar from "@mui/material/Avatar"
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
function Menu_App() {
    const [startTypingSearch, setTypingStatus] = useState(false);
    return (
        <Fragment>
            <Box mb={5}>
                <Toolbar sx={{ p: 1, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Avatar component="div" src={Logo} sx={{ width: "50px", height: "50px" }} />
                    <Typography textAlign="center" variant="h5" fontWeight="600" color="whitesmoke">
                        Hot Bite
                    </Typography>
                </Toolbar>
            </Box>
            <Container>
                <Box>
                    <Typography textAlign="left" variant="h2" color={"white"} fontWeight="700" fontFamily="'Poppins',sans-serif">
                        Menu Lists
                    </Typography>
                    <Box
                        onClick={() => { setTypingStatus(true) }}
                        component="button"
                        sx={{
                            my: 3,
                            width: { xs: "100%", md: "80%" },
                            border: "none", borderRadius: "8px",
                            position: "relative",
                            height: {
                                xs: "10vh",
                                md: "15vh",
                                padding: "0.5vh 3vh"
                            },
                            background: "rgba(0,0,0,0.4)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: 'flex-start',
                            cursor: "text",
                            color: "GrayText",
                            ":hover": { color: "white" }
                        }}>
                        {startTypingSearch ?

                            <Fragment>
                                <Box autoFocus
                                    onBlur={() => { setTypingStatus(false) }}
                                    component="input"
                                    autoComplete="off"
                                    sx={{
                                        outline: "0",
                                        width: "100%",
                                        height: "100%",
                                        background: 'transparent',
                                        border: "none",
                                        fontSize: "20px",
                                        color: "white"
                                    }}>

                                </Box>
                            </Fragment>
                            :
                            <Fragment>
                                <SearchIcon sx={{ fontSize: "20px" }} />
                                <Typography mx={1} fontSize="20px">Search Menu</Typography>
                            </Fragment>
                        }

                    </Box>

                </Box>
            </Container>
        </Fragment>
    )
}

export default Menu_App