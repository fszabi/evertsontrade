export default function ScrollArrow() {
  return (
    <button
      class="fixed bottom-4 right-4 flex 
    justify-center items-center text-2xl text-blue-400
    hover:opacity-70 transition-opacity duration-300"
    >
      <i class="fa-solid fa-circle-arrow-up"></i>
      <span class="sr-only"> Görgetés az oldal tetejére</span>
    </button>
  );
}
