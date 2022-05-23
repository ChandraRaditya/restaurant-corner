import RestaurantData from '../../data/restaurant-data'
import { createRestaurantList } from '../templates/template-creator'

const Home = {
  async render () {
    return `
    <div id="hero-element" title="contain image Hero Element">
        <div class="hero-content">
             <H1>EXPLORE YOUR NEW FAVOURITE RESTAURANT</H1>
             <p>Discover hiddem gem was never this easy</p>
        </div>
    </div>
    <div id="restaurant-content">
      <div id="explore-section-title">
          <h2>RESTAURANT LIST</h2>
      </div>
    </div>
    <div id="explore-section-content">
    </div>
      `
  },

  async afterRender () {
    const restaurant = await RestaurantData.RestaurantList()
    const restaurantContainer = document.querySelector('#explore-section-content')
    restaurant.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantList(restaurant)
    })
  }
}

export default Home
