import { Grid } from '@mui/material'
import React, { Component } from 'react'
import CategoryItem from './category-item'

const data = [
    { title: "Pizza", image: require("../assets/categories/pizza.png") },
    { title: "Burger", image: require("../assets/categories/burger.png") },
    { title: "Deserts", image: require("../assets/categories/desrts.png") },
    { title: "Sushi", image: require("../assets/categories/sushi.png") },
    { title: "BBQ", image: require("../assets/categories/bbq.png") },
    { title: "Vegan", image: require("../assets/categories/vegan.png") },
]

class Categories extends Component {
    render() {
        return (

            <Grid container columnGap={2} rowGap={2} justifyContent="center" marginY="16px">
                {data.map(el => <CategoryItem {...el} active={this.props.currentCat.includes(el.title) ? true : false} handleCategory={this.props.handleCategory} />)}
            </Grid >
        )
    }
}

export default Categories
