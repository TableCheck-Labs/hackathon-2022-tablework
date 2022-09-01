import moment, { Moment } from 'moment';
import * as React from 'react';

import { employeeData as data } from './data';
import { Avatar, Cell, StaffCell, TableRow } from './styles';

export function Employees({ days }: { days: Moment[] }): JSX.Element {
  return (
    <>
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
                <Cell
                  key={`${staff.id}-${slotFound.startTime}`}
                  color={slotFound.color}
                >
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
    </>
  );
}
