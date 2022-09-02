import moment, { Moment } from 'moment';
import * as React from 'react';
import { useParams } from 'react-router-dom';

import { AppContext } from 'contexts/AppContext';

import { Avatar, AvatarWrapper, Cell, TableRow } from '../../styles';

import { data } from './data';

export function AdminShiftsView({ days }: { days: Moment[] }): JSX.Element {
  const { setLoading, isApiDisabled } = React.useContext(AppContext);
  const [shiftsData, setShiftsData] = React.useState();
  const params = useParams();

  React.useEffect(() => {
    async function getData() {
      setLoading(true);
      await fetch(`${CONFIG.apiURL}/shops/${params.id}/shifts`)
        .then((response) => response.json())
        .then((data) => {
          setShiftsData(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      setLoading(false);
    }

    if (isApiDisabled) {
      setShiftsData(data);
    } else {
      getData();
    }
  }, []);

  return (
    <>
      {shiftsData?.shifts.map((shift) => (
        <TableRow key={shift.id}>
          <Cell>
            <div>{shift.name}</div>
            <span>
              {moment(shift.startTime).format('hA')} -{' '}
              {moment(shift.endTime).format('hA')}
            </span>
          </Cell>
          {days.map((day) => {
            if (day.date() === moment(shift.startTime).date()) {
              return (
                <Cell key={`${shift.id}-${shift.startTime}`}>
                  <AvatarWrapper>
                    {shift.users.map((user) => (
                      <Avatar key={user.id} url={user.photo_url} />
                    ))}
                  </AvatarWrapper>
                </Cell>
              );
            }
            return <Cell key={`${shift.id}-${day.date()}`} />;
          })}
        </TableRow>
      ))}
    </>
  );
}
