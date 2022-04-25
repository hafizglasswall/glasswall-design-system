import Drawer, { DrawerProps } from '@mui/material/Drawer/Drawer';
import List from '@mui/material/List/List';
import ListItem from '@mui/material/ListItem/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon/ListItemIcon';
import ListItemText from '@mui/material/ListItemText/ListItemText';

/**
 * Primary UI component for user interaction
 */
interface NewDrawerProps extends DrawerProps {
    background: string;
}
export const NewDrawer = (drawerProps: NewDrawerProps) => {
    return (
        <Drawer
            {...drawerProps}
        // PaperProps={{
        //     sx: {
        //         background: drawerProps.background
        //     }
        // }}
        />
    );
};


