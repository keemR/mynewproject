export default function CategoryPage({ params }) {
  const { category } = params

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 capitalize">{category}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Category content will go here */}
      </div>
    </div>
  )
} 