const treeData = [
  {
    id: 1,
    type: "container",
    name: "collection1",
    children: [
      {
        id: 7,
        type: "container",
        name: "collection1.1",
        children: [
          {
            id: 2,
            name: "Content Page",
            type: "leaf",
            content: "Some content",
          },
          {
            id: 3,
            name: "Quiz",
            type: "leaf",
            content: "Some other content",
          },
          {
            id: 8,
            name: "Videos",
            type: "leaf",
            content: "Some other content",
          },
          {
            id: 9,
            name: "WYSIWYG Editor",
            type: "leaf",
            content: "Some other content",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    type: "container",
    name: "collection2",
    children: [
      {
        id: 5,
        name: "collection2.1",
        type: "leaf",
        content: "Even more content",
      },
      { id: 6, name: "collection2.2", type: "leaf", content: "And some more" },
    ],
  },
];
export default treeData;
