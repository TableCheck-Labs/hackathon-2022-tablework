import moment, { Moment } from 'moment';
import * as React from 'react';
import { useParams } from 'react-router-dom';

import { AppContext } from 'contexts/AppContext';

import { Avatar, Cell, StaffCell, SubtleText, TableRow } from '../../styles';

import { data } from './data';

export function AdminStaffView({ days }: { days: Moment[] }): JSX.Element {
  const { setLoading, isApiDisabled } = React.useContext(AppContext);
  const [staffData, setStaffData] = React.useState();
  const params = useParams();

  React.useEffect(() => {
    async function getData() {
      setLoading(true);
      await fetch(`${CONFIG.apiURL}/shops/${params.id}/staff`)
        .then((response) => response.json())
        .then((data) => {
          setStaffData(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      setLoading(false);
    }

    if (isApiDisabled) {
      setStaffData(data);
    } else {
      getData();
    }
  }, []);

  return (
    <>
      {staffData?.users.map((staff) => (
        <TableRow key={staff.id}>
          <StaffCell>
            <Avatar url={staff.photo_url} />
            <div>
              <div>{staff.name}</div>
              <SubtleText>{staff.jobType}</SubtleText>
            </div>
          </StaffCell>
          {days.map((day) => {
            const shiftFound = staff.shifts?.find(
              (shift) => day.date() === moment(shift.startTime).date()
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
