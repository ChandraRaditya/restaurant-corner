const assert = require('assert')

Feature('Liking Restaurant')

Before(({ I }) => {
  I.amOnPage('/#/favorite')
})

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('#explore-section-content')
  I.see('Upss No Favorite Restaurant liked Yet', '#explore-section-content h2')
})

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Upss No Favorite Restaurant liked Yet', '#explore-section-content h2')

  I.amOnPage('/')

  I.seeElement('.restaurant-description h2')

  const firstRestaurant = locate('.restaurant-description h2').first()
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant)
  I.click(firstRestaurant)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.seeElement('#explore-section-content')
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-description h2')

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle)
})

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Upss No Favorite Restaurant liked Yet', '#explore-section-content h2')

  I.amOnPage('/')

  I.seeElement('.restaurant-description h2')

  const firstRestaurant = locate('.restaurant-description h2').first()
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant)
  I.click(firstRestaurant)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.seeElement('#explore-section-content')
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-description h2')

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle)

  I.seeElement('#restaurant-content')

  const favoriteFirstRestaurant = locate('.restaurant-description h2').first()
  // const favoriteFirstRestaurantTitle = await I.grabTextFrom(favoriteFirstRestaurant);
  I.click(favoriteFirstRestaurant)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.seeElement('#explore-section-content')
})
