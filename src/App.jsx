import Header from "./components/Header";
import ItemRenderMenu from "./components/ItemRenderMenu";
import Drawer from "./components/Drawer";
import Editor from "./components/Editor";
import { useState } from "react";
import treeDataStructure from "./utils/treeDataStructure";

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [selectedNode, setSelectedNode] = useState(null);

  const [tree, setTree] = useState(() => {
    try {
      const savedData = localStorage.getItem("treeData");
      return savedData ? JSON.parse(savedData) : treeDataStructure;
    } catch (error) {
      console.error("Failed to load tree from local storage: ", error);
      return treeDataStructure;
    }
  });

  const findNodeInTree = (nodeId, nodeArray = tree) => {
    for (let node of nodeArray) {
      if (node.id === nodeId) {
        return node;
      }
      if (node.children) {
        let foundNode = findNodeInTree(nodeId, node.children);
        if (foundNode) return foundNode;
      }
    }
    return null;
  };

  const updateNodeContent = (nodeId, newContent) => {
    const nodeToUpdate = findNodeInTree(nodeId);
    if (nodeToUpdate) {
      nodeToUpdate.children = newContent;
      setTree([...tree]);
    }
  };

  const findNodePath = (nodeId, nodeArray = tree, path = "") => {
    for (let node of nodeArray) {
      if (node.id === nodeId) {
        return path;
      }
      const newPath = path ? `${path}/${node.name}/` : node.name;
      if (node.children) {
        const foundPath = findNodePath(nodeId, node.children, newPath);
        if (foundPath) return foundPath;
      }
    }
    return null;
  };

  const selectedNodePath = selectedNode ? findNodePath(selectedNode.id) : null;

  return (
    <>
      <Header isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <ItemRenderMenu />
      <section className="flex">
        <Drawer
          tree={tree}
          setTree={setTree}
          setSelectedNode={setSelectedNode}
          isDrawerOpen={isDrawerOpen}
          setIsDrawerOpen={setIsDrawerOpen}
        />
        {selectedNode && (
          <Editor
            title={selectedNode.name}
            node={selectedNode}
            isDrawerOpen={isDrawerOpen}
            selectedNodePath={selectedNodePath}
            updateNodeContent={updateNodeContent}
          />
        )}
      </section>
    </>
  );
}

export default App;
