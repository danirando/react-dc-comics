export default function Alert({ type, text, colorText, colorBg }) {
  return <div className={`${type} ${colorText} ${colorBg}`}>{text}</div>;
}
