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
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import { CSSProperties } from '@mui/material/styles/createMixins';

interface Props {
    NavColor?: string;
    NavStyle?: CSSProperties;
    absolute?: boolean;
}

const drawerWidth = 240;

export default function Navbar({ NavColor, NavStyle, absolute }: Props) {
    const navItems = React.useMemo(() => ["Home", "Products", "Offers", "Contact", "Account"], []);
    const [activeLink, setActiveLink] = React.useState(0)
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLinkClick = (index: number, path: string) => {
        setActiveLink(index);
        navigate(path);
    };
    React.useEffect(() => {
        const currentPath = location.pathname.toLowerCase();
        const activeIndex = navItems.findIndex(item => currentPath.includes(item.toLowerCase()));
        if (activeIndex !== -1) {
            setActiveLink(activeIndex);
        }
    }, [location.pathname, navItems]);

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

                {navItems.map((item, index) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton onClick={() => { handleLinkClick(index, `/${item.toLowerCase()}`) }} sx={{ textAlign: 'center' }} >
                            <ListItemText sx={activeLink === index ? { color: "red" } : { color: "black" }} primary={item} />

                        </ListItemButton>
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
                        <Box sx={{ position: 'relative', display: { xs: 'none', md: 'block' } }}>
                            <Grid container>
                                {navItems.map((item, index) => (
                                    <Grid item key={item}>
                                        <Button
                                            className={activeLink === index ? "active-btn" : ""}
                                            onClick={() => handleLinkClick(index, `/${item.toLowerCase()}`)}
                                            sx={{
                                                color: '#fff',
                                                fontWeight: '700',
                                                fontSize: '18px',
                                                transition: 'all ease-in-out 250ms',
                                                ":hover": { background: "rgba(181, 181, 255,0.2)" },
                                            }}
                                        >
                                            {item}
                                        </Button>
                                    </Grid>
                                ))}
                                <div
                                    className="button-slider"
                                    style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: `calc(${activeLink * (100 / navItems.length)}% + 15px)`,
                                        width: `calc(100% / ${navItems.length})`,
                                        height: '0',
                                        transition: 'all 250ms linear',
                                    }}
                                ></div>
                            </Grid>
                        </Box>
                    </Toolbar >
                </AppBar >
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
