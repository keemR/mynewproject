import Header from '../../components/Header'
import Newsletter from '../../components/Newsletter'

export default function PostDetailPage({ params }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-4xl mx-auto p-4 md:p-8">
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Hero Image */}
          <div className="aspect-video relative">
            <img 
              src="/placeholder-image.jpg"
              alt="Offer details"
              className="object-cover w-full h-full"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full">
                {params.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">
              [Dynamic Post Title]
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
              <span>Category: {params.category}</span>
              <span>Valid until: [Dynamic Date]</span>
              <span>Views: [Dynamic Count]</span>
            </div>

            {/* Description */}
            <div className="prose max-w-none mb-8">
              <h2>About This Offer</h2>
              <p>[Detailed description]</p>

              <h2>How to Claim</h2>
              <ol>
                <li>Step 1: [Instructions]</li>
                <li>Step 2: [Instructions]</li>
                <li>Step 3: [Instructions]</li>
              </ol>

              <h2>Terms & Conditions</h2>
              <p>[Terms text]</p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <a 
                href="#"
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 text-center w-full sm:w-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                Claim Offer
              </a>
              
              <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
                </svg>
                Save for Later
              </button>
            </div>
          </div>
        </article>

        {/* Related Offers */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Add related PostCards here */}
          </div>
        </section>

        <Newsletter />
      </main>
    </div>
  )
} 