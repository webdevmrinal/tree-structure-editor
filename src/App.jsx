import Header from "./components/Header";
import ItemRenderMenu from "./components/ItemRenderMenu";
import Drawer from "./components/Drawer";
import Editor from "./components/Editor";
import { useState } from "react";

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  return (
    <>
      <Header isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <ItemRenderMenu />
      <section className="max-w-screen-xl flex">
        <Drawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
        <Editor />
      </section>
    </>
  );
}

export default App;
