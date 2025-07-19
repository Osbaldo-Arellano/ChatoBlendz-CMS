const specials = {
  name: 'specials',
  title: 'Specials',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Example: Summer Specials, Limited-Time Offers',
    },
    {
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'service' }],
        },
      ],
      description: 'Select services to include in this specials group.',
    },
  ],
};

export default specials;
