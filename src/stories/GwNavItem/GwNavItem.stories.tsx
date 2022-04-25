
import { DashboardTwoTone, Folder, Mail, Report, SecurityUpdateWarningTwoTone } from '@mui/icons-material';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { GwNavItem } from './GwNavItem';

export default {
    title: 'FiO/GwNavItem',
    component: GwNavItem,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} as ComponentMeta<typeof GwNavItem>;

const Template: ComponentStory<typeof GwNavItem> = (args) => {
    return <GwNavItem {...args} />
};
export const NavItemPrimary = Template.bind({});
NavItemPrimary.args = {
    name: 'Dashboard',
    Icon: DashboardTwoTone,
}

export const NavItemOnSelected = Template.bind({});
NavItemOnSelected.args = {
    ...NavItemPrimary.args,
    fontColor: 'white',
    iconColor: 'white',
    selected: true
}

export const NavItemOnNotSelected = Template.bind({});
NavItemOnNotSelected.args = {
    ...NavItemPrimary.args,
    fontColor: 'white',
    iconColor: 'white',
    selected: false
}