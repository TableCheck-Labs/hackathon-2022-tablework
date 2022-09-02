import moment, { Moment } from 'moment';
import * as React from 'react';

import { Avatar, Cell, StaffCell, SubtleText, TableRow } from '../../styles';

import { data } from './data';

export function AdminStaffView({ days }: { days: Moment[] }): JSX.Element {
  return (
    <>
      {data.map((staff) => (
        <TableRow key={staff.id}>
          <StaffCell>
            <Avatar url={staff.photo} />
            <div>
              <div>{staff.name}</div>
              <SubtleText>{staff.jobType}</SubtleText>
            </div>
          </StaffCell>
          {days.map((day) => {
            const shiftFound = staff.shifts?.find(
              (slot) => day.date() === moment(slot.startTime).date()
            );

            if (shiftFound) {
              return (
                <Cell
                  key={`${staff.id}-${shiftFound.startTime}`}
                  color={shiftFound.color}
                >
                  <div>
                    {moment(shiftFound.startTime).format('hA')} -{' '}
                    {moment(shiftFound.endTime).format('hA')}
                  </div>
                  <SubtleText>{shiftFound.name}</SubtleText>
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
