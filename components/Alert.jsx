export default function Alert({
  type,
  text = "Si è verificato un errore",
  colorText = "red",
  colorBg = "danger",
  display = "d-none",
}) {
  return (
    <div className={`${type} ${colorText} ${colorBg} ${display}`}>{text}</div>
  );
}
