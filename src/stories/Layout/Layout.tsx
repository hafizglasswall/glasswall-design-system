import { DashboardTwoTone, Folder, Mail, Report, SecurityUpdateWarningTwoTone } from "@mui/icons-material";
import Drawer from "@mui/material/Drawer/Drawer"
import List from '@mui/material/List/List';
import ListItem from '@mui/material/ListItem/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon/ListItemIcon';
import ListItemText from '@mui/material/ListItemText/ListItemText';
import { GwNavItem } from "../GwNavItem/GwNavItem";
import { GwNavItems } from "../GwNavItems/GwNavItems";

const data = [
    {
        name: 'Dashboard',
        Icon: DashboardTwoTone
    },
    {
        name: 'Clean Files',
        Icon: SecurityUpdateWarningTwoTone
    },
    {
        name: 'View Reports',
        Icon: Report
    },
    {
        name: 'View Folders',
        Icon: Folder
    }
]

export const Layout = () => {
    return (
        <Drawer
            variant="permanent"
            PaperProps={{ sx: { background: 'linear-gradient(180deg, #11497C 0%, #1F8C8C 100%)' } }}>
            <List>
                {
                    data.map(({ name, Icon }, index) => {
                        return <GwNavItem key={name} name={name} Icon={Icon} selected={index === 1} handleNavigation={() => { }} />
                    })
                }
            </List>
        </Drawer>
    )
}