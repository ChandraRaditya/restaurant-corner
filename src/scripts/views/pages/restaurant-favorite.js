import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb'
import { createRestaurantList } from '../templates/template-creator'

const Favorite = {
  async render () {
    return `
    <div id="restaurant-content">
      <div id="explore-section-title">
        <h2>FAVORITE RESTAURANT</h2>
      </div>
      <div id="explore-section-content">
        <h2>Upss No Favorite Restaurant liked Yet</h2>
      </div>
    </div>
          `
  },

  async afterRender () {
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurant()
    const restaurantContainer = document.querySelector('#explore-section-content')
    if (restaurant.length !== 0) {
      restaurantContainer.innerHTML = ''
    }
    restaurant.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantList(restaurant)
    })
  }
}

export default Favorite
