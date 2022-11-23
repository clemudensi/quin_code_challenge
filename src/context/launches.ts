import constate from 'constate';
import { useUserDateInput } from 'hooks';

const [LaunchDateProvider, useDateTimeContext] = constate(useUserDateInput);

export { LaunchDateProvider, useDateTimeContext };