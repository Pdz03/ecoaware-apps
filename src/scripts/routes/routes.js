import Home from '../views/pages/home';
import Welcome from '../views/pages/welcome';
import Login from '../views/pages/login';
import Register from '../views/pages/register';
import Dashboard from '../views/pages/dashboard';
import ourstory from '../views/pages/tentang-kami';
import kontak from '../views/pages/kontak';
import detail from '../views/pages/detail';
import inputArtikel from '../views/pages/input-artikel';
import kelolaArtikel from '../views/pages/kelola-artikel';

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
  '/input-artikel/:id': inputArtikel,
  '/kelola-artikel': kelolaArtikel,
};

export default routes;
