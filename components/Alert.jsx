export default function Alert({
  type,
  text = "Si è verificato un errore",
  colorText = "red",
  colorBg = "danger",
}) {
  return <div className={`${type} ${colorText} ${colorBg}`}>{text}</div>;
}
