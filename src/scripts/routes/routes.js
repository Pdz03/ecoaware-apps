import Home from '../views/pages/home';
import Welcome from '../views/pages/welcome';
import Login from '../views/pages/login';
import Register from '../views/pages/register';
import Dashboard from '../views/pages/dashboard';
import ourstory from '../views/pages/tentang-kami';
import kontak from '../views/pages/kontak';
import detail from '../views/pages/detail';
import Profil from '../views/pages/profil';
import inputArtikel from '../views/pages/input-artikel';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/welcome': Welcome,
  '/login': Login,
  '/register': Register,
  '/dashboard': Dashboard,
  '/ourstory': ourstory,
  '/kontak': kontak,
  '/detail/:id': detail,
  '/profil': Profil,
  '/input-artikel/:id': inputArtikel,
};

export default routes;
