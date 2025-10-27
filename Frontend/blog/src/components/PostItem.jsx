export default function PostItem({ post, onEdit, onDelete }) {
  const formattedDate = new Date(post.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6 hover:shadow-xl transition-all">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h3>
      <div className="text-sm text-gray-500 mb-4">
        By <span className="font-semibold">{post.author || 'Anonymous'}</span> on {formattedDate}
      </div>
      <p className="text-gray-700 whitespace-pre-wrap">{post.content}</p>
      <div className="flex justify-end space-x-3 mt-6">
        <button
          onClick={() => onEdit(post)}
          className="text-sm bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(post._id)}
          className="text-sm bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
