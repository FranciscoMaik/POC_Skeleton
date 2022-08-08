import React from 'react';
import 'react-loading-skeleton/dist/skeleton.css';

import { SkeletonButton, Container } from './styles';

const ButtonSkeleton: React.FC = function () {
  return (
    <Container>
      <SkeletonButton />
      <div>
        <SkeletonButton count={2} />
      </div>
      <SkeletonButton />
    </Container>
  );
};

export default ButtonSkeleton;
