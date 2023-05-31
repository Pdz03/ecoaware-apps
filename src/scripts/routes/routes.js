import Home from '../views/pages/home';
import Welcome from '../views/pages/welcome';
import Login from '../views/pages/login';
import Register from '../views/pages/register';
import Dashboard from '../views/pages/dashboard';
import ourstory from '../views/pages/tentang-kami';
// import test from '../config/proses-login';
// import Detail from '../views/pages/detail';
// import Favorit from '../views/pages/favorit';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/welcome': Welcome,
  '/login': Login,
  '/register': Register,
  '/dashboard': Dashboard,
  '/ourstory': ourstory,
  // '/loginAuth': test,
  // '/detail/:id': Detail,
  // '/favorit': Favorit,
};

export default routes;
