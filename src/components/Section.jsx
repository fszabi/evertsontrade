export default function Section({ children, customStyles }) {
  return (
    <section
      className={`py-20 ${customStyles != undefined ? customStyles : ""}`}
    >
      {children}
    </section>
  );
}
