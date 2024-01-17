import React, { useState } from "react"
import data from "./data" // Retrieving Data
import { createHierarchyTree,
    Node, 
    createNodeHierarchy, 
    updateCheckedNodes,
    generateTags
} from "./dataTree.js"
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";



const hierarchyTree = createHierarchyTree(data)
const rootNode = new Node(0, "Root");
createNodeHierarchy(hierarchyTree, rootNode);
export default function TreeCheckBox(){
    const [checkState, setCheckState] = useState({
        checked: [],
        expanded: [],
    })
    const [tags, setTags] = useState([])
    
    // Managing Nodes and Tags
    function onCheckItem(checked, targetNode) {
        setCheckState((prevState) => {
            return { ...prevState, checked}
        });
        updateCheckedNodes(rootNode.find(targetNode.value), targetNode.checked)
        setTags(generateTags(rootNode))
    }


    function onExpendItem(expanded){
        setCheckState((prevState) => {
            return { ...prevState, expanded}
        });
    }
    return <>
    <h3> Browse Products </h3>
    <CheckboxTree
          nodes={hierarchyTree}
          checked={checkState.checked}
          expanded={checkState.expanded}
          onCheck={(checked, targetNode) =>
            onCheckItem(checked, targetNode)
          }
          onExpand={(expanded) => onExpendItem(expanded)}
          iconsClass="fa4"      
    />
    <h3> Selected Variants </h3>
    <div className="tag-container">
    {tags.map((tag, ind)=>{
        return <p key= {ind} className="tag-box">{tag}</p>
    })}
    </div>

    </>
}