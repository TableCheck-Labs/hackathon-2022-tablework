import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { Icon } from '@tablecheck/tablekit-icon';
import { Moment } from 'moment';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import {
  DateSelector,
  DateSelectorButton,
  DateSelectorInfo,
  Flex,
  PeriodSelector,
  SelectorSelect,
  SelectorsWrapper
} from './styles';
import { Period, View } from './types';

export function Selectors({
  currentDate,
  setCurrentDate,
  setView
}: {
  currentDate: Moment;
  setCurrentDate: (date: Moment) => void;
  setView: (view: View) => void;
}): JSX.Element {
  const [t] = useTranslation();
  const venueOptions = [{ label: 'My Restaurant', value: 'my-restaurant' }];
  const viewOptions = [
    { label: t('keywords.shift_view'), value: View.Shift },
    {
      label: t('keywords.employee_view'),
      value: View.Employees
    }
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
        <SelectorSelect
          name="venue-select"
          shouldFitContainer
          onChange={() => {}}
          options={venueOptions}
          value={venueOptions[0]}
          isRequired
        />
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
        <SelectorSelect
          name="view-select"
          shouldFitContainer
          onChange={(option) => setView(option?.value as View)}
          options={viewOptions}
          defaultValue={viewOptions[0]}
          isRequired
        />
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
