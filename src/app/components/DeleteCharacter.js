import { Box, Button, Container, Paper, Typography } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function DeleteCharacter() {

    return (
        <Container maxWidth="lg">
            <Paper elevation={3} style={{ padding: '30px' }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        paddingTop: 8,
                        paddingBottom: 8,
                    }}
                >
                    <Typography variant="h2" component="h1" gutterBottom align="center"
                        sx={{

                            fontSize: '1.75rem',
                            gap: '10px',
                            marginTop: '30px'

                        }}
                    >
                        Character{/* {character.name}! */}
                    </Typography>
                    <Typography variant="h2" component="h1" gutterBottom align="center"
                        sx={{

                            fontSize: '1.75rem',
                            gap: '10px',
                            marginTop: '30px'

                        }}
                    >
                        Associated Scenes: 
                        {/* {scenes.length}! */}
                    </Typography>
                    <Typography variant="h5" component="h2" gutterBottom align="center"
                        sx={{

                            fontSize: '1.75rem',
                            gap: '10px',
                            marginTop: '30px'

                        }}
                    >
                        Are you sure you want to delete your character?
                    </Typography>
                    <Typography variant="h5" component="h5" gutterBottom align="center"
                        sx={{

                            fontSize: '1.15rem',

                        }}
                    >
                        Deleting a character will also delete stories associated with it
                    </Typography>
                    <Box
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '10px',
                            marginTop: '30px'
                        }}
                    >
                            <>
                            </>
                            <>
                                <Button variant="contained" color="primary" >Yes</Button>
                                <Button variant="contained" color="error" >No</Button>
                            </>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
}


