export default function Step({ title, body, icon }) {
  return (
    <li className="grid sm:grid-cols-[auto,_1fr] gap-5">
      <div className="flex justify-center items-center bg-primary-300 rounded-md p-5 text-xl max-sm:text-lg h-20 w-20">
        {icon}
      </div>
      <div className="space-y-1">
        <h2 className="text-lg max-sm:text-base font-medium underline">
          {title}
        </h2>
        <p className="max-sm:text-sm">{body}</p>
      </div>
    </li>
  );
}
