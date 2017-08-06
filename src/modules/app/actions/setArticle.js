export default function setArticle({ props, state }) {
  state.set(`articles.${props.key}`, props.value);
}
