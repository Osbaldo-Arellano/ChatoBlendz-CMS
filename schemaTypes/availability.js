export default {
  name: 'availability',
  title: 'Availability',
  type: 'document',
  fields: [
    {
      name: 'weekdays',
      title: 'Weekdays',
      type: 'object',
      fields: [
        {
          name: 'start',
          title: 'Start Time',
          type: 'string',
          description: 'Example: "09:00"',
        },
        {
          name: 'end',
          title: 'End Time',
          type: 'string',
          description: 'Example: "18:00"',
        },
      ],
    },
    {
      name: 'weekends',
      title: 'Weekends',
      type: 'object',
      fields: [
        {
          name: 'start',
          title: 'Start Time',
          type: 'string',
          description: 'Example: "10:00"',
        },
        {
          name: 'end',
          title: 'End Time',
          type: 'string',
          description: 'Example: "16:00"',
        },
      ],
    },
  ],
}
