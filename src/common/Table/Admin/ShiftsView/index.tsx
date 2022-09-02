import moment, { Moment } from 'moment';
import * as React from 'react';

import { Avatar, AvatarWrapper, Cell, TableRow } from '../../styles';

import { data } from './data';

export function AdminShiftsView({ days }: { days: Moment[] }): JSX.Element {
  return (
    <>
      {data.map((shift) => (
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
                      <Avatar url={user.photo} />
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
