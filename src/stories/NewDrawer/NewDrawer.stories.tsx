import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { GwDrawer } from '../GwDrawer/GwDrawer';
import List from '@mui/material/List/List';
import ListItem from '@mui/material/ListItem/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon/ListItemIcon';
import { ListItemText } from '@mui/material';
import { Mail, MoveToInbox } from '@mui/icons-material';
import { NewDrawer } from './NewDrawer';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Test/New Drawer',
  component: NewDrawer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NewDrawer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NewDrawer> = (args) => {
  return (
    <NewDrawer {...args}>
      Hello world
    </NewDrawer>
  )
};
// 08001522888



export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: 'permanent'
};

const TemplateDrawerWithChildren: ComponentStory<typeof NewDrawer> = (args) => {
  return (
    <NewDrawer {...args}>
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </NewDrawer>
  )
};
export const DrawerWithChildrens = TemplateDrawerWithChildren.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DrawerWithChildrens.args = {
  variant: 'permanent',
  open: false,
  // background: "linear-gradient(180deg, #11497C 0%, #1F8C8C 100%)",
  PaperProps: {
    sx: {
      background: 'red'
    }
  }
};

export const GwPermanentVisible = Template.bind({});
GwPermanentVisible.args = {
  variant: 'temporary',
  open: true,
  children: (
    <List>
      {['All mail', 'Trash', 'Spam'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>
            {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  )
};

export const GwTempVisible = Template.bind({});
GwTempVisible.args = {
  variant: 'temporary',
  open: true
};

//Drawer with logo

// Drawer with logo and nav items