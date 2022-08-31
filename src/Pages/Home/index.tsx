import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { Icon } from '@tablecheck/tablekit-icon';
import moment, { Moment } from 'moment';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import { data } from './data';
import {
  Avatar,
  Cell,
  DateSelector,
  DateSelectorButton,
  DateSelectorInfo,
  HomeWrapper,
  Selectors,
  StaffCell,
  TableHeader,
  TableRow,
  TableWrapper,
  ViewButton,
  ViewSelector
} from './styles';

export function Home(): JSX.Element {
  const [t, { language }] = useTranslation();
  const [currentDate, setCurrentDate] = React.useState(moment());
  const [days, setDays] = React.useState<Moment[]>([]);

  React.useEffect(() => {
    const newDays: Moment[] = [];
    const weekStart = currentDate.clone().startOf('week');
    for (let i = 0; i <= 6; i += 1) {
      newDays.push(moment(weekStart).add(i, 'days'));
    }
    setDays(newDays);
  }, [currentDate]);

  React.useEffect(() => {
    moment.locale(language);
    setCurrentDate(moment());
  }, [language]);

  return (
    <HomeWrapper>
      <Selectors>
        <DateSelector>
          <DateSelectorButton
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
        <ViewSelector>
          <ViewButton>{t('keywords.day')}</ViewButton>
          <ViewButton active>{t('keywords.week')}</ViewButton>
          <ViewButton>{t('keywords.month')}</ViewButton>
        </ViewSelector>
      </Selectors>
      <TableWrapper>
        <TableHeader>
          <Cell />
          {days.map((day) => (
            <Cell key={day.format('YYYY-MM-DD')}>{day.format('ddd D')}</Cell>
          ))}
        </TableHeader>
        {data.map((staff) => (
          <TableRow key={staff.id}>
            <StaffCell>
              <Avatar name={staff.name} />
              {staff.name}
            </StaffCell>
            {days.map((day) => {
              const slotFound = staff.slots.find(
                (slot) => day.date() === moment(slot.startTime).date()
              );

              if (slotFound) {
                return (
                  <Cell key={`${staff.id}-${slotFound.startTime}`}>
                    <div>
                      {moment(slotFound.startTime).format('hA')} -{' '}
                      {moment(slotFound.endTime).format('hA')}
                    </div>
                    <span>{slotFound.jobType}</span>
                  </Cell>
                );
              }
              return <Cell key={`${staff.id}-${day.date()}`} />;
            })}
          </TableRow>
        ))}
      </TableWrapper>
      <Helmet>
        <title lang={language}>{`${t('attributes.titles.headline')} - ${t(
          'keywords.app_name'
        )}`}</title>
      </Helmet>
    </HomeWrapper>
  );
}
