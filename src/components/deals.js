import React from 'react'
import { Grid } from '@mui/material'
import Ibg from '../assets/icecreame.png'
import Bbg from '../assets/burger.png'
import DealItem from './deal'
const data = [
    {
        title: "All Deserts",
        image: Ibg,
        offer: "20% off",
        category_slug: "Deserty",
        background: "#F3F4FF",
        category: "Desert"
    },
    {
        title: "Big Burger",
        image: Bbg,
        offer: "50% off",
        category_slug: "Foodies",
        background: "#FFF3ED",
        category: "Burger"
    }
]
export class Deals extends React.Component {

    render() {
        return (

            <Grid container justifyContent="center" columnGap={2} marginY="16px">
                {
                    data.map(el => <DealItem {...el} />)
                }
            </Grid>
        )
    }
}