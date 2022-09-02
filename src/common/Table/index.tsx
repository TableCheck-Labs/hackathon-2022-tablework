import moment, { Moment } from 'moment';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import { AppContext } from 'contexts/AppContext';
import { View } from 'types';

import { AppRoute } from '../../enums';
import { Selectors } from '../Selectors';

import { AdminShiftsView } from './Admin/ShiftsView';
import { AdminStaffView } from './Admin/StaffView';
import { Staff } from './User';
import { Cell, TableHeader, TableWrapper } from './styles';

export function Table(): JSX.Element {
  const { isAdmin } = React.useContext(AppContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [t, { language }] = useTranslation();
  const [currentDate, setCurrentDate] = React.useState(moment());
  const [view, setView] = React.useState(View.Staff);
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

  React.useEffect(() => {
    if (!isAdmin && location.pathname.includes(AppRoute.Venue)) {
      navigate('/', { replace: true });
    }
  }, [isAdmin]);

  let content = <Staff days={days} />;
  if (isAdmin && view === View.Staff) {
    content = <AdminStaffView days={days} />;
  }
  if (isAdmin && view === View.Shifts) {
    content = <AdminShiftsView days={days} />;
  }

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
        {content}
      </TableWrapper>
      <Helmet>
        <title lang={language}>{`${t('attributes.titles.headline')} - ${t(
          'keywords.app_name'
        )}`}</title>
      </Helmet>
    </>
  );
}
