import { Suspense, lazy } from 'react';
import LoadingScreen from './LoadingScreen';

const LazyPage = ({ component: Component, ...props }) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default LazyPage;


