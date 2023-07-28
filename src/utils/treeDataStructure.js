import { v4 as uuidv4 } from 'uuid';

const treeData = [
  {
    id: uuidv4(),
    type: "container",
    isOpen:true,
    name: "collection1",
    children: [
      {
        id: uuidv4(),
        type: "container",
        isOpen:true,
        name: "collection1.1",
        children: [
          {
            id: uuidv4(),
            name: "Content Page",
            type: "leaf",
            content: "Some content",
          },
          {
            id: uuidv4(),
            name: "Quiz",
            type: "leaf",
            content: "Some other content",
          },
          {
            id: uuidv4(),
            name: "Videos",
            type: "leaf",
            content: "Some other content",
          },
          {
            id: uuidv4(),
            name: "WYSIWYG Editor",
            type: "leaf",
            content: "Some other content",
          },
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    type: "container",
    isOpen:false,
    name: "collection2",
    children: [
      {
        id: uuidv4(),
        name: "collection2.1",
        type: "leaf",
        content: "Even more content",
      },
      { id: uuidv4(), name: "collection2.2", type: "leaf", content: "And some more" },
    ],
  },
  {
    id: uuidv4(),
    type: "container",
    isOpen:false,
    name: "collection3",
  },
  {
    id: uuidv4(),
    type: "container",
    isOpen:false,
    name: "collection4",
  },
  {
    id: uuidv4(),
    type: "container",
    isOpen:false,
    name: "collection5",
  },
  {
    id: uuidv4(),
    type: "container",
    isOpen:false,
    name: "collection6",
  },
];
export default treeData;
