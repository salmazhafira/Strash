import HomepageView from '../views/HomepageView.jsx';
import LoginView from '../views/LoginView.jsx';
import RegisterView from '../views/RegisterView.jsx';
import EducationView from '../views/EducationView.jsx';
import AboutView from '../views/AboutView.jsx';
import HistoryView from '../views/HistoryView.jsx';
import RankingView from '../views/RankingView.jsx';

const routes = {
  '/': HomepageView,
  '/login': LoginView,
  '/register': RegisterView,
  '/education': EducationView,
  '/about': AboutView,
  '/history': HistoryView,
  '/ranking': RankingView,
};

export default routes;
