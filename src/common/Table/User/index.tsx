import moment, { Moment } from 'moment';
import * as React from 'react';

import { AppContext } from 'contexts/AppContext';

import { Avatar, Cell, StaffCell, TableRow } from '../styles';

import { data } from './data';

export function Staff({ days }: { days: Moment[] }): JSX.Element {
  const { setLoading } = React.useContext(AppContext);
  const [userData, setUserData] = React.useState();

  // React.useEffect(() => {
  //   async function getData() {
  //     setLoading(true);
  //     fetch('https://tablework.vectorsigma.ru/users/2')
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log('Success:', data);
  //         const parsedData = parseData(data);
  //         setUserData(data);
  //       })
  //       .catch((error) => {
  //         console.error('Error:', error);
  //       });
  //     setLoading(false);
  //   }
  //
  //   getData();
  // }, []);

  return (
    <>
      {data.shops.map((shop) => (
        <TableRow key={shop.id}>
          <StaffCell>
            <Avatar url={shop.photo} />
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
            return <Cell key={`${shop.id}-${day.date()}`} />;
          })}
        </TableRow>
      ))}
    </>
  );
}
