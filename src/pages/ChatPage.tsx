import { Box, Divider, IconButton, Stack, Typography } from '@mui/material'
import { Fragment, useRef, useState, useCallback, } from 'react'
import Doodles from "./../assets/doodles.svg"
import { Send, SmartToyOutlined } from '@mui/icons-material'
function ChatPage() {
    const [textAreaVal, setTextAreaVal] = useState('');
    const [outgoingMessage, setOutgoingMessage] = useState("");
    const [messages, setMessages] = useState<{ type: 'incoming' | 'outgoing'; content: string }[]>([{ type: "incoming", content: "Hi ! I am your Chat Bot" }, { type: "incoming", content: "your PAT is for botpress: " }, { type: "incoming", content: "bp_pat_E460urxF5eoNp1kyTLx1LisdP6GSllvXGjnR" }]);

    const incomingRef = useRef();
    const outgoingRef = useRef();


    const handleIncoming = useCallback((message: string, delay: number) => {
        setTimeout(() => {
            setMessages((prevMessages) => [...prevMessages, { type: 'incoming', content: message }]);
        }, delay);
    }, []);



    const handleSend = () => {
        setTextAreaVal('');
        setOutgoingMessage(textAreaVal);

        setMessages((prevMessages) => [...prevMessages, { type: 'outgoing', content: outgoingMessage }]);

        // Sending message to chat gpt
        // sendMessageToGPT(textAreaVal);
        handleIncoming("Fine", 2000)
    };

    return (
        <Fragment>
            <Box width={"100%"} minHeight={"90vh"} bgcolor={"#e1f7f1"}>
                <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} width={"100%"} height={"90vh"} sx={{
                    background: `url(${Doodles}) `,
                    backgroundPosition: "center",
                    backgroundSize: "cover",

                }} >
                    <Box component={"div"} width={{ xs: "100%", sm: 390 }} bgcolor={"white"} height={{ xs: "100%", sm: "450px" }} sx={{ borderRadius: { xs: 0, sm: 3 }, boxShadow: "0px 0px 129px rgba(0,0,0,0.1),0px 32px 64px -48px rgba(0,0,0,0.5),5px 5px 39px -20px  rgba(0,0,0,0.3)", overflow: "hidden", position: 'relative' }} >
                        <Stack height={"100%"}>
                            <Box component={"div"} className='chatbox_header' sx={{ p: 1, display: { xs: "none", sm: "flex" }, justifyContent: "center", alignItems: "center", width: "100%", height: "15%", background: "#d14d72" }}>
                                <Typography fontSize={"1.2rem"} fontFamily={"'Poppins',serif"} color={"white"} fontWeight={700}>HotBite ChatBot</Typography>
                            </Box>
                            <Stack component="div" className='chatbox' spacing={2} sx={{ p: 2, overflowY: "auto" }} height={{ xs: "85%", sm: "75%" }}>
                                {messages.map((message, index) => (
                                    <Box
                                        key={index}
                                        ref={message.type === 'incoming' ? incomingRef : outgoingRef}
                                        component="div"
                                        className={message.type === 'incoming' ? 'chat_incoming' : 'chat_outgoing'}
                                        sx={{ display: "flex", width: "100%", justifyContent: message.type === 'incoming' ? 'flex-start' : 'flex-end' }}
                                    >
                                        {message.type === 'incoming' && <Typography component={"span"} width={30} height={30} mr={1} display={"flex"} justifyContent={"center"} alignItems={"center"} bgcolor={"#d14d72"}><SmartToyOutlined sx={{ color: "white", fontSize: "25px", }} /></Typography>}
                                        <Typography
                                            p={1}
                                            bgcolor={message.type === 'incoming' ? "#dfdfdf" : "#d9678a"}
                                            color={message.type === 'incoming' ? "black" : "white"}
                                            fontSize={13}
                                            sx={{
                                                borderRadius:
                                                    message.type === 'incoming'
                                                        ? "0px 10px 10px 10px"
                                                        : "10px 10px 0px 10px",
                                                maxWidth: "75%",
                                                height: "auto",
                                                wordBreak: "break-word",
                                                whiteSpace: "pre-wrap"
                                            }}
                                        >
                                            {message.content}
                                        </Typography>
                                    </Box>
                                ))}
                            </Stack>
                            <Divider />
                            <Stack direction={"row"} spacing={2} alignItems={"center"} justifyContent={"space-around"} height={{ xs: "15%", sm: "13%" }} >
                                <textarea
                                    style={{ height: "100%", resize: "none", width: "80%", padding: "18px 10px", outline: "none", overflowY: "auto" }}
                                    placeholder='write your message'
                                    value={textAreaVal}
                                    onChange={(e) => { setOutgoingMessage(e.target.value); setTextAreaVal(e.target.value) }}
                                />
                                <IconButton autoFocus onClick={handleSend}>
                                    <Send sx={{ color: "#d14d72", }} />
                                </IconButton>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Box >
        </Fragment >
    )
}

export default ChatPage