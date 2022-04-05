import { Card, CardHeader, CardMedia } from '@mui/material';
import React, { Component } from 'react';

class RestauItem extends Component {
    render() {
        return (
            <Card sx={{ maxWidth: "100vw" }}>
                <CardMedia
                    component="img"
                    height="194"
                    image={this.props.image}
                    alt="Paella dish"
                />
                <CardHeader
                    title={this.props.title}
                />
            </Card>
        );
    }
}

export default RestauItem;
