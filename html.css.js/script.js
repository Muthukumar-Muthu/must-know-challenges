function getByClass(className) {
  const children = Array.from(document.body.children); //children of the body
  const matchingElement = [];
  search(className, children, matchingElement);
  return matchingElement;
}

function search(className, children, matchingElement) {
  if (children.length === 0) return;
  children.forEach((child) => {
    if (child.classList.contains(className)) matchingElement.push(child);
    search(className, Array.from(child.children), matchingElement);
  });
}
