import { CopyrightOutlined, LanguageOutlined } from '@mui/icons-material'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Footer() {
    const [showDialog, setShowDialog] = useState(false);
    const handleRedirect = () => {
        open("https://shuvosarker.vercel.app");
        setShowDialog(false)
    }
    const navigate = useNavigate()
    return (
        <React.Fragment>
            <Box minHeight={"50vh"} width={"100%"} bgcolor={"#d14d72"}>
                <Stack direction={"column"} minHeight={"50vh"} width={"100%"} justifyContent={"center"} spacing={2} px={5}>
                    <Divider />

                    <Typography component={"div"} gap={0.5} justifyContent={"center"} alignItems={"center"} display={"flex"} fontFamily={"'poppins'"} color={"white"} fontSize={{ xs: 12, sm: 25 }} textAlign={"center"}>
                        <CopyrightOutlined sx={{ fontSize: { xs: 16, sm: 25 } }} />
                        <span>all rights reserved to <span style={{ fontWeight: 600 }}> Shuvo Sarker</span></span>

                    </Typography>
                    <Divider />
                    <Typography width={"auto"} fontSize={{ xs: 12, md: 20 }} textAlign={"justify"} color={"gainsboro"} fontFamily={"'poppins'"}>
                        This website designed and developed by Shuvo Sarker, A Full-Stack Web Developer with over expertise on advance programming languages. For more information visit:

                    </Typography>
                    <Button
                        disableRipple
                        onClick={() => { setShowDialog(true) }}
                        sx={{
                            width: { xs: "auto", sm: "300px" },
                            color: "yellow",
                            p: 0,
                            textAlign: "left",
                            gap: 1,
                            fontSize: { xs: 14, md: 20 },
                            ":hover": {
                                color: "white",
                                textDecoration: "underline"
                            }
                        }}>
                        <LanguageOutlined /> shuvosarker.vercel.app
                    </Button>
                    <Button
                        disableRipple
                        onClick={() => { navigate("/website_order") }}
                        sx={{
                            width: { xs: "auto", sm: "300px" },
                            color: "yellow",
                            p: 0,
                            textAlign: "left",
                            gap: 1,
                            fontSize: { xs: 14, md: 20 },
                            ":hover": {
                                color: "white",
                                textDecoration: "underline"
                            }
                        }}>
                        Need This Type of website ?
                    </Button>
                </Stack>

                <Dialog open={showDialog} onClose={() => { setShowDialog(false) }}>
                    <DialogTitle sx={{
                        fontWeight: 600,
                        fontFamily: "'poppins'"
                    }}>
                        Do you want to open the link now?
                    </DialogTitle>
                    <DialogContent dividers sx={{
                        fontFamily: "'poppins'"
                    }}>
                        This will redirect you to the portfolio website of the developer. If you want to know about him and explore the website then click this Confirm button.
                    </DialogContent>
                    <DialogActions>
                        <Button disableRipple color='error' onClick={() => { setShowDialog(false) }}>
                            Cancel
                        </Button>
                        <Button onClick={handleRedirect} variant='contained' disableElevation>
                            Confirm
                        </Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </React.Fragment>
    )
}

export default Footer