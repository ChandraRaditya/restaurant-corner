import Home from '../views/pages/home'
import Favorite from '../views/pages/restaurant-favorite'
import Detail from '../views/pages/restaurant-detail'

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/favorite': Favorite,
  '/detail/:id': Detail
}

export default routes
