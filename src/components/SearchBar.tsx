import { Fragment, ChangeEvent, MouseEvent } from "react"
import { Box, Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

interface SearchBarProps {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onClose: (event: MouseEvent<HTMLDivElement>) => void;
    value: string | number | readonly string[];
    startTypingSearch: boolean;
    style: {
        primaryColor: string;
        iconColor: string;
    }
}
export function SearchBar({ onChange, onClose, startTypingSearch, value, style }: SearchBarProps) {

    return (
        <Fragment>
            <Box
                component="div"
                sx={{

                    width: { xs: "300px", md: "550px" },
                    overflow: "hidden",
                    height: "40px",
                    border: "2px solid",
                    borderColor: style.primaryColor,
                    borderRadius: "50px",
                    position: "relative",
                    padding: "0",
                    background: "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: 'flex-start',
                    cursor: "text",
                    color: style.iconColor,
                    transition: "all linear 250ms",
                }}
            >
                <Box component="div" display="flex" justifyContent="center" alignItems="center" bgcolor="transparent" height="100%">
                    <SearchIcon sx={{ cursor: "pointer", ":hover": { color: style.iconColor }, ml: 1, color: style.primaryColor, fontSize: { xs: "14px", md: "20px" }, width: "30px" }} />
                </Box>
                <form onSubmit={(e) => { e.preventDefault() }} style={{ width: "100%", height: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <input
                        autoComplete="off"
                        placeholder="Search Your Dishes"
                        style={{ border: "0", outline: "0", color: style.primaryColor, padding: "2px 5px", borderRadius: "50px", margin: "0", background: "transparent", width: "75%", height: "100%", fontSize: "16px" }}
                        id="searchbar"
                        name="search"
                        value={value}
                        onChange={onChange}
                    />
                    {startTypingSearch &&
                        <Box component="div" onClick={onClose} height="100%" display="flex" justifyContent="center" alignItems="center">
                            <ClearIcon sx={{ cursor: "pointer", ":hover": { color: 'black' }, fontSize: { xs: "16px", md: "20px" } }} />
                        </Box>
                    }
                    <Button type="button" variant="outlined" sx={{ width: { xs: "10%", md: "20%" }, fontSize: { xs: "13px", md: "16px" }, borderBottomRightRadius: "50px", color: style.primaryColor, height: "100%", ":hover": { background: style.primaryColor, color: "white", border: "none", boxShadow: "none" }, border: "none", borderTopRightRadius: "50px", ":active": { boxShadow: "none" } }} >
                        search
                    </Button>

                </form>

            </Box >
        </Fragment >
    )
}

export default SearchBar