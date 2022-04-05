import { List, ListItem, ListItemText } from '@mui/material';
import React, { Component } from 'react';

const data = {
    "Burger": [
        "Lentil and Mushroom Burger.",
        "Stuffed Bean Burger.",
        "Lamb Burger with Radish Slaw.",
        "Potato Corn Burger.",
        "Supreme Veggie Burger.",
        "Butter Chicken Twin Burgers.",
        "Rajma Patty Burger.",
        "Pizza Burger.",
    ],
    "Pizza": [
        "Thin-crust pizza – A type of pizza which has a thin, crispy crust.",
        "Thick crust pizza – A pizza with a thick crust.",
        "Pan pizza – A pizza type with a thicker crust than any other, with a wide variety of toppings.",
    ],
    "Deserts": [
        "Apple Pie",
        "Almond Malai Kulfi",
        "Lemon Tart",
        "Pistachio Phirni",
        "Fudgy Chewy Brownies",
        "Low Fat Tiramisu",
        "Coconut Kheer",
        "Chocolate Coffee Truffle."
    ],
    "Sushi": [
        "Nigiri",
        "Sashimi",
        "Chirashi",
        "Oshizushi",
        "Temaki",
        "Uramaki",
    ],
    "BBQ": [
        "Weber Master",
        "Weber Genesis",
        "Char-Broil ",
        "Everdure ",
        "Kamado Joe ",
        "Traeger ",
    ],
    "Vegan": [
        "Ethical",
        "Health",
        "Environmental",
        "REligious"
    ]

}

class Catmenus extends Component {
    render() {
        return (
            <List>
                {data[this.props.currentCat].map(el => <ListItem>
                    <ListItemText primary={el}></ListItemText>
                </ListItem>)}
            </List>
        );
    }
}

export default Catmenus;
