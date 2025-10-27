export default function MessageBox({ message, onClose }) {
  if (!message) return null;

  const colorClasses =
    message.type === 'success'
      ? 'bg-green-100 border-green-400 text-green-700'
      : 'bg-red-100 border-red-400 text-red-700';

  return (
    <div className={`border px-4 py-3 rounded-lg relative ${colorClasses} shadow-md mb-6`} role="alert">
      <strong className="font-bold">
        {message.type === 'success' ? 'Success!' : 'Error!'}
      </strong>
      <span className="block sm:inline ml-2">{message.text}</span>
      <span
        className="absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer"
        onClick={onClose}
      >
        <svg className="fill-current h-6 w-6" role="button" viewBox="0 0 20 20">
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 2.651a1.2 1.2 0 1 1-1.697-1.697L8.304 10 5.652 7.349a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-2.651a1.2 1.2 0 1 1 1.697 1.697L11.697 10l2.651 2.651a1.2 1.2 0 0 1 0 1.698z" />
        </svg>
      </span>
    </div>
  );
}
