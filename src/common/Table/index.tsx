import moment, { Moment } from 'moment';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import { AppContext } from 'contexts/AppContext';
import { View } from 'types';

import { Selectors } from '../Selectors';

import { Employees } from './Employees';
import { Shifts } from './Shifts';
import { Cell, TableHeader, TableWrapper } from './styles';

export function Table(): JSX.Element {
  const { isAdmin } = React.useContext(AppContext);
  const [t, { language }] = useTranslation();
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
    <>
      <Selectors
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        setView={setView}
      />
      <TableWrapper>
        <TableHeader>
          <Cell />
          {days.map((day) => (
            <Cell key={day.format('YYYY-MM-DD')}>{day.format('ddd D')}</Cell>
          ))}
        </TableHeader>
        {view === View.Employees ? (
          <Employees days={days} />
        ) : (
          <Shifts days={days} />
        )}
      </TableWrapper>
      <Helmet>
        <title lang={language}>{`${t('attributes.titles.headline')} - ${t(
          'keywords.app_name'
        )}`}</title>
      </Helmet>
    </>
  );
}
