import { FlexContainer, DateTimeInput } from 'components';
import { dateTimeLocal } from 'utils';

export const RocketFilter = () => {
    return (
        <FlexContainer>
            <DateTimeInput
                type="datetime-local" id="start-date"
                name="start-date"
            />
            <DateTimeInput
                type="datetime-local" id="start-date"
                name="start-date" value={dateTimeLocal(new Date())}
            />
        </FlexContainer>
    )
};