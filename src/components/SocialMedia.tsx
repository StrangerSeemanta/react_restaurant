import { Fragment, ReactNode, CSSProperties } from 'react'
import { IconButton, Box, Stack, Typography } from "@mui/material"
import { EastRounded } from "@mui/icons-material"
import SocialTree from "./../assets/Lotties/socialTree.json"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { Instagram, Twitter, YouTube } from "@mui/icons-material"
import Lottie from 'lottie-react';
const SocialMediaIconSize = {
    fontSize: { xs: "2rem", sm: "3.5rem" }
}
interface SocialMediaCardProps {
    icon: ReactNode;
    title: string;
    color: string;
    design?: CSSProperties;
    href: string;
}
function SocialMediaCard({ icon, title, color, design, href }: SocialMediaCardProps) {
    return (
        <Fragment>
            <Box p={2} display={"flex"} justifyContent={"space-between"} component={"a"} href={href} sx={{ textDecoration: "none", transition: "all ease-in-out 350ms", cursor: "pointer", ":hover": { boxShadow: `0 0 24px ${color}`, rotate: "0deg" }, width: { xs: "250px", sm: "400px" }, height: { xs: "80px", sm: "90px" }, background: "white", borderRadius: "5px", boxShadow: "5px 5px 8px rgba(0,0,0,0.2)", ...design }}>
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} height={"100%"} width={"20%"} >
                    {icon}
                </Box>
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} height={"100%"} width={"60%"}  >
                    <Typography textAlign={"center"} color={color} fontFamily={"'lilita one',cursive"} fontSize={{ xs: "1rem", sm: "1.6rem" }} variant="h5" component={"h5"}>{title}</Typography>
                </Box>
                <Box display={"flex"} justifyContent={"flex-end"} alignItems={"center"} height={"100%"} width={"20%"}>
                    <Box width={45} display={"flex"} justifyContent={"center"} alignItems={"center"} height={45} borderRadius={50} bgcolor={"whitesmoke"}>
                        <IconButton>
                            <EastRounded sx={{ fontSize: "1.8rem", color: "#d14d72" }} />
                        </IconButton>
                    </Box>
                </Box>
            </Box>

        </Fragment>
    )
}

function SocialMedia() {
    return (
        <Fragment>
            <Box minHeight="100vh" width="100%" display="flex" px={4} py={9} justifyContent="space-between" alignItems="center" sx={{ flexDirection: { xs: "column", md: "row" }, background: "#eaf6fe" }}>
                <Box sx={{ width: { xs: "50%", md: "50%" }, height: "100%" }} display="flex" justifyContent="center"  >
                    <Lottie style={{ transition: "all linear 350ms", userSelect: "none", height: "100%" }} animationData={SocialTree} />

                </Box>
                <Box display="flex" sx={{ width: { xs: "100%", md: "45%" }, height: "70%" }} justifyContent="space-evenly" gap="1rem" alignItems="flex-start" flexDirection="column">
                    <Typography width={"100%"} textAlign={"center"} color={"#D14D72"} sx={{ transition: "all linear 350ms", fontSize: { xs: "2.3rem", sm: "2.5rem" } }} variant='h1' fontWeight="900" >
                        Check The <span style={{ color: "orange" }}>Updates</span>
                    </Typography>
                    <Stack mt={2} spacing={3} width={"100%"} alignItems={"center"}>
                        <SocialMediaCard
                            icon={
                                <FacebookRoundedIcon sx={{ ...SocialMediaIconSize, color: "blue" }} />
                            }
                            title="Facebook Page"
                            color="blue"
                            design={{ rotate: "2deg" }}
                            href="https://www.facebook.com"
                        />
                        <SocialMediaCard
                            icon={
                                <Twitter sx={{ ...SocialMediaIconSize, color: "dodgerblue" }} />
                            }
                            title="Twitter"
                            color="dodgerblue"
                            design={{ rotate: "-2deg" }}
                            href="https://www.twitter.com"

                        />
                        <SocialMediaCard
                            icon={
                                <Instagram sx={{
                                    ...SocialMediaIconSize, color: "#E1306C"
                                }} />
                            }
                            title="Instagram"
                            color="#E1306C"
                            design={{ rotate: "2deg" }}
                            href="https://www.instagram.com"

                        />
                        <SocialMediaCard
                            icon={
                                <YouTube sx={{
                                    ...SocialMediaIconSize, color: "red"
                                }} />
                            }
                            title="Youtube"
                            color="red"
                            design={{ rotate: "-2deg" }}
                            href="https://www.youtube.com"

                        />
                    </Stack>
                </Box>
            </Box>
        </Fragment>
    )
}

export default SocialMedia