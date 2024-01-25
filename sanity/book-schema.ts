const books = {
    name: "book",
    title: "Books",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Book Name",
        type: "string"
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
  
  export default books;
  