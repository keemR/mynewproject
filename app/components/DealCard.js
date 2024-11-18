export function DealCard({ deal }) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4">
      <div className="relative aspect-video mb-4">
        <img
          src={deal.image}
          alt={deal.title}
          className="rounded-lg object-cover w-full h-full"
        />
        {deal.discount && (
          <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold">
            {deal.discount}% OFF
          </span>
        )}
      </div>

      <h2 className="text-xl font-semibold mb-2 line-clamp-2">{deal.title}</h2>
      <p className="text-gray-600 mb-4 line-clamp-3">{deal.description}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-green-600 font-bold">${deal.price}</span>
          {deal.originalPrice && (
            <span className="text-gray-400 line-through">${deal.originalPrice}</span>
          )}
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Get Deal
        </button>
      </div>
    </div>
  )
} 