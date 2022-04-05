import { Button, Grid, Typography } from '@mui/material'
import React, { Component } from 'react'

class CategoryItem extends Component {
    render() {
        return (
            <Grid item
                xs={3.5}
                md={1.82}
                display="flex"
            >
                <Button variant="text"
                    onClick={() => this.props.handleCategory(this.props.title)}
                    style={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        border: this.props.active ? "2px solid #4E60FF" : "1px solid #EDEEF2"
                    }}
                >
                    <Grid item>
                        <img src={this.props.image} alt={this.props.title} />
                    </Grid>
                    <Grid item>

                        <Typography variant="h6">
                            {this.props.title}
                        </Typography>
                    </Grid>
                </Button>
            </Grid>
        )
    }
}

export default CategoryItem
