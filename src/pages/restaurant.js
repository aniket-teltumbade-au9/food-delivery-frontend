import { Component } from "react"
import { withRouter } from "../components/helper/withRouter";
import RestaurantsByCategory from "../components/restaurants-by-category";

const data = {
    Pizza: [
        { image: require('../assets/nearby/Burgers_N_Pizza.png'), title: 'Burgers & Pizza' },
    ],
    Burger: [
        { image: require('../assets/nearby/Burgers_N_Pizza.png'), title: 'Burgers & Pizza' },
        { image: require('../assets/nearby/Royal_Sushi_House.png'), title: 'Royal Sushi House' },
        { image: require('../assets/nearby/Ninja_Sushi.png'), title: 'Ninja Sushi' },
        { image: require('../assets/nearby/Sushi_master.png'), title: 'Sushi master' },
        { image: require('../assets/nearby/Japanese_sushi.png'), title: 'Japanese sushi' }
    ],
    Sushi: [
        { image: require('../assets/nearby/Royal_Sushi_House.png'), title: 'Royal Sushi House' },
        { image: require('../assets/nearby/Ninja_Sushi.png'), title: 'Ninja Sushi' },
        { image: require('../assets/nearby/Sushi_master.png'), title: 'Sushi master' },
        { image: require('../assets/nearby/Japanese_sushi.png'), title: 'Japanese sushi' }

    ],
    Desert: [
        { image: require('../assets/nearby/Cream_Stone.png'), title: 'Cream Stone' },
        { image: require('../assets/nearby/Hearty_Treats.png'), title: 'Hearty Treats' },
    ],
    BBQ: [
        { image: require('../assets/nearby/Royal_Sushi_House.png'), title: 'Royal Sushi House' },
        { image: require('../assets/nearby/Ninja_Sushi.png'), title: 'Ninja Sushi' },
        { image: require('../assets/nearby/Sushi_master.png'), title: 'Sushi master' },
        { image: require('../assets/nearby/Japanese_sushi.png'), title: 'Japanese sushi' }
    ],
    Vegan: [
        { image: require('../assets/nearby/Shree_Muthahalli_Veg.jpg'), title: 'Shree Muthahalli Veg' },
        { image: require('../assets/nearby/Purnabrahma_Mahrashtrian_Restaurant.jpg'), title: 'Purnabrahma Mahrashtrian Restaurant' },
    ]
}

class RestaurantList extends Component {
    render() {
        console.log(this.props.params.cat);
        return (<RestaurantsByCategory list={data[this.props.params.cat]} />)
    }

}
export default withRouter(RestaurantList)