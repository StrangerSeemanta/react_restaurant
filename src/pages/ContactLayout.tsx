import { Fragment, useRef, ReactNode, CSSProperties } from "react"
import { Box, IconButton, Stack, Typography } from "@mui/material"
import Lottie, { LottieRefCurrentProps } from "lottie-react"
import SocialTree from "./../assets/Lotties/socialTree.json"
import ContactAnime from "./../assets/Lotties/contact_anime.json"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { EastRounded, Instagram, Twitter, YouTube } from "@mui/icons-material"

interface SocialMediaCardProps {
    Icon: ReactNode;
    title: string;
    color: string;
    design?: CSSProperties;
    href: string;
}
function SocialMediaCard({ Icon, title, color, design, href }: SocialMediaCardProps) {
    return (
        <Fragment>
            <Box style={design} p={2} display={"flex"} justifyContent={"space-between"} component={"a"} href={href} sx={{ textDecoration: "none", transition: "all ease-in-out 350ms", cursor: "pointer", ":hover": { boxShadow: `0 0 24px ${color}` }, width: { xs: "250px", sm: "500px" }, height: { xs: "80px", sm: "120px" }, background: "white", borderRadius: "5px", boxShadow: "5px 5px 8px rgba(0,0,0,0.2)" }}>
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} height={"100%"} width={"20%"}>
                    {Icon}
                </Box>
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} height={"100%"} width={"60%"}  >
                    <Typography textAlign={"center"} color={color} fontFamily={"'lilita one',cursive"} fontSize={{ xs: "0.8rem", sm: "2rem" }} variant="h5" component={"h5"}>{title}</Typography>
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
function ContactLayout() {
    const contactRef = useRef<LottieRefCurrentProps | null>(null)
    return (
        <Fragment>
            <Box height="95vh" width="100%" display="flex" px={4} py={9} justifyContent="space-between" alignItems="center" sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}>
                <Box display="flex" sx={{ width: { xs: "100%", md: "40%" } }} justifyContent="flex-start" gap="1rem" alignItems="flex-start" flexDirection="column">
                    <Typography color={"#D14D72"} sx={{ transition: "all linear 350ms", fontSize: { xs: "1.3rem", sm: "3.4rem" } }} variant='h1' fontWeight="900" >
                        Let's <span style={{ color: "orange" }}>Connect</span> Together...
                    </Typography>
                    <Typography sx={{ transition: "all linear 350ms", fontSize: { xs: "1rem", sm: "1rem" } }} textTransform="capitalize" variant='h5' >
                        Share your problems with us and stay tuned with our social media updates
                        <br />
                    </Typography>

                    <Typography textTransform="uppercase" variant='body1' sx={{ fontStyle: "italic" }} textAlign="left" >
                        ~Hot Bite Authority~
                    </Typography>
                </Box>
                <Box sx={{ width: { xs: "100%", md: "60%" }, height: { xs: "40vh", md: "100vh" } }} display="flex" justifyContent="center"  >
                    <Lottie lottieRef={contactRef} onComplete={() => { contactRef.current?.setSpeed(0.4); contactRef.current?.goToAndPlay(0) }} style={{ transition: "all linear 350ms", userSelect: "none", height: "100%" }} animationData={ContactAnime} loop={false} />

                </Box>
            </Box>

            <Box minHeight="100vh" width="100%" display="flex" px={4} py={9} justifyContent="space-between" alignItems="center" sx={{ flexDirection: { xs: "column", md: "row" }, background: "#eaf6fe" }}>
                <Box sx={{ width: { xs: "50%", md: "50%" }, height: "100%" }} display="flex" justifyContent="center"  >
                    <Lottie style={{ transition: "all linear 350ms", userSelect: "none", height: "100%" }} animationData={SocialTree} />

                </Box>
                <Box display="flex" sx={{ width: { xs: "100%", md: "45%" }, height: "70%" }} justifyContent="space-evenly" gap="1rem" alignItems="flex-start" flexDirection="column">
                    <Typography width={"100%"} textAlign={"center"} color={"#D14D72"} sx={{ transition: "all linear 350ms", fontSize: { xs: "2.3rem", sm: "2.5rem" } }} variant='h1' fontWeight="900" >
                        Check The <span style={{ color: "orange" }}>Updates</span>
                    </Typography>
                    <Stack mt={2} spacing={5} width={"100%"} alignItems={"center"}>
                        <SocialMediaCard
                            Icon={
                                <FacebookRoundedIcon sx={{ fontSize: { xs: "2rem", sm: "5rem" }, color: "blue" }} />
                            }
                            title="Facebook Page"
                            color="blue"
                            design={{ rotate: "3deg" }}
                            href="https://www.facebook.com"
                        />
                        <SocialMediaCard
                            Icon={
                                <Twitter sx={{ fontSize: "5rem", color: "dodgerblue" }} />
                            }
                            title="Twitter"
                            color="dodgerblue"
                            design={{ rotate: "-3deg" }}
                            href="https://www.twitter.com"

                        />
                        <SocialMediaCard
                            Icon={
                                <Instagram sx={{
                                    fontSize: "5rem", color: "#E1306C"
                                }} />
                            }
                            title="Instagram"
                            color="#E1306C"
                            design={{ rotate: "3deg" }}
                            href="https://www.instagram.com"

                        />
                        <SocialMediaCard
                            Icon={
                                <YouTube sx={{
                                    fontSize: "5rem", color: "red"
                                }} />
                            }
                            title="Youtube"
                            color="red"
                            design={{ rotate: "-3deg" }}
                            href="https://www.youtube.com"

                        />
                    </Stack>
                </Box>

            </Box>
        </Fragment >
    )
}

export default ContactLayout