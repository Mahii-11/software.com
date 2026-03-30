function TrustFeaturesSkeleton() {
  return (
    <section className="max-w-7xl mx-auto mt-16 text-center animate-pulse">
      
      {/* Title Skeleton */}
      <div className="h-10 w-2/3 mx-auto bg-gray-200 rounded mb-10"></div>

      <div className="grid sm:grid-cols-2 gap-y-6 gap-x-64 mt-14 px-8 sm:px-10 lg:px-32">
        
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-x-4 items-start text-left">
            
            {/* Icon Skeleton */}
            <div className="p-3 rounded-xl bg-gray-200 w-10 h-10 shrink-0"></div>

            {/* Text Skeleton */}
            <div className="w-full">
              <div className="h-4 w-1/2 bg-gray-200 rounded mb-2"></div>
              <div className="h-3 w-full bg-gray-200 rounded"></div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default TrustFeaturesSkeleton;