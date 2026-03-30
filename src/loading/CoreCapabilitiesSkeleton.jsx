export default function CoreCapabilitiesSkeleton() {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-24 px-6 animate-pulse">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left Content */}
          <div>
            <div className="h-4 w-40 bg-blue-100 rounded mb-4"></div>

            <div className="space-y-3 mb-6">
              <div className="h-10 w-full bg-gray-200 rounded"></div>
              <div className="h-10 w-3/4 bg-gray-200 rounded"></div>
            </div>

            <div className="space-y-2 mb-8">
              <div className="h-4 w-full bg-gray-200 rounded"></div>
              <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
              <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
            </div>

            <div className="h-12 w-52 bg-blue-200 rounded-xl"></div>
          </div>

          {/* Right Image */}
          <div>
            <div className="w-full h-[400px] bg-gray-200 rounded-3xl"></div>
          </div>
        </div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="w-full h-80 bg-gray-200"></div>

              <div className="p-6 space-y-3">
                <div className="h-5 w-3/4 bg-gray-300 rounded"></div>
                <div className="h-4 w-full bg-gray-200 rounded"></div>
                <div className="h-4 w-5/6 bg-gray-200 rounded"></div>

                <div className="h-4 w-24 bg-blue-200 rounded mt-4"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}