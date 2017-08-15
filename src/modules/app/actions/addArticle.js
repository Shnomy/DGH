export default function addArticle({ props, firebase, state }) {
  const title = state.get("edit.addForm.text.value");
  return firebase.push(`articles`, {
    title: title,
    content: `# ${title}`,
    datetimeCreated: Date.now(),
    author: state.get("app.user.displayName") || ""
  });
}
