import React from 'react';

import Header from '../../components/header/index';
import Banner from '../../components/banner/index';
import Features from '../../components/features/index';
import Footer from '../../components/footer/index';

function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <Banner />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;