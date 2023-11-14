import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from "@mui/material/Typography"

interface RangeProps {
    max: number;
    width: string | number;
    rangeValue: number | number[];
    onChange: (event: Event,
        newValue: number | number[],
        activeThumb: number) => void;
}

export default function Range({ max, width, onChange, rangeValue }: RangeProps) {



    return (
        <Box sx={{ width: width }}>
            <Slider
                sx={{ color: "rgb(209, 77, 114)" }} max={max}
                min={0}
                getAriaLabel={() => 'Price Range'}
                value={rangeValue}
                onChange={onChange}
                valueLabelDisplay="auto"
                disableSwap
            />
            <Typography>From: <span style={{ color: 'rgb(209, 77, 114)' }}>${typeof rangeValue == "object" && rangeValue[0]}</span> to:  <span style={{ color: 'rgb(209, 77, 114)' }}>${typeof rangeValue == "object" && rangeValue[1]}</span></Typography>
        </Box>
    );
}
