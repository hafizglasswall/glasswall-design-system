import { AbcOutlined, DashboardTwoTone, Folder, Info, Mail, Report, SecurityUpdateWarningTwoTone } from "@mui/icons-material";
import Drawer from "@mui/material/Drawer/Drawer"
import List from '@mui/material/List/List';
import ListItem from '@mui/material/ListItem/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon/ListItemIcon';
import ListItemText from '@mui/material/ListItemText/ListItemText';
import { Box, styled } from "@mui/system";
import GlasswallLogo from "../../Icons/GlasswallLogo";
import { DashboardIcon } from "../../Icons/DashboardIcon";
import { FioNavItem } from "../FioNavItem/FioNavItem";
import { GwNavItems } from "../GwNavItems/GwNavItems";
import { CleanFilesIcon } from "../../Icons/CleanFilesIcon";
import { ReportIcon } from "../../Icons/ReportIcon";
import { GetHelpIcon } from "../../Icons/GetHelpIcon";

interface NavItems {
    name: string;
    Icon: React.ElementType;
}
const mainNav: NavItems[] = [
    {
        name: 'Dashboard',
        Icon: DashboardIcon
    },
    {
        name: 'Clean Files',
        Icon: CleanFilesIcon
    },
    {
        name: 'View Reports',
        Icon: ReportIcon
    },
    {
        name: 'Get Help',
        Icon: GetHelpIcon
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

const BottomNavList = styled(List)({
    position: 'absolute',
    bottom: 0,
    width: '100%'
})
export const Layout = () => {
    return (
        <FioDrawer variant="permanent">
            <FioLogoBox>
                <GlasswallLogo width={'200'} />
            </FioLogoBox>
            <List>
                {
                    mainNav.map(({ name, Icon }, index) => {
                        return <FioNavItem
                            key={name}
                            name={name}
                            Icon={Icon}
                            selected={true}
                            handleNavigation={() => { console.log('handle navigation') }}
                        />
                    })
                }
            </List>
            <BottomNavList>
                {
                    bottomNav.map(({ name, Icon }, index) => {
                        return <FioNavItem
                            key={name}
                            name={name}
                            Icon={Icon}
                            selected={index === 1}
                            handleNavigation={() => { console.log('handle navigation') }}
                        />
                    })
                }
            </BottomNavList>
        </FioDrawer>
    )
}
const bottomNav = [
    {
        name: 'Settings',
        Icon: Report
    },
    {
        name: 'About',
        Icon: Info
    }
]