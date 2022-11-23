import { useQuery } from 'react-query';
import { AxiosPromise } from 'axios';
import type { UseQueryResult } from 'react-query';
import { rocketLaunchApi } from 'api';
import { AgencyProps } from 'types';

type launchesParams = {
    limit?: string
    mode?: string
}

export const useGetLaunches = (params: launchesParams, page: number): UseQueryResult<AgencyProps> => {
    return useQuery(['launch-agencies'], async () => {
        const response =  await rocketLaunchApi.get<AxiosPromise>('/2.2.0/agencies', { params });
        return response.data
    });
};
