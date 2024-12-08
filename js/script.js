const SELF_CLOSING_TAGS = [
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
];

function formatHTML(node, depth = 0) {
  if (!node) return "";

  const indent = "  ".repeat(depth);
  let output = "";

  if (node.nodeType === Node.ELEMENT_NODE) {
    // Always add indent and newline for each tag
    output += indent;

    // Start tag and attributes
    output += `<${node.tagName.toLowerCase()}`;
    if (node.attributes.length > 0) {
      Array.from(node.attributes).forEach((attr) => {
        output += ` ${attr.name}="${attr.value}"`;
      });
    }
    output += ">\n";

    // Process children
    node.childNodes.forEach((child) => {
      output += formatHTML(child, depth + 1);
    });
  }

  return output;
}

window.addEventListener("load", () => {
  const rootNode = document.documentElement;
  const formattedHTML = formatHTML(rootNode);
  console.log(formattedHTML);
});
