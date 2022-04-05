import React, { Component } from 'react'
import { Grid, Box, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

class DealItem extends Component {
    render() {
        return (
            <Link to={`category/${this.props.category}`} variant="text"
                style={{
                    flexGrow: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    textDecoration: "none"
                }}
            >
                <Grid
                    item
                    style={{ background: this.props.background, borderRadius: '16px' }}
                    container>

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
                                {this.props.category_slug}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Link>
        )
    }
}

export default DealItem
