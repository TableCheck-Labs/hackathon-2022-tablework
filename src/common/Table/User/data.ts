export const data = {
  id: 1,
  name: 'Pablo Diaz',
  shifts_count: 4,
  shops: [
    {
      id: 1,
      name: 'Lux hotel',
      photo: 'https://via.placeholder.com/80/0000FF/808080?Text=Lux hotel',
      shifts: [
        {
          id: 1,
          name: 'Morning Shift',
          description: 'Quick morning shift for the upcoming event',
          startDate: '2022-09-01T08:00:00.000+09:00',
          endDate: '2022-09-01T12:30:00.000+09:00'
        },
        {
          id: 2,
          name: 'Evening Shift',
          description: 'Backup shift',
          startDate: '2022-09-02T13:00:00.000+09:00',
          endDate: '2022-09-02T16:00:00.000+09:00'
        }
      ]
    },
    {
      id: 2,
      name: 'Chicken Station',
      photo:
        'https://via.placeholder.com/80/0000FF/808080?Text=Chicken Station',
      shifts: [
        {
          id: 1,
          name: 'Morning Shift',
          description: 'Quick morning shift for the upcoming event',
          startDate: '2022-09-01T08:00:00.000+09:00',
          endDate: '2022-09-01T12:30:00.000+09:00'
        },
        {
          id: 2,
          name: 'Evening Shift',
          description: 'Backup shift',
          startDate: '2022-09-02T13:00:00.000+09:00',
          endDate: '2022-09-02T16:00:00.000+09:00'
        }
      ]
    }
  ]
};
