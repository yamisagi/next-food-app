import React from 'react';
import Header from '@/components/Layout/Header';
import Summary from '@/components/Meals/Summary';
import Available from '@/components/Meals/Available';


const Home = () => {
  return (
    <div className='min-h-screen'>
      <Header />
      <Summary />
      <Available />
    </div>
  );
};

export default Home;
