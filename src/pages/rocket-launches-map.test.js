import React from 'react';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useGetLaunches } from 'hooks'
import rocketLaunches from '../__fixtures__/rocket-launches.json';
import { RocketLaunchMap } from './rocket-launch-map';

jest.mock('/../hooks/useGetLaunches', () => ({
    useFetchRecipe: jest.fn()
}));

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
useGetLaunches.mockImplementation(() => rocketLaunches);

const queryClient = new QueryClient();
const component = render(
    <QueryClientProvider client={queryClient}>
        <RocketLaunchMap/>
    </QueryClientProvider>
);

