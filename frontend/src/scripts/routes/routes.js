import HomepageView from '../views/HomepageView.jsx';
import LoginView from '../views/LoginView.jsx';
import RegisterView from '../views/RegisterView.jsx';
import EducationView from '../views/EducationView.jsx';
import AboutView from '../views/AboutView.jsx';
import HistoryView from '../views/HistoryView.jsx';
import RankingView from '../views/RankingView.jsx';
import AccountView from '../views/AccountView.jsx';
import LocationView from '../views/LocationView.jsx';
import DonationView from '../views/DonationView.jsx';
import ScanView from '../views/ScanView.jsx';

const routes = {
  '/': HomepageView,
  '/login': LoginView,
  '/register': RegisterView,
  '/education': EducationView,
  '/about': AboutView,
  '/history': HistoryView,
  '/ranking': RankingView,
  '/account': AccountView,
  '/location': LocationView,
  '/donation': DonationView,
  '/scan': ScanView,
};

export default routes;
