import Drawer, { DrawerProps } from '@mui/material/Drawer/Drawer';
import List from '@mui/material/List/List';
import ListItem from '@mui/material/ListItem/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon/ListItemIcon';
import ListItemText from '@mui/material/ListItemText/ListItemText';
import React from 'react';

interface DrawerCustomProps {
  backgroundColor: string;
}
export interface GwDrawerProps {
  customProps: DrawerCustomProps;
  drawerProps: DrawerProps;
}

/**
 * Primary UI component for user interaction
 */
export const GwDrawer = ({ customProps, drawerProps }: GwDrawerProps) => {

  return (
    <Drawer {...drawerProps}>
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
    </Drawer>
  );
};


