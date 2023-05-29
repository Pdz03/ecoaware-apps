import Home from '../views/pages/home';
import Login from '../views/pages/login';
import Register from '../views/pages/register';
import Dashboard from '../views/pages/dashboard';
import ourstory from '../views/pages/tentang-kami';
// import Detail from '../views/pages/detail';
// import Favorit from '../views/pages/favorit';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/login': Login,
  '/register': Register,
  '/dashboard': Dashboard,
  '/ourstory': ourstory,
  // '/detail/:id': Detail,
  // '/favorit': Favorit,
};

export default routes;
