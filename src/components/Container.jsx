export default function Container({ children, customStyles }) {
  return (
    <div
      className={`container ${customStyles != undefined ? customStyles : ""}`}
    >
      {children}
    </div>
  );
}
