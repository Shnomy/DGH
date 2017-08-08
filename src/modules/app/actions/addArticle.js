export default function addArticle({ props, firebase, state }) {
  return firebase.push(`articles`, {
    title: props.title,
    content: `# ${props.title}`,
    datetimeCreated: Date.now(),
    author: state.get("app.user.displayName") || ""
  });
}
