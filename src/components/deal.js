import React, { Component } from 'react'
import { Grid, Box, Typography } from '@mui/material'

class DealItem extends Component {
    render() {
        return (
            <Grid
                item
                sm={5.7}
                style={{ background: this.props.background, borderRadius: '16px' }}
                container
            >
                <Grid item sm={6}>
                    <img src={this.props.image} style={{ maxWidth: "100%" }} alt={this.props.title} />
                </Grid>
                <Grid item sm={6}>
                    <Box padding="20px">
                        <Box>
                            {this.props.title}
                            <Typography variant="h3"> {this.props.offer}</Typography>
                        </Box>
                        <Box>
                            {this.props.category}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        )
    }
}

export default DealItem
