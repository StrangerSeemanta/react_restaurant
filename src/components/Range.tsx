import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from "@mui/material/Typography"

interface RangeProps {
    minGap: number;
    max: number;
    min: number;
    startValue: number;
    width: string | number;

}

export default function Range({ startValue, minGap, min, max, width }: RangeProps) {
    const minDistance = minGap;

    const [rangeValue, setRangeValue] = React.useState<number[]>([startValue, startValue + minGap]);
    const handleChange = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (event.target) {
            if (!Array.isArray(newValue)) {
                return;
            }

            if (activeThumb === 0) {
                setRangeValue([Math.min(newValue[0], rangeValue[1] - minDistance), rangeValue[1]]);
            } else {
                setRangeValue([rangeValue[0], Math.max(newValue[1], rangeValue[0] + minDistance)]);
            }
        }
    };

    return (
        <Box sx={{ width: width }}>
            <Slider
                sx={{ color: "rgb(209, 77, 114)" }} max={max}
                min={min}
                getAriaLabel={() => 'Price Range'}
                value={rangeValue}
                onChange={handleChange}
                valueLabelDisplay="auto"
                disableSwap
            />
            <Typography>From: <span style={{ color: 'rgb(209, 77, 114)' }}>${rangeValue[0]}</span> to:  <span style={{ color: 'rgb(209, 77, 114)' }}>${rangeValue[1]}</span></Typography>
        </Box>
    );
}
