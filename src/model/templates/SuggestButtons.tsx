import { Stack, } from "@mui/material"
import MuiButton, { ButtonProps } from '@mui/material/Button';
import { Fragment, forwardRef, useState } from "react"
const SuggestBtn = forwardRef<HTMLButtonElement, ButtonProps>(
    function SuggestBtn(props, ref) {
        return <MuiButton variant="outlined" sx={{ fontWeight: 600, color: "#d14d72", borderColor: "#d14d72", borderRadius: "50px", transition: "all linear 350ms", ":hover": { background: "#d14d72", color: "white", borderColor: "#d14d72", } }} ref={ref} {...props} />
    }
)
interface SuggestBtnProps {
    onSuggestBtn?: (event: string) => void;
}
function SuggestButtons({ onSuggestBtn }: SuggestBtnProps) {
    const [showMore, setShowMore] = useState(false);
    const [showMainPanel, setMainPanel] = useState(true);

    const [showSignInPanel, setShowSignInPanel] = useState(false)

    return (
        <Fragment>
            <Stack mt={1} spacing={1} width={"100%"} alignItems={"center"}>
                {showMainPanel &&
                    <SuggestBtn onClick={() => { setMainPanel(false); setShowSignInPanel(true) }}>Account Problem</SuggestBtn>
                }
                {
                    showSignInPanel &&
                    <>
                        <SuggestBtn onClick={() => { onSuggestBtn && onSuggestBtn("Sign In Problems") }}>Sign In Problems</SuggestBtn>
                        <SuggestBtn onClick={() => { onSuggestBtn && onSuggestBtn("Create Account Problems") }}>Create Account Problems</SuggestBtn>
                    </>

                }
                {showMainPanel &&
                    <SuggestBtn onClick={() => { onSuggestBtn && onSuggestBtn("Our Current New Offers") }}>New Offers</SuggestBtn>
                }
                {!showMore &&
                    showMainPanel &&
                    <SuggestBtn onClick={() => { setShowMore(true) }}>Show More</SuggestBtn>}
                {
                    showMore &&
                    <Fragment>
                        <SuggestBtn onClick={() => { onSuggestBtn && onSuggestBtn("Facing Account Problem") }}>Schedule A Meeting</SuggestBtn>
                        <SuggestBtn onClick={() => { onSuggestBtn && onSuggestBtn("More About HotBite") }}>About Hot Bite</SuggestBtn>
                        <SuggestBtn onClick={() => { onSuggestBtn && onSuggestBtn("Show informations about Developer") }}>Who Developed HotBite?</SuggestBtn>
                    </Fragment>
                }
            </Stack>
        </Fragment>
    )
}

export default SuggestButtons