import { useGetLaunches } from 'hooks';
import { useDateTimeContext } from 'context';
import { addDaysToDate } from 'utils';
import {RocketFilter} from "../components";


export const RocketLaunchMap = () => {
  const { date } = useDateTimeContext();

  const launchesList = useGetLaunches({
    window_start__gte: date.window_start__gte || new Date().toISOString(),
    window_end__lte:  date.window_end__lte || addDaysToDate(90)
  });

  const handleLaunchesByDate = () => {
    void launchesList.refetch();
  }

  return (
      <>
        <RocketFilter onSearch={handleLaunchesByDate} />
      </>
  )
}