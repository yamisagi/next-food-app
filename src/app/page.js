import React from 'react';
import Card from '@/components/UI/Card';
import Header from '@/components/Layout/Header';
import Summary from '@/components/Meals/Summary';

const Home = () => {
  return (
    <div className='min-h-screen'>
      <Header />
      <Card>
        <Summary />
      </Card>
    </div>
  );
};

export default Home;
