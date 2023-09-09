import { Fragment, useState, MouseEvent } from "react"
import { AppBar } from "@mui/material"
import Container from "@mui/material/Container/Container"
import Toolbar from "@mui/material/Toolbar/Toolbar"
import Box from "@mui/material/Box/Box"
import Typography from "@mui/material/Typography/Typography"
import Menu from "@mui/material/Menu/Menu"
import MenuItem from "@mui/material/MenuItem/MenuItem"
import Button from "@mui/material/Button/Button"
import Tooltip from "@mui/material/Tooltip/Tooltip"
import Avatar from "@mui/material/Avatar/Avatar"
// Material Icons
import AdbIcon from '@mui/icons-material/Adb';
import IconButton from "@mui/material/IconButton/IconButton"
import MenuIcon from '@mui/icons-material/Menu';
import AvatarImage from "./../assets/avatar.png"

interface NavbarProps {
    pages: string[];
    settingLists: string[];
    loginStat: boolean;
}

function Navbar({ pages, settingLists, loginStat }: NavbarProps) {
    const [isLogin, setLoginStat] = useState(loginStat)
    const [userName, setUserName] = useState<string | null>(null)
    const [anchorNav, setAnchorNav] = useState<HTMLElement | null>(null);
    const [settingAnchor, setSettingAnchor] = useState<HTMLElement | null>(null);

    // Login Logout
    const doLogout = () => {
        setUserName(null);
        setLoginStat(false);
    }
    const doSignin = () => {
        setUserName("shuvo sarker");
        setLoginStat(true);
    }
    const handleOpenMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorNav(event.currentTarget);

    }
    const handleCloseMenu = () => {
        setAnchorNav(null);

    }
    const handleOpenUserSetting = (event: MouseEvent<HTMLElement>) => {
        setSettingAnchor(event.currentTarget);
    }
    const handleCloseUserSetting = () => {
        setSettingAnchor(null);
    }
    return (
        <Fragment>

            <AppBar position="static" sx={{ background: "rebeccapurple" }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#"
                            sx={{
                                mr: 2,
                                display: { xs: "none", md: "flex", },
                                fontFamily: "Roboto",
                                fontWeight: 700,
                                letterSpacing: ".1rem",
                                color: "inherit",
                                textDecoration: "none",
                                textTransform: "capitalize"
                            }}
                        >
                            {userName ? userName : "Guest__2023"}
                        </Typography>

                        {/* For Mobile  */}
                        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                            <Tooltip title="Open Menu">
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenMenu}
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Tooltip>

                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorNav}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left"
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left"
                                }}
                                open={Boolean(anchorNav)}
                                onClose={handleCloseMenu}
                                sx={{
                                    display: { xs: "block", md: "none" }
                                }}
                            >
                                {pages.map((item, index) => (
                                    <MenuItem key={index}>
                                        <Typography fontFamily={"poppins"} fontWeight={"500"} textAlign={"center"}>{item}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#"
                            sx={{
                                mr: 2,
                                display: { xs: "flex", md: "none", },
                                fontFamily: "Roboto",
                                fontWeight: 700,
                                letterSpacing: ".1rem",
                                color: "inherit",
                                textDecoration: "none",
                                flexGrow: 1,
                                textTransform: "capitalize"

                            }}
                        >
                            {userName ? userName : "Guest__2023"}
                        </Typography>
                        {/* For Desktop */}
                        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                            {pages.map((page) => (
                                <Button key={page} sx={{ my: 2, color: "white", display: "block" }}>{page}</Button>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open Settings">
                                <IconButton onClick={handleOpenUserSetting} sx={{ p: 0 }}>
                                    {isLogin ?
                                        <Avatar alt="Your Image" src={AvatarImage} sx={{ width: "50px", height: "50px" }}></Avatar>
                                        :
                                        <Avatar alt="sign in" sx={{ width: "35px", height: "35px" }}></Avatar>
                                    }
                                </IconButton>
                            </Tooltip>
                            <Menu
                                id="menu-appbar"
                                sx={{ mt: "50px" }}
                                anchorEl={settingAnchor}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                }}
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                }}
                                keepMounted
                                open={Boolean(settingAnchor)}
                                onClose={handleCloseUserSetting}
                            >
                                {
                                    isLogin ?
                                        <Fragment>
                                            {(settingLists.map((settings, i) => (
                                                <MenuItem key={i}>
                                                    <Typography color={"rebeccapurple"} fontWeight={"600"}>
                                                        {settings}
                                                    </Typography>
                                                </MenuItem>
                                            )))
                                            }
                                            <MenuItem onClick={() => {
                                                doLogout()
                                            }}>
                                                <Typography textAlign={"center"} color={"rebeccapurple"} fontWeight={"600"}>
                                                    Log Out
                                                </Typography>
                                            </MenuItem>
                                        </Fragment>
                                        :
                                        <Fragment>
                                            <MenuItem onClick={() => {
                                                doSignin()
                                            }}>
                                                <Typography textAlign={"center"} color={"rebeccapurple"} fontWeight={"600"}>
                                                    Sign In
                                                </Typography>
                                            </MenuItem>
                                            <MenuItem>
                                                <Typography textAlign={"center"} color={"rebeccapurple"} fontWeight={"600"}>
                                                    Create Account
                                                </Typography>
                                            </MenuItem>
                                        </Fragment>
                                }
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

        </Fragment >
    )
}

export default Navbar