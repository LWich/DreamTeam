// App.js
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyImportant from './components/WhyImportant';
import ForWhom from './components/ForWhom';
import Products from './components/Products';
import LivingTeam from './components/LivingTeam';
import MethodEthics from './components/MethodEthics';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Onboarding from './components/Onboarding';
import PersonalCabinet from './components/PersonalCabinet';
import Payment from './components/Payment';

function App() {
  const [currentPage, setCurrentPage] = useState('main');
  const [user, setUser] = useState(null);
  const [teamData, setTeamData] = useState(null);

  const handleStartOnboarding = () => {
    setCurrentPage('onboarding');
  };

  const handleCompleteOnboarding = (userData, teamData) => {
    setUser(userData);
    setTeamData(teamData);
    setCurrentPage('cabinet');
  };

  const handleLogout = () => {
    setUser(null);
    setTeamData(null);
    setCurrentPage('main');
  };

  const handleNavigateToPayment = () => {
    setCurrentPage('payment');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'onboarding':
        return <Onboarding onComplete={handleCompleteOnboarding} onBack={() => setCurrentPage('main')} />;
      case 'cabinet':
        return (
          <PersonalCabinet 
            user={user} 
            teamData={teamData} 
            onLogout={handleLogout} 
            onNavigate={handleNavigateToPayment}
          />
        );
      case 'payment':
        return <Payment onBack={() => setCurrentPage('cabinet')} />;
      default:
        return (
          <>
            <Header onLogin={handleStartOnboarding} />
            <Hero onStartOnboarding={handleStartOnboarding} />
            <HowItWorks />
            <WhyImportant />
            <ForWhom />
            <Products onStartOnboarding={handleStartOnboarding} />
            <LivingTeam />
            <MethodEthics />
            <FinalCTA onStartOnboarding={handleStartOnboarding} />
            <Footer />
          </>
        );
    }
  };

  return (
    <div className="App">
      {renderCurrentPage()}
    </div>
  );
}

export default App;