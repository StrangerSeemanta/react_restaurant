import { Box, Divider, IconButton, Menu, Stack, Typography } from '@mui/material'
import { Fragment, ReactNode, useRef, useState, useCallback, useEffect } from 'react'
import Doodles from "./../assets/doodles.svg"
import { MoreVert, Photo, Send, SmartToyOutlined } from '@mui/icons-material'
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
                    <Box component={"div"} width={{ xs: "100%", sm: 390 }} bgcolor={"white"} height={{ xs: "100%", sm: "510px" }} sx={{ borderRadius: { xs: 0, sm: 3 }, boxShadow: "0px 0px 129px rgba(0,0,0,0.1),0px 32px 64px -48px rgba(0,0,0,0.5),5px 5px 39px -20px  rgba(0,0,0,0.3)", overflow: "hidden", position: 'relative' }} >
                        <Stack height={"100%"}>
                            <Box component={"div"} className='chatbox_header' sx={{ py: 1, px: 2, display: { xs: "none", sm: "flex" }, justifyContent: "center", alignItems: "center", width: "100%", height: { xs: "7%", sm: "15%" }, background: { sm: "#d14d72" } }}>
                                <Typography fontSize={"1.2rem"} fontFamily={"'Poppins',serif"} color={{ xs: "#d14d72", sm: "white" }} fontWeight={700}>HotBite ChatBot</Typography>
                            </Box>
                            <Stack ref={chatBoxRef} component="div" className='chatbox' spacing={2} sx={{ p: 2, overflowY: "auto", scrollBehavior: "smooth" }} height={{ xs: "80%", sm: "72%" }}>
                                <Typography fontSize={"1.2rem"} display={{ xs: "block", sm: "none" }} fontFamily={"'Poppins',serif"} color={{ xs: "#d14d72", sm: "white" }} fontWeight={700}>HotBite ChatBot</Typography>

                                {messages.map((message, index) => (
                                    <Box
                                        key={index}
                                        ref={message.type === 'incoming' ? incomingRef : outgoingRef}
                                        component="div"
                                        className={message.type === 'incoming' ? 'chatbox_incoming' : 'chatbox_outgoing'}
                                        sx={{ display: "flex", width: "100%", justifyContent: message.type === 'incoming' ? 'flex-start' : 'flex-end' }}
                                    >
                                        {message.type === 'incoming' && <Typography component={"span"} width={30} height={30} mr={1} display={"flex"} justifyContent={"center"} alignItems={"center"} bgcolor={"#d14d72"}><SmartToyOutlined sx={{ color: "white", fontSize: "25px", }} /></Typography>}
                                        <Box
                                            textTransform={message.type === "incoming" ? "capitalize" : "none"}
                                            p={1}
                                            bgcolor={message.type === 'incoming' ? "#dfdfdf" : "#d9678a"}
                                            color={message.type === 'incoming' ? "black" : "white"}
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
                                            }}
                                        >
                                            {message.content}
                                        </Box>
                                    </Box>
                                ))}

                                {/* Typing... */}
                                {isMessageSending && <Box component="div" sx={{ display: "flex", width: "100%", justifyContent: 'flex-start' }}>
                                    <Typography component={"span"} width={30} height={30} mr={1} display={"flex"} justifyContent={"center"} alignItems={"center"} bgcolor={"#d14d72"}><SmartToyOutlined sx={{ color: "white", fontSize: "25px", }} /></Typography>
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
                            <Stack component={"form"} onSubmit={(e) => { e.preventDefault(); handleSend(outgoingMessage) }} direction={"row"} spacing={2} alignItems={"center"} justifyContent={"space-around"} height={{ xs: "13%", sm: "13%" }} >
                                <IconButton
                                    onClick={handleMenuOpen}
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}>
                                    <MoreVert sx={{ color: "#d14d72" }} />
                                </IconButton>
                                <Menu id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleMenuClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}>
                                    <IconButton >
                                        <Photo sx={{ color: "#d14d72" }} />
                                    </IconButton>
                                </Menu>
                                <input
                                    type='text'
                                    autoFocus
                                    required
                                    style={{ height: "100%", resize: "none", width: "80%", padding: "18px 10px", outline: "none", overflowY: "auto" }}
                                    placeholder='write your message'
                                    value={textAreaVal}
                                    onChange={(e) => { setOutgoingMessage(e.target.value); setTextAreaVal(e.target.value) }}
                                />

                                <IconButton type='submit'>
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