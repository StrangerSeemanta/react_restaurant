import { Box, Divider, Stack, Typography } from "@mui/material";
import { Fragment, ReactNode } from "react"
import SuggestButtons from "./SuggestButtons";
interface MainPanelProps {
    start?: string | ReactNode;
    end?: string | ReactNode;
    suggestButtons?: boolean;
    disableAbout?: boolean;
    onSuggestBtnClick?: (suggestion: string) => void;
    children?: ReactNode
}
function MainPanel({ start, end, suggestButtons, disableAbout, onSuggestBtnClick, children }: MainPanelProps) {
    return (
        <Fragment>
            {start &&
                <>
                    <Box>{start}</Box>
                    <Divider sx={{ my: 1 }} />

                </>
            }
            {
                children && children
            }
            {
                !disableAbout &&
                <>
                    <Box mt={1} color={"green"} textAlign={"center"}>
                        <b>I am a Chatbot, designed for Hotbite Website and specific purposes</b>
                    </Box>
                    <Stack my={1} width={"100%"} fontSize={12}>
                        <p style={{ textAlign: "center", marginBottom: "8px" }}>I can help you to:</p>
                        <ul className="chat_reply_list">
                            <li>browse this website more smoothly</li>
                            <li>Solving problems on create account</li>
                            <li>Sign In issues</li>
                            <li>providing informations</li>
                            <li>Schedule a meeting with designer</li>
                            <li>Telling New offers and vouchers</li>
                            <li>Reveiw your custom problem</li>
                        </ul>
                    </Stack>
                    <Typography>
                        <b style={{ fontSize: "12px", color: "GrayText" }}>Developed and Designed by <a style={{ textDecoration: "none" }} href="mailto:ssworkmail22@gmail.com">Shuvo Sarker</a></b>
                    </Typography>
                </>

            }
            {
                end &&
                <div>{end}</div>
            }


            {
                suggestButtons &&
                <>
                    <i style={{ fontSize: "11px" }}>Select a right prompt to get answers</i><br></br>
                    <b>Choose the right topic: </b>
                    <Box width={"100%"} >
                        <SuggestButtons onSuggestBtn={onSuggestBtnClick} />
                    </Box>
                </>
            }
        </Fragment>
    )
}

export default MainPanel