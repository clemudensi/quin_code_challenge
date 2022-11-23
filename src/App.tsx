import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { LaunchesContainer, RocketFilter } from 'components';

const queryClient = new QueryClient()

function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <LaunchesContainer>
            <RocketFilter />
        </LaunchesContainer>
      </QueryClientProvider>
  );
}

export default App;
