export default function addSubCategory({ props, firebase }) {
  return firebase.push(`pages.${props.page}.subCategories`, {
    title: props.title,
    content: `# ${props.title}`
  });
}
