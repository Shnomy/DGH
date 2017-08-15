export default function addSubCategory({ props, firebase, state }) {
  const page = state.get("app.currentPage");
  const title = state.get("edit.addForm.text.value");

  return firebase.push(`pages.${page}.subCategories`, {
    title: title,
    content: `# ${title}`
  });
}
