import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import makeStyles from '@mui/material';
import { ThemeContext } from '@emotion/react';


export default function UserProfile() {

  return (
    <Card style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <CardContent style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <Typography variant="h5" component="h2">
          Username
        </Typography>
        <Typography color="textSecondary">
          user@email.com
        </Typography>
        <Typography variant="body2" component="p">
          Characters Created: 8
        </Typography>
        <Typography variant="body2" component="p">
          Scenes Created: 8
        </Typography>
        <Box mt={2}>
          <Button size="small" color="primary" variant="contained">
            Edit
          </Button>
          <Button size="small" color="warning" variant="contained">
            Delete
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
