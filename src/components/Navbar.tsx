import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Avatar, Grid } from '@mui/material';
import Logo from "./../assets/Logo.svg"
import { Link as RouterLink } from 'react-router-dom';
import { CSSProperties } from '@mui/material/styles/createMixins';

interface Props {
    NavColor?: string;
    NavStyle?: CSSProperties;
    absolute?: boolean;
}

const drawerWidth = 240;

export default function DrawerAppBar({ NavColor, NavStyle, absolute }: Props) {
    const navItems = ["About", "Products", "Offers", "Contact"];

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (

        <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h5" sx={{ my: 2, fontWeight: "700" }}>
                Hot Bite
            </Typography>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <RouterLink to={"/"} className='routerLink' style={{ width: "100%" }}>
                        <ListItemButton sx={{ textAlign: 'center' }} >
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </RouterLink>
                </ListItem>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <RouterLink to={"/" + item.toLowerCase()} className='routerLink' style={{ width: "100%" }}>
                            <ListItemButton sx={{ textAlign: 'center' }} >
                                <ListItemText primary={item} />

                            </ListItemButton>
                        </RouterLink>
                    </ListItem>
                ))}
            </List>
        </Box>
    );


    return (
        <>
            <Box sx={{ display: 'flex', height: "auto" }}>
                <CssBaseline />
                <AppBar position={absolute ? "absolute" : "relative"} style={NavStyle} component="nav" sx={{ background: NavColor, boxShadow: "none", height: "10vh" }}>
                    <Toolbar sx={{ display: { xs: "flex" }, justifyContent: "space-between" }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mx: 2, display: { xs: "flex", md: 'none' } }}
                        >
                            <MenuIcon sx={{ width: "30px", height: "30px" }} />
                        </IconButton>
                        <Avatar component="div" src={Logo} sx={{ display: { xs: "flex", md: "block" }, mr: "14px", width: "50px", height: "50px" }} />
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{ flexGrow: 1, justifyContent: { xs: "flex-end" }, fontWeight: "700", display: { xs: 'none', md: 'block' } }}
                        >
                            <RouterLink to="/" className='routerLink'>
                                Hot Bite
                            </RouterLink>

                        </Typography>

                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            <Grid container>
                                {navItems.map((item) => (
                                    <React.Fragment key={item}>

                                        <Grid >
                                            <RouterLink to={"/" + item.toLowerCase()}>
                                                <Button sx={{ color: '#fff', fontWeight: "700", fontSize: "18px", transition: "all ease-in-out 250ms", ":hover": { background: "rgba(181, 181, 255,0.2)" } }}>
                                                    {item}
                                                </Button>
                                            </RouterLink>
                                        </Grid>
                                        {/* <Divider sx={{ background: "yellow", mx: 1, width: "2px" }} flexItem orientation='vertical' /> */}
                                    </React.Fragment>
                                ))}
                            </Grid>

                        </Box>
                    </Toolbar>
                </AppBar>
                <nav >
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            background: "transparent",
                            display: { xs: 'block', md: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </nav>
            </Box >

        </>
    );
}
