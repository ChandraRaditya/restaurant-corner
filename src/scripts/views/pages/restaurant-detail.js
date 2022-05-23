import UrlParser from '../../routes/url-parser'
import RestaurantData from '../../data/restaurant-data'
import { createRestaurantDetail } from '../templates/template-creator'
import LikeButtonPresenter from '../../utils/like-button-presenter'

const Detail = {
  async render () {
    return `
    <div id="restaurant-content">
      <div id="restaurant-detail-box">
      <div id="likeButtonContainer"></div>
    </div>
    
    `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurant = await RestaurantData.RestauarantDetail(url.id)
    const restaurantDetailContainer = document.querySelector('#restaurant-detail-box')
    restaurantDetailContainer.innerHTML += createRestaurantDetail(restaurant)

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        address: restaurant.address,
        city: restaurant.city,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
        description: restaurant.description
      }
    })
  }
}

export default Detail
