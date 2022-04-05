import { Box, Card, CardContent, CardMedia, List, ListItem, Typography } from '@mui/material'
import React, { Component } from 'react'


class RestaurantsByCategory extends Component {

    render() {
        console.log(this.props);
        return (
            <List>
                {
                    this.props.list.map(el => <ListItem sx={{ display: "flex", justifyContent: "center" }}>
                        <Card sx={{ display: 'flex', width: 800, justifyContent: "space-between", flexWrap: "wrap-reverse" }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h5">
                                        {el.title}
                                    </Typography>
                                </CardContent>

                            </Box>
                            <CardMedia
                                component="img"
                                sx={{ width: 400, maxWidth: "80%" }}
                                image={el.image}
                                alt="Live from space album cover"
                            />
                        </Card>
                    </ListItem>)
                }
            </List>
        )
    }
}
export default RestaurantsByCategory