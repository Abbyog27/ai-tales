import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AccountCircle } from '@mui/icons-material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { AutoStories } from '@mui/icons-material';
import ExploreIcon from '@mui/icons-material/Explore';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton href="/characters/new">
      <ListItemIcon>
        <AddCircleIcon />
      </ListItemIcon>
      <ListItemText primary="Add Character" />
    </ListItemButton>
    <ListItemButton href="/">
      <ListItemIcon>
        <InsertEmoticonIcon />
      </ListItemIcon>
      <ListItemText primary="Characters" />
    </ListItemButton>
    <ListItemButton href="/users/profile">
      <ListItemIcon>
        <AccountCircle />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItemButton>
    <ListItemButton href="/scenes/user">
      <ListItemIcon>
        <AutoStories />
      </ListItemIcon>
      <ListItemText primary="My Scenes" />
    </ListItemButton>
    <ListItemButton href="/scenes/explore">
      <ListItemIcon>
        <ExploreIcon />
      </ListItemIcon>
      <ListItemText primary="Explore" />
    </ListItemButton>
  </React.Fragment>
);
