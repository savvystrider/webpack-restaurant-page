function renderMenu() {
  const menuContent = document.createElement("div");
  menuContent.innerHTML = `
    <h2>Menu</h2>
    <p>This is our menu</p>
  `;
  return menuContent;
}

export { renderMenu };
