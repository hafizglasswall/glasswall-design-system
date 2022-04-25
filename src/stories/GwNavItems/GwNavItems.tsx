import { Mail, SvgIconComponent } from "@mui/icons-material";
import Drawer from "@mui/material/Drawer/Drawer"
import List, { ListProps } from '@mui/material/List/List';
import ListItem from '@mui/material/ListItem/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon/ListItemIcon';
import ListItemText from '@mui/material/ListItemText/ListItemText';
interface Items {
    name: string;
    Icon: SvgIconComponent;
}
interface GwNavItems {
    items: Items[];
    fontColor?: string;
    iconColor: string;
}
export const GwNavItems = ({ items, fontColor, iconColor }: GwNavItems) => {
    return (
        <List sx={{ color: fontColor ?? 'white' }}>
            {items.map(({ name, Icon }) => (
                <ListItem >
                    <ListItemIcon>
                        <Icon sx={{ color: iconColor }} />
                    </ListItemIcon>
                    <ListItemText primary={name} />
                </ListItem>
            ))}
        </List>
    )
}