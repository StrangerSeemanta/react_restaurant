import { CopyrightOutlined, LanguageOutlined } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

function Footer() {
    return (
        <React.Fragment>
            <Box minHeight={"50vh"} width={"100%"} bgcolor={"#d14d72"}>
                <Stack minHeight={"50vh"} width={"100%"} justifyContent={"center"} spacing={2} px={5}>
                    <Typography fontFamily={"'poppins'"} color={"white"} fontSize={{ xs: 20, md: 35 }} textAlign={"center"}>
                        <CopyrightOutlined sx={{ fontSize: { xs: 20, md: 30 }, mr: 1 }} />all rights reserved to <strong > Shuvo Sarker</strong>
                    </Typography>
                    <Typography textAlign={"justify"} color={"gainsboro"} fontFamily={"'poppins'"}>
                        This website designed and developed by Shuvo Sarker, A Full-Stack Web Developer with over expertise on advance programming languages. For more information visit:
                        <Typography component={"div"} onClick={() => { open("https://shuvosarker.vercel.app") }} fontSize={22} fontWeight={600} color={'yellow'} sx={{ cursor: "pointer", ":hover": { textDecoration: "underline" } }}><LanguageOutlined sx={{ fontSize: 20, }} /> shuvosarker.vercel.app</Typography>
                    </Typography>
                </Stack>
            </Box>
        </React.Fragment>
    )
}

export default Footer