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
import Logo from "./../../public/Logo.svg"


interface Props {

    navItems: string[];
}

const drawerWidth = 240;

export default function DrawerAppBar({ navItems }: Props) {
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
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />

                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );


    return (
        <Box sx={{ display: 'flex', height: "auto" }}>
            <CssBaseline />
            <AppBar position='absolute' component="nav" sx={{ mt: 2, background: "transparent", boxShadow: "none" }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mx: 2, display: { xs: "flex", md: 'none' } }}
                    >
                        <MenuIcon sx={{ width: "30px", height: "30px" }} />
                    </IconButton>
                    <Avatar src={Logo} sx={{ display: { xs: "none", md: "block" }, mr: "14px", width: "50px", height: "50px" }} />
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{ flexGrow: 1, justifyContent: { xs: "flex-end" }, fontWeight: "700", display: { xs: 'flex', md: 'block' } }}
                    >
                        Hot Bite
                    </Typography>

                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <Grid container>
                            {navItems.map((item) => (
                                <React.Fragment key={item}>

                                    <Grid >
                                        <Button sx={{ color: '#fff', fontWeight: "700", fontSize: "18px" }}>
                                            {item}
                                        </Button>
                                    </Grid>
                                    <Divider sx={{ background: "yellow", mx: 1, width: "2px" }} flexItem orientation='vertical' />
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
    );
}
