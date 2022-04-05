import React, { Component } from 'react'
import { Grid, Typography } from '@mui/material'
import RestauItem from './restau-item'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const data = {
    Pizza: [
        { image: require('../assets/nearby/Burgers_N_Pizza.png'), title: 'Burgers & Pizza' },
    ],
    Burger: [
        { image: require('../assets/nearby/Burgers_N_Pizza.png'), title: 'Burgers & Pizza' },
    ],
    Sushi: [
        { image: require('../assets/nearby/Royal_Sushi_House.png'), title: 'Royal Sushi House' },
        { image: require('../assets/nearby/Ninja_Sushi.png'), title: 'Ninja Sushi' },
        { image: require('../assets/nearby/Sushi_master.png'), title: 'Sushi master' },
        { image: require('../assets/nearby/Japanese_sushi.png'), title: 'Japanese sushi' }

    ],
    Deserts: [
        { image: require('../assets/nearby/Cream_Stone.png'), title: 'Cream Stone' },
        { image: require('../assets/nearby/Hearty_Treats.png'), title: 'Hearty Treats' },
    ],
    BBQ: [],
    Vegan: [
        { image: require('../assets/nearby/Shree_Muthahalli_Veg.jpg'), title: 'Shree Muthahalli Veg' },
        { image: require('../assets/nearby/Purnabrahma_Mahrashtrian_Restaurant.jpg'), title: 'Purnabrahma Mahrashtrian Restaurant' },
    ]
}

class Restaurants extends Component {
    render() {
        return (
            <>
                <Typography variant="h3" align="center">Nearby Restaurants</Typography>
                <Grid container justifyContent="center" alignItems="center" columnGap={2} rowGap={2} marginY="16px">
                    <TransitionGroup component={null}>
                        {
                            this.props.currentCat.map(el1 => data[el1].map(el => <CSSTransition timeout={5500} classNames={{
                                appear: 'my-appear',
                                appearActive: 'my-active-appear',
                                appearDone: 'my-done-appear',
                                enter: 'my-enter',
                                enterActive: 'my-active-enter',
                                enterDone: 'my-done-enter',
                                exit: 'my-exit',
                                exitActive: 'my-active-exit',
                                exitDone: 'my-done-exit',
                            }}
                                unmountOnExit><RestauItem {...el} /></CSSTransition>))
                        }
                    </TransitionGroup>
                </Grid>
            </>
        )
    }
}

export default Restaurants
