import moment, {Moment} from 'moment';
import * as React from 'react';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';

import {Employees} from './Employees';
import {Selectors} from './Selectors';
import {Shifts} from './Shifts';
import {Cell, HomeWrapper, TableHeader, TableWrapper} from './styles';
import {View} from './types';

export function Home(): JSX.Element {
  const [t, {language}] = useTranslation();
  const [currentDate, setCurrentDate] = React.useState(moment());
  const [view, setView] = React.useState(View.Shift);
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
      <Selectors
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        setView={setView}
      />
      <TableWrapper>
        <TableHeader>
          <Cell/>
          {days.map((day) => (
            <Cell key={day.format('YYYY-MM-DD')}>{day.format('ddd D')}</Cell>
          ))}
        </TableHeader>
        {view === View.Employees ? (
          <Employees days={days}/>
        ) : (
          <Shifts days={days}/>
        )}
      </TableWrapper>
      <Helmet>
        <title lang={language}>{`${t('attributes.titles.headline')} - ${t(
          'keywords.app_name'
        )}`}</title>
      </Helmet>
    </HomeWrapper>
  );
}
