import { BoltRounded, SvgIconComponent } from "@mui/icons-material";
import { Button, ListItem, ListItemButton, ListItemIcon, ListItemProps, ListItemText, makeStyles, styled } from "@mui/material"

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
    Icon: SvgIconComponent;
    handleNavigation: any;
}
export const GwNavItem = ({ handleNavigation, iconColor, name, Icon, fontColor, selected }: GwNavItemProp) => {
    return (
        <GwListItemButton selected={selected} onClick={handleNavigation}>
            <GwListItemIcon sx={{
                background: selected ? "linear-gradient(90deg, #00B372 0%, #2BA9D6 100%)" : "transparent",
            }}>
                <Icon />
            </GwListItemIcon>
            <GwListItemText primary={name} primaryTypographyProps={selected ? { fontWeight: 'bold' } : {}} />
        </GwListItemButton>
    )
}

const FioNavButton = styled((Button))({
    color: 'white',

})

export const _GwNavItem = ({ handleNavigation, iconColor, name, Icon, fontColor, selected }: GwNavItemProp) => {
    return (
        <FioNavButton
            onClick={handleNavigation}
            startIcon={<Icon />}>
            {name}
        </FioNavButton>
    )
}

// "linear-gradient(180deg, #11497C 0%, #1F8C8C 100%)"