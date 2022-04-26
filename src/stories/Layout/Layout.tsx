import { DashboardTwoTone, Folder, Mail, Report, SecurityUpdateWarningTwoTone } from "@mui/icons-material";
import Drawer from "@mui/material/Drawer/Drawer"
import List from '@mui/material/List/List';
import ListItem from '@mui/material/ListItem/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon/ListItemIcon';
import ListItemText from '@mui/material/ListItemText/ListItemText';
import { Box, styled } from "@mui/system";
import GlasswallLogo from "../../Icons/GlasswallLogo";
import { FioNavItem } from "../FioNavItem/FioNavItem";
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
const FioLogoBox = styled(Box)({
    margin: '4em'
})
const FioDrawer = styled(Drawer)({
    '.MuiPaper-root': {
        background: 'linear-gradient(180deg, #11497C 0%, #1F8C8C 100%)'
    }
})
export const Layout = () => {
    return (
        <FioDrawer variant="permanent">
            <FioLogoBox>
                <GlasswallLogo />
            </FioLogoBox>
            <List>
                {
                    data.map(({ name, Icon }, index) => {
                        return <FioNavItem
                            key={name}
                            name={name}
                            Icon={Icon}
                            selected={index === 1}
                            handleNavigation={() => { console.log('handle navigation') }}
                        />
                    })
                }
            </List>
        </FioDrawer>
    )
}