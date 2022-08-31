import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { Icon } from '@tablecheck/tablekit-icon';
import moment from 'moment';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import {
  Cell,
  DateSelector,
  DateSelectorButton,
  DateSelectorInfo,
  HomeWrapper,
  TableHeader,
  TableRow,
  TableWrapper
} from './styles';

export function Home(): JSX.Element {
  const [t, { language }] = useTranslation();
  const [currentDate, setCurrentDate] = React.useState(moment());
  const [days, setDays] = React.useState<string[]>([]);

  React.useEffect(() => {
    const newDays: string[] = [];
    const weekStart = currentDate.clone().startOf('week');
    for (let i = 0; i <= 6; i += 1) {
      newDays.push(moment(weekStart).add(i, 'days').format('ddd D'));
    }
    setDays(newDays);
  }, [currentDate]);

  const fakeCells = [...Array(7)];

  return (
    <HomeWrapper>
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
      <TableWrapper>
        <TableHeader>
          {days.map((day) => (
            <Cell key={day}>{day}</Cell>
          ))}
        </TableHeader>
        <TableRow>
          {fakeCells.map((cell, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Cell key={`cell-${i}`}>{i}</Cell>
          ))}
        </TableRow>
      </TableWrapper>
      <Helmet>
        <title lang={language}>{`${t('attributes.titles.headline')} - ${t(
          'keywords.app_name'
        )}`}</title>
      </Helmet>
    </HomeWrapper>
  );
}
