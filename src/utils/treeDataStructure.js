import { v4 as uuidv4 } from "uuid";

const treeData = [
  {
    id: uuidv4(),
    type: "container",
    isOpen: true,
    name: "collection1",
    children: [
      {
        id: uuidv4(),
        type: "container",
        isOpen: true,
        name: "collection1.1",
        children: [
          {
            id: uuidv4(),
            name: "Content Page",
            type: "leaf",
            children: [
              {
                id: uuidv4(),
                content: "<p>This is first content</p>",
              },
              {
                id: uuidv4(),
                content: "<p>This is second content</p>",
              },
            ],
          },
          {
            id: uuidv4(),
            name: "Quiz",
            type: "leaf",
            children: [
              {
                id: uuidv4(),
                content: "<p>This is first content</p>",
              },
              {
                id: uuidv4(),
                content: "<p>This is second content</p>",
              },
            ],
          },
          {
            id: uuidv4(),
            name: "Videos",
            type: "leaf",
            children: [
              {
                id: uuidv4(),
                content: "<p>This is first content</p>",
              },
              {
                id: uuidv4(),
                content: "<p>This is second content</p>",
              },
            ],
          },
          {
            id: uuidv4(),
            name: "WYSIWYG Editor",
            type: "leaf",
            children: [
              {
                id: uuidv4(),
                content: "<p>This is first content</p>",
              },
              {
                id: uuidv4(),
                content: "<p>This is second content</p>",
              },
            ],
          },
          {
            id: uuidv4(),
            name: "collection1.1.1.1",
            type: "container",
            children: [
              {
                id: uuidv4(),
                name: "Item Editor",
                type: "leaf",
                children: [
                  {
                    id: uuidv4(),
                    content: "<p>This is first content</p>",
                  },
                  {
                    id: uuidv4(),
                    content: "<p>This is second content</p>",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: uuidv4(),
        type: "container",
        isOpen: true,
        name: "collection1.1",
        children: [
          {
            id: uuidv4(),
            name: "Content Page",
            type: "leaf",
            children: [
              {
                id: uuidv4(),
                content: "<p>This is first content</p>",
              },
              {
                id: uuidv4(),
                content: "<p>This is second content</p>",
              },
            ],
          },
          {
            id: uuidv4(),
            name: "Quiz",
            type: "leaf",
            children: [
              {
                id: uuidv4(),
                content: "<p>This is first content</p>",
              },
              {
                id: uuidv4(),
                content: "<p>This is second content</p>",
              },
            ],
          },
          {
            id: uuidv4(),
            name: "Videos",
            type: "leaf",
            children: [
              {
                id: uuidv4(),
                content: "<p>This is first content</p>",
              },
              {
                id: uuidv4(),
                content: "<p>This is second content</p>",
              },
            ],
          },
          {
            id: uuidv4(),
            name: "WYSIWYG Editor",
            type: "leaf",
            children: [
              {
                id: uuidv4(),
                content: "<p>This is first content</p>",
              },
              {
                id: uuidv4(),
                content: "<p>This is second content</p>",
              },
            ],
          },
          {
            id: uuidv4(),
            name: "collection1.1.1.1",
            type: "container",
            children: [
              {
                id: uuidv4(),
                name: "Item Editor",
                type: "leaf",
                children: [
                  {
                    id: uuidv4(),
                    content: "<p>This is first content</p>",
                  },
                  {
                    id: uuidv4(),
                    content: "<p>This is second content</p>",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    type: "container",
    isOpen: false,
    name: "collection2",
    children: [
      {
        id: uuidv4(),
        name: "collection2.1",
        type: "leaf",
        children: [
          {
            id: uuidv4(),
            content: "<p>This is first content</p>",
          },
          {
            id: uuidv4(),
            content: "<p>This is second content</p>",
          },
        ],
      },
      {
        id: uuidv4(),
        name: "collection2.2",
        type: "leaf",
        children: [
          {
            id: uuidv4(),
            content: "<p>This is first content</p>",
          },
          {
            id: uuidv4(),
            content: "<p>This is second content</p>",
          },
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    type: "container",
    isOpen: false,
    name: "collection3",
  },
  {
    id: uuidv4(),
    type: "container",
    isOpen: false,
    name: "collection4",
  },
  {
    id: uuidv4(),
    type: "container",
    isOpen: false,
    name: "collection5",
  },
  {
    id: uuidv4(),
    type: "container",
    isOpen: false,
    name: "collection6",
  },
];
export default treeData;
