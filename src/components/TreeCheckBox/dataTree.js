export function createHierarchyTree(arr, parentId = 0, idCounter = { value: 1 }) {
    return arr.map(item => {
        const nodeId = idCounter.value++;
        const node = {
            value: nodeId,
            label: item.text,
            type: item.type,
            parent: parentId,
            children: [],
        };

        if (item.children && item.children.length > 0) {
            node.children = createHierarchyTree(item.children, nodeId, idCounter);
        }

        return node;
    });
}

export class Node {
    constructor(id, label, type, parent = null) {
        this.id = id;
        this.label = label;
        this.isChecked = false;
        this.type = type;
        this.parent = parent;
        this.children = [];
    }

    addChild(child) {
        this.children.push(child);
    }

    find(nodeId) {
        if (this.id === nodeId) {
            return this;
        }

        for (const child of this.children) {
            const foundNode = child.find(nodeId);
            if (foundNode) {
                return foundNode;
            }
        }

        return null;
    }
    hasChild(){
        return this.children.length > 0;
    }
    hasParent(){
        return Boolean(this.parent!==null && this.parent.id > 0);
    }
}

export function createNodeHierarchy(treeData, parent = null) {
    return treeData.map(item => {
        const node = new Node(item.value, item.label, item.type, parent);
        if(parent.id === 0){
            parent.children.push(node)
        }
        if (item.children && item.children.length > 0) {
            node.children = createNodeHierarchy(item.children, node);
        }

        return node;
    });
}

function downChildUpdateChecked(node, isChecked){
    node.isChecked = isChecked;
    if(node.hasChild())
    {
        node.children.map(child => {
            downChildUpdateChecked(child, isChecked)
        })
    }
    }

function checkChildsIsChecked(nodeArr){
    let rtnCheck = true;
    nodeArr.map(child => {
        rtnCheck = rtnCheck && child.isChecked;
    })
    return rtnCheck;
}
function upParentUpdateChecked(node, isChecked){
    if(!isChecked){
        node.isChecked = isChecked;
        if(node.hasParent()){
            upParentUpdateChecked(node.parent, isChecked)
        }
    }
    else{
        let childsIsChecked = checkChildsIsChecked(node.children);
        if(childsIsChecked){
            node.isChecked = isChecked;
            if(node.hasParent()){
                upParentUpdateChecked(node.parent, isChecked)
            }
        }
        else{
            node.isChecked = false;
            if(node.hasParent()){
                upParentUpdateChecked(node.parent, false)
            }
        }
    }
}

export function updateCheckedNodes(node, isChecked){
    downChildUpdateChecked(node, isChecked)
    
    if(node.hasParent()){
        upParentUpdateChecked(node.parent, isChecked)
    }
}

export function generateTags(node) {
    const tags = [];
    if (node.isChecked) {
        if (node.type === "Product") {
            tags.push("All " + node.label);
        } else if (node.type === "Brand") {
            tags.push("All " + node.label + " " + node.parent.label);
        } else if (node.type === "Model") {
            tags.push("All " + node.label + " Devices");
        } else if (node.type === "Variant") {
            const variants = node.parent.children.filter(child => child.isChecked && child.type === "Variant");
            if (variants.length > 0) {
                tags.push(node.parent.label + " " + variants.map(variant => variant.label).join(", "));
            }
        }
    }

    else if ((node.children && node.children.length > 0) || node.id === 0) {
        for (const child of node.children) {
              tags.push(...generateTags(child));               
        }
    }


    return Array.from(new Set(tags));
}






