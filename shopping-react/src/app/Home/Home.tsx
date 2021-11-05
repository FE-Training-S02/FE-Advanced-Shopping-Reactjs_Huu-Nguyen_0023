import React from 'react';

import Header from 'app/shared/components/layout/Header/Header';
import Collection from './partials/Collection/Collection';
import Footer from 'app/shared/components/layout/Footer/Footer';
import TopBanner from './partials/TopBanner/TopBanner';
import Suggestion from './partials/Suggestion/Suggestion';
import Introduction from './partials/Introduction/Introduction';
import TodaySuggestion from './partials/TodaySuggestion/TodaySuggestion';
import BottomBanner from './partials/BottomBanner/BottomBanner';

const Home = () => {
  return (
    <div id="home-page">
      <Header />
      <main>
        <TopBanner />
        <Collection />
        <Suggestion />
        <Introduction />
        <TodaySuggestion />
        <BottomBanner />
      </main>
      <Footer />
    </div>
  );
};
export default Home;
