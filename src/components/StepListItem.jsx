export default function Step({ title, body, icon }) {
  return (
    <li className="flex max-sm:flex-col gap-5">
      <div className="flex justify-center items-center bg-primary-300 rounded-md p-5 text-xl h-20 w-20">
        {icon}
      </div>
      <div className="space-y-1">
        <h2 className="text-lg font-medium underline">{title}</h2>
        <p>{body}</p>
      </div>
    </li>
  );
}
