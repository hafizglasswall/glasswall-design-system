import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { GwDrawer } from './GwDrawer';
import List from '@mui/material/List/List';
import ListItem from '@mui/material/ListItem/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon/ListItemIcon';
import { ListItemText } from '@mui/material';
import { Mail, MoveToInbox } from '@mui/icons-material';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/GwDrawer',
  component: GwDrawer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof GwDrawer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof GwDrawer> = (args) => {
  return (
    <GwDrawer {...args}>
      Hello world
    </GwDrawer>
  )
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  drawerProps: {
    variant: 'permanent'
  }
};

export const GwPermanentVisible = Template.bind({});
GwPermanentVisible.args = {
  drawerProps: {
    variant: 'temporary',
    open: true
  },
  customProps: {
    backgroundColor: 'red'
  }
};

export const GwTempVisible = Template.bind({});
GwTempVisible.args = {
  drawerProps: {
    variant: 'temporary'
  },
  customProps: {
    backgroundColor: 'green'
  }
};

//Drawer with logo

// Drawer with logo and nav items