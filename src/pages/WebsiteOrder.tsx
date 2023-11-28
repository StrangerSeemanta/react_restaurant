import { AttachMoney, InsertEmoticon, } from '@mui/icons-material'
import { Alert, AlertTitle, Box, Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import { FormEvent, Fragment, useEffect, useRef, useState } from 'react'
import { SocialMediaCard } from '../components/SocialMedia'
import Fiverr from "./../assets/fiverr_logo.svg"
import emailjs from '@emailjs/browser';
const ServiceCharges = [
    {
        name: "frontend",
        charge: 300
    },
    {
        name: "backend",
        charge: 500
    },
    {
        name: "fullstack",
        charge: 700
    },
    {
        name: "portfolio",
        charge: 200
    },
    {
        name: "business",
        charge: 400
    },
    {
        name: "newspaper",
        charge: 780
    },
    {
        name: "eCommerce",
        charge: 500
    }
    ,
    {
        name: "product_shocase",
        charge: 250
    },
    {
        name: "landing_page",
        charge: 300
    }
]
function WebsiteOrder() {
    const [isSending, setIsSending] = useState(false)
    const form = useRef<HTMLFormElement>(null)
    const [clientMail, setClientMail] = useState('')
    const [selectServiceType, setSelectServiceType] = useState<string | number>('')
    const [selectWebsiteType, setSelectWebsiteType] = useState<string | number>('')
    const [totalPrice, setTotalPrice] = useState<number>(0)
    const [budget, setBudget] = useState<string | number>('')
    const [EmailSentSuccess, setEmailSentSuccess] = useState(false)
    const [showReport, setShowReport] = useState(false);
    // Managing price
    useEffect(() => {
        let amount = 0;
        ServiceCharges.filter((service) => {
            service.name === selectServiceType && (amount += service.charge)
        })
        ServiceCharges.filter((service) => {
            service.name === selectWebsiteType && (amount += service.charge)
        })

        setTotalPrice(amount)
    }, [selectServiceType, selectWebsiteType])
    const sendEmail = (formData: HTMLFormElement | null) => {
        // Make sure form.current is a valid reference to the HTML form element
        if (formData) {
            // Set a loading state here
            // Use formData instead of form.current
            setIsSending(true)
            emailjs.sendForm('websiteOrder_service_23', 'template_3vi31ok', formData, 'aEWPX1tHdZziRIgbS')
                .then((result) => {
                    console.log('Email sent successfully:', result.text);
                    setShowReport(true)
                    setEmailSentSuccess(true)
                })
                .catch((error) => {
                    console.error('Error sending email:', error.text);
                    setEmailSentSuccess(false)
                    setShowReport(true)
                    // Handle the error gracefully, e.g., show an error message to the user.
                })
                .finally(() => {
                    setIsSending(false)
                });
        } else {
            console.error('Form reference is not valid.');
        }
    };
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setIsSending(true);
        console.log(form.current?.price)
        sendEmail(form.current)
    }
    return (
        <Fragment>
            <Box component={"section"} minHeight={"80vh"} width={"100%"} bgcolor={"azure"}>
                <Container sx={{ py: 5 }}>
                    <Stack spacing={1}>
                        <Typography fontSize={{ xs: "3rem", md: "5rem" }} fontFamily={"'Poppins'"} fontWeight={600}>
                            Need A Website?
                        </Typography>
                        <Typography width={{ xs: "100%", sm: "50%" }} fontFamily={"'Poppins'"} fontSize={{ md: "1.2rem" }}>
                            If you want enhance your existing business or want to stablish a strong online presence, then this is the right moment. Build your next website with Me.
                        </Typography>
                        <Typography fontWeight={600} fontFamily={"'Poppins'"} color={"dodgerblue"} fontSize={{ md: "2.2rem" }}>
                            From A Eye-Catching Portfolio website to Larger E-Commerce Website I am with you.
                        </Typography>
                    </Stack>
                </Container>
            </Box>
            <Box component={"section"} display={{ xs: "none", sm: "block" }} minHeight={"50vh"} width={"100%"} bgcolor={"beige"}>
                <Container sx={{ py: 5 }}>
                    <Stack minHeight={"50vh"} spacing={1} alignItems={"center"} justifyContent={"center"}>
                        <Typography display={"flex"} color={"red"} alignItems={"center"} gap={5} fontSize={{ sm: "5rem" }} fontFamily={"'Poppins'"} fontWeight={600}>
                            <InsertEmoticon sx={{ fontSize: "5rem" }} />  Wao!!!
                        </Typography>
                        <Typography textAlign={"center"} width={"50%"} fontFamily={"'Poppins'"} fontSize={{ sm: "1.2rem" }}>
                            It seems your are interested!! Let's Do it.
                        </Typography>

                    </Stack>
                </Container>
            </Box>
            <Box component={"section"} minHeight={"50vh"} width={"100%"} bgcolor={"#6be2fa54"}>
                <Container sx={{ py: 5 }}>
                    <Stack minHeight={"50vh"} spacing={1.3} alignItems={"center"}>
                        <Typography display={"flex"} color={"darkblue"} alignItems={"center"} gap={5} fontSize={{ xs: "2.3rem", md: "4rem" }} fontFamily={"'Poppins'"} fontWeight={600}>
                            Order From
                        </Typography>
                        <Typography textAlign={"center"} width={{ xs: "100%", sm: "50%" }} fontFamily={"'Poppins'"} fontSize={{ md: "1rem" }}>
                            you can order from my portfolio website, this page, Fiverr, Social Media
                        </Typography>
                        <Typography color={"red"} textAlign={"center"} width={{ xs: "100%", sm: "50%" }} fontFamily={"'Poppins'"} fontSize={{ md: "1.3rem" }}>
                            I suggest you to place an order from Fiverr or Social Media. It is important that you have a little disscussion before placing order.
                        </Typography>
                        <Stack height={"100%"} direction={"row"} alignItems={"center"} spacing={3} mt={3} >

                            <Box>
                                <SocialMediaCard
                                    icon={<><img src={Fiverr} alt="fiverrLogo" style={{ width: "70px", height: "70px", objectFit: "contain" }} /></>}
                                    title='Fiverr'
                                    color='#1DBE72'
                                    href='https://www.fiverr.com/shuvosarker933'
                                    design={{

                                        marginTop: "7px",
                                    }}
                                />
                            </Box>

                        </Stack>
                    </Stack>
                </Container>
            </Box>
            <Stack spacing={3} component={"section"} alignItems={"center"} justifyContent={"center"} minHeight={"80vh"} width={"100%"} bgcolor={"white"} py={5}>
                <Typography textAlign={"center"} fontWeight={600} color={'#07AD5F'} fontSize={"3.7rem"} >
                    Order Now
                </Typography>
                <Stack spacing={3} component={"form"} ref={form} onSubmit={handleSubmit} width={{ xs: "90%", sm: "40%" }}>
                    <TextField
                        fullWidth
                        required
                        label="Full Name"
                        placeholder='Write Your Name'
                        name='client_name'
                    />
                    <TextField
                        type='email'
                        required
                        fullWidth
                        label="Email Address"
                        placeholder='Write Your Name'
                        name='client_mail'
                        value={clientMail}
                        onChange={(e) => { setClientMail(e.target.value) }}
                    />
                    <Stack direction={"row"} spacing={2}>
                        <FormControl sx={{ width: "50%" }}>
                            <InputLabel id="select_sevice_type_input_label" >Service Type</InputLabel>
                            <Select
                                required
                                labelId='select_sevice_type_input_label'
                                label="Service Type"
                                value={selectServiceType}
                                onChange={(e) => { setSelectServiceType(e.target.value) }}
                                name='service_type'
                            >
                                <MenuItem value={"frontend"} >Only Website Design</MenuItem>
                                <MenuItem value={"backend"} >Only Backend Development</MenuItem>
                                <MenuItem value={"fullstack"} >Full-Stack {'(Front-End & Backend)'}</MenuItem>

                            </Select>

                        </FormControl>
                        <FormControl sx={{ width: "50%" }}>
                            <InputLabel id="select_website_type_input_label" >Website Type</InputLabel>
                            <Select
                                required
                                labelId='select_website_type_input_label'
                                label="Service Type"
                                value={selectWebsiteType}
                                onChange={(e) => { setSelectWebsiteType(e.target.value) }}
                                name='website_type'
                            >
                                <MenuItem value={"portfolio"} >
                                    Portfolio
                                </MenuItem>
                                <MenuItem value={"eCommerce"} >
                                    E-Commerce
                                </MenuItem>
                                <MenuItem value={"newspaper"} >
                                    Newpaper
                                </MenuItem>
                                <MenuItem value={"landing_page"} >
                                    Landing Page
                                </MenuItem>
                                <MenuItem value={"product_shocase"} >
                                    Product Showcase
                                </MenuItem>
                                <MenuItem value={"business"} >
                                    Business
                                </MenuItem>

                                <MenuItem value={"custom"}>
                                    Custom Website
                                </MenuItem>
                            </Select>

                        </FormControl>
                    </Stack>

                    <TextField
                        fullWidth
                        label="Approx. Price (Negotiable)"
                        name='price'
                        type='number'
                        value={totalPrice}
                        helperText="This is a prediction price. Prices can be less or more than it and ALWAYS NEGOTIABLE"
                        sx={{
                            '& .MuiInputBase-input::-webkit-inner-spin-button': { WebkitAppearance: "none", margin: 0 },
                            '& .MuiInputBase-input::-webkit-outer-spin-button': { WebkitAppearance: "none", margin: 0 },
                            '& .MuiInputBase-input': { fontWeight: 700 },
                            "& .MuiFormHelperText-root.Mui-disabled": { color: "red", fontWeight: 600 }
                        }}
                        InputProps={{
                            startAdornment: <><AttachMoney /></>
                        }}

                    />
                    <TextField
                        fullWidth
                        required
                        label="Your Budget"
                        name='budget'
                        type='number'
                        value={budget}
                        onChange={(e) => { setBudget(e.target.value) }}
                        helperText="Don't hesitate to share your budget"

                        InputProps={{

                            startAdornment: <><AttachMoney sx={{ fontWeight: 300, color: "gray" }} /></>
                        }}
                        sx={{
                            '& .MuiInputBase-input::-webkit-inner-spin-button': { WebkitAppearance: "none", margin: 0 },
                            '& .MuiInputBase-input::-webkit-outer-spin-button': { WebkitAppearance: "none", margin: 0 },

                            "& .MuiFormHelperText-root": { color: "#07AD5F", fontWeight: 600 }
                        }}
                    />
                    <TextField
                        type='text'
                        required
                        multiline
                        name='website_details'
                        rows={4}
                        sx={{ resize: "none" }}
                        label="Website Details"
                        placeholder='Describe how you want your next website. Try to write in details so I can understand your needs.'
                    />

                    <Button type='submit' variant='contained' className={isSending ? 'typingMsg' : " "} disableElevation sx={{ background: "#0CCB70", fontSize: 20, fontWeight: 600, ":hover": { background: "#07AD5F" }, p: isSending ? 2.9 : 1 }}>
                        {!isSending ?
                            <span>Place Order</span>
                            :
                            <>
                                <span className="dot" style={{ background: "white" }}></span>
                                <span className="dot" style={{ background: "white" }}></span>
                                <span className="dot" style={{ background: "white" }}></span>
                            </>}

                    </Button>
                </Stack>

                <Dialog open={showReport} onClose={() => { setShowReport(false) }}>
                    <DialogTitle fontWeight={700}>
                        Report
                    </DialogTitle>
                    <DialogContent dividers>
                        {EmailSentSuccess ? <Alert severity="success">
                            <AlertTitle sx={{ fontWeight: 600 }}>Your Message Sent Successfully!</AlertTitle>
                            <Typography fontSize={12}>
                                Our Team Will review your message and contact with you via email or phone number.
                                Thanks
                            </Typography>
                        </Alert> :
                            <Alert severity="error">
                                <AlertTitle sx={{ fontWeight: 600 }}>Failed To Send The Message</AlertTitle>
                                <Typography fontSize={12}>
                                    please try again..
                                </Typography>
                            </Alert>}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => { setShowReport(false) }} sx={{
                            fontWeight: 600
                        }}>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>

            </Stack>
        </Fragment >
    )
}

export default WebsiteOrder