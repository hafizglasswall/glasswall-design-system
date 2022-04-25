
import { DashboardTwoTone, Folder, Mail, Report, SecurityUpdateWarningTwoTone } from '@mui/icons-material';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { GwNavItems } from './GwNavItems';

export default {
    title: 'FiO/GwNavItems',
    component: GwNavItems,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} as ComponentMeta<typeof GwNavItems>;

const Template: ComponentStory<typeof GwNavItems> = (args) => {
    return <GwNavItems {...args} />
};
export const NavItemWithIcon = Template.bind({});
NavItemWithIcon.args = {
    items: [
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
} 