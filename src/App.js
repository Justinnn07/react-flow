import React, { useState } from "react";
import ReactFlow from "react-flow-renderer";

import "./styles.css";

const onNodeDragStop = node => console.log("drag stop", node);
const onLoad = graphInstance => console.log("graph loaded:", graphInstance);
const onElementClick = element => console.log("click", element);

const els1 = [
  {
    id: "1",
    type: "input",
    data: { label: "Node 1" },
    position: { x: 250, y: 5 }
  },
  { id: "2", data: { label: "Node 2" }, position: { x: 100, y: 100 } },
  { id: "3", data: { label: "Node 3" }, position: { x: 400, y: 100 } },
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e1-3", source: "1", target: "3" }
];
const els2 = [
  {
    id: "1a",
    type: "input",
    data: { label: "Node 1" },
    position: { x: 250, y: 5 }
  },
  { id: "2a", data: { label: "Node 2" }, position: { x: 100, y: 200 } },
  { id: "3a", data: { label: "Node 3" }, position: { x: 400, y: 200 } },
  { id: "4a", data: { label: "Node 4" }, position: { x: 400, y: 300 } },
  { id: "e1a-2a", source: "1a", target: "2a", animated: true },
  { id: "e1a-3a", source: "1a", target: "3a" }
];

const elementLists = [els1, els2];

const BasicFlow = () => {
  const [elListIndex, setElListIndex] = useState(0);

  const updatePos = () => {
    setElListIndex(
      elListIndex === elementLists.length - 1 ? 0 : elListIndex + 1
    );
  };

  return (
    <ReactFlow
      elements={elementLists[elListIndex]}
      onLoad={onLoad}
      onElementClick={onElementClick}
      onNodeDragStop={onNodeDragStop}
    >
      <button
        onClick={updatePos}
        style={{ position: "absolute", right: 10, top: 30, zIndex: 4 }}
      >
        change pos
      </button>
    </ReactFlow>
  );
};

export default function App() {
  return <BasicFlow />;
}
