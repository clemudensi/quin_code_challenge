import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { LaunchesContainer } from 'components';
import { LaunchDateProvider } from 'context';
import { RocketLaunchMap } from 'pages';

const queryClient = new QueryClient();

function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <LaunchDateProvider>
            <LaunchesContainer>
                <RocketLaunchMap />
            </LaunchesContainer>
        </LaunchDateProvider>
      </QueryClientProvider>
  );
}

export default App;
