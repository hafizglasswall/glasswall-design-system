import { BoltRounded, SvgIconComponent } from "@mui/icons-material";
import { Button, ListItem, ListItemButton, ListItemIcon, ListItemProps, ListItemText, makeStyles, styled, SvgIcon } from "@mui/material"

const GwListItemButton = styled(ListItemButton)(({
    borderRadius: '8px',
    '&.Mui-selected': {
        backgroundColor: '#11182733',
    },
    marginTop: '1em',
    marginBottom: '1em',
    marginLeft: '2em',
    marginRight: '2em'
}));

const GwListItemText = styled((ListItemText))({
    color: 'white'
});

const GwListItemIcon = styled((ListItemIcon))({
    color: 'white',
    border: '1px solid transparent',
    borderRadius: '50%',
    padding: '8px',
    minWidth: '0',
    marginRight: '1em'
})
interface GwNavItemProp extends ListItemProps {
    name: string;
    iconColor?: string;
    fontColor?: string;
    Icon: React.ElementType;
    handleNavigation: any;
}
const SIDE_NAV_ICON_BG_COLOR = "linear-gradient(90deg, #00B372 0%, #2BA9D6 100%)";
export const FioNavItem = ({ handleNavigation, iconColor, name, Icon, fontColor, selected }: GwNavItemProp) => {
    return (
        <GwListItemButton selected={selected} onClick={handleNavigation}>
            <GwListItemIcon sx={{ background: selected ? SIDE_NAV_ICON_BG_COLOR : "transparent" }}>
                <Icon fontSize={'large'} sx={selected ? { color: 'white' } : {}} />
            </GwListItemIcon>
            <GwListItemText primary={name} primaryTypographyProps={selected ? { fontWeight: 'bold' } : {}} />
        </GwListItemButton>
    )
}