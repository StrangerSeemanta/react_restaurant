import { Fragment, useState, ReactNode } from 'react'
import { List, ListSubheader, ListItemButton, ListItemIcon, ListItemText, Collapse } from "@mui/material"
import { ExpandLess, ExpandMore, } from "@mui/icons-material"
interface Props {
    LiHeading?: string;
    GroupName?: string;
    Icon?: ReactNode;
    children: ReactNode | string;
}
interface ListButtonProps {
    Icon?: ReactNode;
    children: ReactNode | string;
}
export function ListButton({ Icon, children, }: ListButtonProps) {
    return (
        <ListItemButton>
            {Icon &&
                <ListItemIcon>
                    {Icon}
                </ListItemIcon>
            }
            <ListItemText >
                {children}
            </ListItemText>
        </ListItemButton>
    )
}

export default function ListGroup({ GroupName, Icon, children, LiHeading }: Props) {
    const [isExpanded, setExpanded] = useState(false);

    return (
        <Fragment>
            <List component="nav"
                aria-labelledby={LiHeading?.replace(" ", "-") + "-subheader"}
                subheader={
                    <ListSubheader component="div" id={LiHeading?.replace(" ", "-") + "-subheader"}>
                        {LiHeading}
                    </ListSubheader>
                }>
                <ListItemButton onClick={() => { setExpanded(!isExpanded) }}>
                    {Icon &&
                        <ListItemIcon>
                            {Icon}
                        </ListItemIcon>
                    }
                    <ListItemText>
                        {GroupName}
                    </ListItemText>
                    {isExpanded ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={isExpanded}>
                    <List component="div" sx={{ pl: 2, }} disablePadding>
                        {children}
                    </List>
                </Collapse>
            </List>

        </Fragment>
    )
}
