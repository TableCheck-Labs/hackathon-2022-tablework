import moment, { Moment } from 'moment';
import * as React from 'react';
import { useParams } from 'react-router-dom';

import { AppContext } from 'contexts/AppContext';

import { Avatar, Cell, StaffCell, TableRow } from '../styles';

import { data } from './data';

export function Staff({ days }: { days: Moment[] }): JSX.Element {
  const { setLoading, isApiDisabled } = React.useContext(AppContext);
  const [userData, setUserData] = React.useState();
  const params = useParams();

  React.useEffect(() => {
    async function getData() {
      setLoading(true);
      await fetch(`${CONFIG.apiURL}/users/${params.id}`)
        .then((response) => response.json())
        .then((data) => {
          setUserData(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      setLoading(false);
    }

    if (isApiDisabled) {
      setUserData(data);
    } else {
      getData();
    }
  }, []);

  return (
    <>
      {userData?.shops.map((shop) => (
        <TableRow key={shop.id}>
          <StaffCell>
            <Avatar url={shop.photo_url} />
            {shop.name}
          </StaffCell>
          {days.map((day) => {
            const shiftFound = shop.shifts.find(
              (shift) => day.date() === moment(shift.startDate).date()
            );

            if (shiftFound) {
              return (
                <Cell key={`${shiftFound.id}-${shiftFound.startDate}`}>
                  <div>
                    {moment(shiftFound.startDate).format('hA')} -{' '}
                    {moment(shiftFound.endDate).format('hA')}
                  </div>
                </Cell>
              );
            }
            return <Cell key={`${shop.id}-${day.date()}`}>-</Cell>;
          })}
        </TableRow>
      ))}
    </>
  );
}
