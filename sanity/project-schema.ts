const project = {
  name: "event",
  title: "Events",
  type: "document",
  fields: [
    {
      name: "date",
      title: "Date",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Image Title",
          type: "string",
        },
      ],
    },
  ],
};

export default project;
