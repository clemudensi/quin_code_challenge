import constate from 'constate';
import { userDateInput } from 'hooks';

const [LaunchDateProvider, useDateTimeContext] = constate(userDateInput);

export { LaunchDateProvider, useDateTimeContext };