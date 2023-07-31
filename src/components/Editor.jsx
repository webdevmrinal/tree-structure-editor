import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { HiOutlinePlusCircle } from "react-icons/hi";
import MediumEditor from "medium-editor";
import "medium-editor/dist/css/medium-editor.css";
import "medium-editor/dist/css/themes/default.css";

function Editor({
  title,
  node,
  isDrawerOpen,
  selectedNodePath,
  updateNodeContent,
}) {
  const [editors, setEditors] = useState(node.children);
  const editorRefs = editors.map(() => React.createRef());
  let content = [...editors];
  let mediumEditors = [];

  useEffect(() => {
    mediumEditors = editorRefs.map((editorRef, index) => {
      const editor = new MediumEditor(editorRef.current);
      editor.subscribe("editableInput", function (event, editable) {
        content[index] = editable.innerHTML;
      });
      return editor;
    });

    return () => {
      mediumEditors.forEach((editor) => editor.destroy());
      updateNodeContent(node.id, content);
    };
  }, [node, editors]);

  const addEditor = () => {
    setEditors((editors) => [...editors, { id: uuidv4(), content: "" }]);
  };

  console.log(editors);

  return (
    <div
      className={
        isDrawerOpen
          ? "flex-[.8] w-[calc(100vw-392px)] h-[calc(100vh-125px)] pl-5 pr-6 md:pl-20 lg:pl-40 pt-3 overflow-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-200"
          : "flex-1 w-full h-[calc(100vh-125px)] pl-5 pr-6 md:pl-20 lg:pl-40 pt-3 overflow-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-200"
      }
    >
      <div className="pt-1 pb-3 lg:pt-2 lg:pb-6">
        <span className="text-gray-500 text-sm lg:text-base">
          {selectedNodePath}
        </span>
        <button className="text-gray-500 text-sm lg:text-base sm:pl-16">
          Add item member
        </button>
      </div>
      <div className="font-extralight text-3xl md:text-5xl pb-4">{title}</div>
      <div className="editor-space">
        {editors.map((content, index) => (
          <div
            key={content.id}
            className="outline-none border-b py-4"
            ref={editorRefs[index]}
            dangerouslySetInnerHTML={{ __html: content.content }}
          />
        ))}
        <button className="my-4" onClick={addEditor}>
          <HiOutlinePlusCircle size={25} color="#f2545f" />
        </button>
      </div>
    </div>
  );
}

export default Editor;
