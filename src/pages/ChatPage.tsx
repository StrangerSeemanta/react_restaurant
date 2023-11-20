import { Box, Divider, IconButton, Menu, Stack, Typography } from '@mui/material'
import { Fragment, ReactNode, useRef, useState, useCallback, useEffect } from 'react'
import Doodles from "./../assets/doodles.svg"
import { DarkMode, LightMode, MoreVert, Photo, Send, SmartToyOutlined } from '@mui/icons-material'
import ChatBot_model from '../model/ChatBot_model'
function ChatPage() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const [darkMode, setDarkMode] = useState(false)
    const [themeColor, setThemeColor] = useState("#d14d72")

    useEffect(() => {
        if (darkMode) {
            setThemeColor("navy")
        } else if (!darkMode) {
            setThemeColor("#d14d72")
        }
    }, [darkMode])
    const [textAreaVal, setTextAreaVal] = useState('');
    const [outgoingMessage, setOutgoingMessage] = useState("");
    const [messages, setMessages] = useState<{ type: 'incoming' | 'outgoing'; content: string | ReactNode }[]>([{ type: "incoming", content: "Hi ! I am your Chat Bot" },]);
    const [isMessageSending, setMessageSending] = useState(false);
    const incomingRef = useRef();
    const outgoingRef = useRef();
    const chatBoxRef = useRef<HTMLDivElement>(null)

    const handleIncoming = useCallback((message: string | ReactNode, delay: number) => {
        setTimeout(() => {
            setMessageSending(false);
            setMessages((prevMessages) => [...prevMessages, { type: 'incoming', content: message }]);
        }, delay);
    }, []);


    const handleSuggestions = (suggestion: string) => {
        handleSend(suggestion)
    }
    const handleSend = (user_message: string) => {

        setMessageSending(true);
        setTextAreaVal('');
        // setOutgoingMessage(textAreaVal);

        setMessages((prevMessages) => [...prevMessages, { type: 'outgoing', content: user_message }]);

        // Sending message to chat gpt
        // sendMessageToGPT(textAreaVal);

        ChatBot_model(user_message, handleSuggestions)
            .then(res => {
                handleIncoming(res, 1500);

            })
            .catch(err => {
                handleIncoming(err, 0)
            })
    };

    useEffect(() => {
        // Scroll to the bottom of the chat box
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    }, [messages]);
    return (
        <Fragment>
            <Box width={"100%"} minHeight={"90vh"} bgcolor={"#e1f7f1"}>
                <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} width={"100%"} height={"90vh"} sx={{
                    background: `url(${Doodles}) `,
                    backgroundPosition: "center",
                    backgroundSize: "cover",

                }} >
                    <Box component={"div"} width={{ xs: "100%", md: 390 }} bgcolor={"white"} height={{ xs: "100%", md: "510px" }} sx={{ borderRadius: { xs: 0, md: 3 }, boxShadow: "0px 0px 129px rgba(0,0,0,0.1),0px 32px 64px -48px rgba(0,0,0,0.5),5px 5px 39px -20px  rgba(0,0,0,0.3)", overflow: "hidden", position: 'relative' }} >
                        <Stack height={"100%"}>
                            <Box component={"div"} className='chatbox_header' sx={{ py: 1, px: 2, gap: 2, display: { xs: "none", md: "flex" }, justifyContent: "center", alignItems: "center", width: "100%", height: { xs: "7%", md: "15%" }, transition: "all linear 250ms", background: { md: themeColor } }}>
                                <Typography fontSize={"1.2rem"} fontFamily={"'Poppins',serif"} color={"white"} fontWeight={700}>HotBite ChatBot</Typography>
                                <IconButton disableRipple disableFocusRipple onClick={() => { setDarkMode(!darkMode) }}>
                                    {!darkMode ?
                                        <DarkMode sx={{ fontSize: "1.5rem", color: "white", cursor: "pointer", transition: "all linear 250ms", ":hover": { rotate: "360deg", color: "navy" } }} /> :
                                        <LightMode sx={{ fontSize: "1.5rem", color: "white", cursor: "pointer", transition: "all linear 150ms", ":hover": { rotate: "-720deg", color: "yellow" } }} />
                                    }
                                </IconButton>
                            </Box>
                            <Stack ref={chatBoxRef} bgcolor={darkMode ? "#1f1f1f" : "white"} component="div" className='chatbox' spacing={2} sx={{ p: 2, overflowY: "auto", scrollBehavior: "smooth", transition: "all linear 250ms" }} height={{ xs: "80%", md: "72%" }}>
                                <Typography fontSize={"1.2rem"} display={{ xs: "block", md: "none" }} fontFamily={"'Poppins',serif"} color={themeColor} fontWeight={700}>HotBite ChatBot</Typography>

                                {messages.map((message, index) => (
                                    <Box
                                        key={index}
                                        ref={message.type === 'incoming' ? incomingRef : outgoingRef}
                                        component="div"
                                        className={message.type === 'incoming' ? 'chatbox_incoming' : 'chatbox_outgoing'}
                                        sx={{ display: "flex", width: "100%", justifyContent: message.type === 'incoming' ? 'flex-start' : 'flex-end' }}
                                    >
                                        {message.type === 'incoming' && <Typography component={"span"} width={30} height={30} mr={1} display={"flex"} justifyContent={"center"} alignItems={"center"} sx={{ transition: "all linear 250ms" }} bgcolor={themeColor}><SmartToyOutlined sx={{ color: "white", fontSize: "25px", }} /></Typography>}
                                        <Box
                                            textTransform={message.type === "incoming" ? "capitalize" : "none"}
                                            p={1}
                                            bgcolor={message.type === 'incoming' ? (darkMode ? "#2f2f2f" : "#dfdfdf") : themeColor}
                                            color={message.type === 'incoming' ? (darkMode ? "white" : "black") : "white"}
                                            fontSize={13}
                                            className={message.type === 'incoming' ? 'chat_incoming_anime' : 'chat_outgoing_anime'}

                                            sx={{
                                                borderRadius:
                                                    message.type === 'incoming'
                                                        ? "0px 10px 10px 10px"
                                                        : "10px 10px 0px 10px",
                                                maxWidth: "75%",
                                                height: "auto",
                                                wordBreak: "break-word",
                                                whiteSpace: "pre-wrap",
                                                transition: "all linear 250ms"
                                            }}
                                        >
                                            {message.content}
                                        </Box>
                                    </Box>
                                ))}

                                {/* Typing... */}
                                {isMessageSending && <Box component="div" sx={{ display: "flex", width: "100%", justifyContent: 'flex-start', }}>
                                    <Typography component={"span"} width={30} height={30} mr={1} display={"flex"} justifyContent={"center"} alignItems={"center"} bgcolor={themeColor}><SmartToyOutlined sx={{ color: "white", fontSize: "25px", }} /></Typography>
                                    <Typography
                                        p={1}
                                        fontSize={13}
                                        component={"div"}
                                        className='typingMsg'
                                        sx={{
                                            borderRadius: "0px 10px 10px 10px",
                                            maxWidth: "75%",
                                            height: "auto",
                                            wordBreak: "break-word",
                                            whiteSpace: "pre-wrap",
                                        }}
                                    >
                                        <div className="dot"></div>
                                        <div className="dot"></div>
                                        <div className="dot"></div>
                                    </Typography>
                                </Box>}
                            </Stack>
                            <Divider />
                            <Stack sx={{ transition: "all linear 250ms" }} component={"form"} bgcolor={darkMode ? "#1f1f1f" : "white"} onSubmit={(e) => { e.preventDefault(); handleSend(outgoingMessage) }} direction={"row"} spacing={2} alignItems={"center"} justifyContent={"space-around"} height={{ xs: "13%", md: "13%" }} >
                                <IconButton
                                    onClick={handleMenuOpen}
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}>
                                    <MoreVert sx={{ color: darkMode ? "white" : themeColor, }} />
                                </IconButton>
                                <Menu id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleMenuClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',

                                    }}>
                                    <IconButton >
                                        <Photo sx={{ color: darkMode ? "white" : themeColor, }} />
                                    </IconButton>
                                </Menu>
                                <input
                                    type='text'
                                    autoFocus
                                    required
                                    style={{ transition: "all linear 250ms", background: darkMode ? "#1f1f1f" : "white", color: darkMode ? "white" : "black", height: "100%", resize: "none", width: "80%", padding: "18px 10px", outline: "none", overflowY: "auto" }}
                                    placeholder='write your message'
                                    value={textAreaVal}
                                    onChange={(e) => { setOutgoingMessage(e.target.value); setTextAreaVal(e.target.value) }}
                                />

                                <IconButton type='submit'>
                                    <Send sx={{ color: darkMode ? "white" : themeColor, }} />
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