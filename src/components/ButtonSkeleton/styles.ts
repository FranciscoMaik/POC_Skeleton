import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';

export const Container = styled.div`
  max-width: 300px;
  background: #141414;
  box-shadow: 1px 2px 12px rgba(0, 0, 0, 0.2);
  margin-bottom: 24px;
  padding: 1rem;
  border-radius: 8px;
  display: grid;
  grid-template-columns: 12px 1fr 70px;
  gap: 16px;
`;

export const SkeletonButton = styled(Skeleton)`
  background-color: #d1d1d1;
`;
