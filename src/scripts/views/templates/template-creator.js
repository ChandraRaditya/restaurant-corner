import CONFIG from '../../globals/config'

const createRestaurantDetail = (restaurant) => `
        <div id="restaurant-detail-image" tabindex="0">
            <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_MEDIUM}/${restaurant.pictureId}" alt="restaurant ${restaurant.name} restaurant image">
            <div class="image-filter"></div>
            <div class="restaurant-detail-address" tabindex="0">
                <h2>${restaurant.name}</h2>
                <p>${restaurant.city}</p>
                <p>${restaurant.address}</p>
                <div class="star-review">
                    <span>Rating ${restaurant.rating}</span>
                    <i class="fas fa-star"></i>
                </div>
            </div>
        </div>
        <div id="restaurant-detail-content" tabindex="0">
            <div class="restaurant-detail-info">
            ${restaurant.categories.map((item) =>
                `
                    <div class="restaurant-detail-category" tabindex="0">
                        <p>${item.name}</p>
                    </div>`
                ).join('')
            }
            </div>
            <div class="restaurant-detail-description" tabindex="0">
                <h2>DESCRIPTION</h2>
                <p>${restaurant.description}</P>
            </div>
            <div class="restaurant-detail-menu" tabindex="0">
                <h2>MENU</h2>
                <div class="restaurant-detail-menu-box">
                    <div class="restaurant-detail-menu-foods">
                        <h3>Foods</h3>
                        <ul>
                            ${restaurant.menus.foods.map((item) => `<li>${item.name}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="restaurant-detail-menu-drinks">
                        <h3>Drinks</h3>
                        <ul>
                            ${restaurant.menus.drinks.map((item) => `<li>${item.name}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
            <div class="restaurant-detail-review" tabindex="0">
                <h2>REVIEW</h2>
                <div class="restaurant-detail-review-content">
                ${restaurant.customerReviews.map((item) =>
                    `
                        <div class="restaurant-detail-review-content-list">
                            <div class="restaurant-detail-review-username">
                                <img src="./images/user.png" alt="user image">
                                <p class="name">${item.name}</p>
                                <div class="date">
                                    <p>${item.date}</p>
                                </div>
                            </div>
                            <div class="restaurant-detail-review-username-review">
                                <p>${item.review}</p>
                            </div>
                        </div>`
                    ).join('')
                }
                </div>
            </div>
        </div>
`

const createRestaurantList = (restaurant) => `
      <a href="./#/detail/${restaurant.id}">
        <article class="restraurant-box">
            <div class="image"></div>
            <div class="image">
                <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_SMALL}/${restaurant.pictureId}" alt="${restaurant.name} restaurant image">
            </div>
            <div class="restaurant-city">
                <span>${restaurant.city}</span>
            </div>
            <div class="restaurant-description">
                <p>RATING: ${restaurant.rating}</p>
                <h2>${restaurant.name}</h2>
                <p>${restaurant.description}</p>
            </div>
        </article>
      </a>
  `

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`

export {
  createRestaurantList,
  createRestaurantDetail,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate
}
