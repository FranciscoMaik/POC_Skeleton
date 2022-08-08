import React from 'react';
import ButtonSkeleton from '../components/ButtonSkeleton';

const Home: React.FC = function () {
  return (
    <div>
      <ButtonSkeleton />
      <ButtonSkeleton />
      <ButtonSkeleton />
      <ButtonSkeleton />
      <ButtonSkeleton />
    </div>
  );
};

export default Home;
