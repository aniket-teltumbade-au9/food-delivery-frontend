import React, { Component } from 'react'
import Categories from '../components/categories'
import { Deals } from '../components/deals'
import Restaurants from '../components/restaurants';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCat: ["Pizza"]
        }
    }
    handleCategory = (val) => {
        if (this.state.currentCat.includes(val)) {
            this.setState({ currentCat: this.state.currentCat.filter(el => el !== val) })
        }
        else {
            this.setState({ currentCat: [...this.state.currentCat, val] })
        }
    }
    render() {
        return (
            <>
                <Deals />
                <Categories handleCategory={this.handleCategory} currentCat={this.state.currentCat} />
                <Restaurants currentCat={this.state.currentCat} />
            </>
        )
    }
}

export default HomePage
