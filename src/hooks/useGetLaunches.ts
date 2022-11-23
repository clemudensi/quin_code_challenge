import { useQuery } from 'react-query';
import { AxiosPromise } from 'axios';
import type { UseQueryResult } from 'react-query';
import { rocketLaunchApi } from 'api';
import { LaunchesResult } from 'types';

type launchesParams = {
    window_start__gte: string;
    window_end__lte: string;
}

export const useGetLaunches = (params: launchesParams): UseQueryResult<LaunchesResult> => {
    return useQuery(['launch-agencies'], async () => {
        const response =  await rocketLaunchApi.get<AxiosPromise>('/2.2.0/launch', { params });
        return response.data
    });
};
