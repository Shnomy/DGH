export default function setScroll({ props }) {
  document.body.classList.toggle("no-scroll", Boolean(props.url));
}
