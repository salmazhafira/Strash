import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import HomepageView from '../views/HomepageView.jsx';
import HomepagePresenter from '../presenters/HomepagePresenter';

const App = () => (
  <div className="min-h-screen flex flex-col bg-white">
    <Navbar />
    <div className="flex-1">
      <HomepageView presenter={HomepagePresenter} />
    </div>
    <Footer />
  </div>
);

export default App; 