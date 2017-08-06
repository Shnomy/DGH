export default function addArticleToSubCategory({ firebase, state, props }) {
  return firebase.set(`articlesInCategory.${props.subCategory}.${props.key}`, {
    title: props.title
  });
}
