import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { Icon } from '@tablecheck/tablekit-icon';
import { Moment } from 'moment';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { Flex } from 'layouts';
import { Period, View } from 'types';

import {
  DateSelector,
  DateSelectorButton,
  DateSelectorInfo,
  PeriodSelector,
  SelectorSelect,
  SelectorsWrapper
} from './styles';

export function Selectors({
  currentDate,
  setCurrentDate,
  setView,
  isAdmin
}: {
  currentDate: Moment;
  setCurrentDate: (date: Moment) => void;
  setView: (view: View) => void;
  isAdmin?: boolean;
}): JSX.Element {
  const [t] = useTranslation();
  // const { isAdmin } = React.useContext(AppContext);
  const venueOptions = [{ label: 'My Restaurant', value: 'my-restaurant' }];
  const viewOptions = [
    {
      label: t('keywords.staff_view'),
      value: View.Staff
    },
    { label: t('keywords.shifts_view'), value: View.Shifts }
  ];
  const periods = [
    {
      label: t('keywords.day'),
      value: Period.Day
    },
    {
      label: t('keywords.week'),
      value: Period.Week
    },
    {
      label: t('keywords.month'),
      value: Period.Month
    }
  ];
  return (
    <SelectorsWrapper>
      <Flex>
        {isAdmin && (
          <SelectorSelect
            name="venue-select"
            shouldFitContainer
            onChange={() => {}}
            options={venueOptions}
            value={venueOptions[0]}
            isRequired
          />
        )}
        <DateSelector>
          <DateSelectorButton
            isLeft
            onClick={() => setCurrentDate(currentDate.clone().subtract(1, 'w'))}
          >
            <Icon icon={faChevronLeft} />
          </DateSelectorButton>
          <DateSelectorInfo>{`${currentDate
            .clone()
            .startOf('week')
            .format('MMM Do')} - ${currentDate
            .clone()
            .endOf('week')
            .format('MMM Do')}`}</DateSelectorInfo>
          <DateSelectorButton
            onClick={() => setCurrentDate(currentDate.clone().add(1, 'w'))}
          >
            <Icon icon={faChevronRight} />
          </DateSelectorButton>
        </DateSelector>
        {isAdmin && (
          <SelectorSelect
            name="view-select"
            shouldFitContainer
            onChange={(option) => setView(option?.value as View)}
            options={viewOptions}
            defaultValue={viewOptions[0]}
            isRequired
          />
        )}
      </Flex>
      <PeriodSelector
        isValueRequired
        items={periods}
        values={[periods[1].value]}
        onChange={() => {}}
      />
    </SelectorsWrapper>
  );
}
