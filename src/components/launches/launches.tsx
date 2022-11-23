import { FC } from 'react';
import {
    FlexContainer,
    DateTimeInput,
    SearchButton
} from 'components';
import { useDateTimeContext } from 'context';

type RocketFilterProps = {
    onSearch?: () => void;
}

export const RocketFilter: FC<RocketFilterProps> = ({ onSearch }) => {
    const { onChange } = useDateTimeContext();

    return (
        <FlexContainer>
            <DateTimeInput
                type="datetime-local" id="startDate"
                name="startDate"
                onChange={onChange}
            />
            <DateTimeInput
                type="datetime-local" id="endDate"
                name="endDate"
                onChange={onChange}
            />
            <SearchButton onClick={onSearch}>Search</SearchButton>
        </FlexContainer>
    )
};