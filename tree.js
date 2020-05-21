// tree example with DOM 

function createNode(key) {
  const children = [];
  return {
    key,
    children,
    addChild: function(childKey) {
      const childNode = createNode(childKey);
      children.push(childNode);
      return childNode;
    }
  };
}
function createTree(rootKey) {
  const root = createNode(rootKey);
  return {
    root,
    print: function() {
      let result = "";
      function traverse(node, viewFn, depth) {
        viewFn(node, depth);
        node.children.forEach(childNode =>
          traverse(childNode, viewFn, depth + 1)
        );
      }
      traverse(
        root,
        (node, depth) => {
          result = result + `${" ".repeat(depth * 2)}` + node.key + `\n`;
        },
        1
      );

      return result;
    }
  };
}

const dom = createTree("html");
const header = dom.root.addChild("header");
const body = dom.root.addChild("body");
const footer = dom.root.addChild("footer");
const title = header.addChild("title - a js tree example");
const h1 = body.addChild("h1");
const text = h1.addChild("this is text data");
const copy = footer.addChild(`copyright `);

console.log(dom.print());
