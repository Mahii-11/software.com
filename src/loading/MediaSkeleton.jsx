export default function MediaSkeleton() {
  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 animate-pulse">

        {/* Header skeleton */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="h-10 w-2/3 bg-slate-200 rounded-xl mx-auto mb-4"></div>
          <div className="h-5 w-3/4 bg-slate-200 rounded-lg mx-auto"></div>
        </div>

        {/* Featured video skeleton */}
        <div className="rounded-3xl overflow-hidden mb-20">
          <div className="w-full h-[400px] md:h-[550px] bg-slate-200 rounded-3xl"></div>

          {/* overlay skeleton */}
          <div className="absolute mt-[-140px] p-8 md:p-12 w-full">
            <div className="h-6 w-40 bg-slate-300 rounded-full mb-4"></div>
            <div className="h-10 w-2/3 bg-slate-300 rounded-lg mb-3"></div>
            <div className="h-4 w-1/3 bg-slate-300 rounded"></div>
          </div>
        </div>

        {/* Filters skeleton */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex gap-3 flex-wrap">
            <div className="h-10 w-20 bg-slate-200 rounded-xl"></div>
            <div className="h-10 w-24 bg-slate-200 rounded-xl"></div>
            <div className="h-10 w-28 bg-slate-200 rounded-xl"></div>
          </div>

          <div className="h-10 w-72 bg-slate-200 rounded-xl"></div>
        </div>

        {/* Grid skeleton */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-4">
              
              <div className="aspect-video bg-slate-200 rounded-2xl"></div>

              <div className="space-y-2">
                <div className="h-4 w-20 bg-slate-200 rounded"></div>
                <div className="h-5 w-full bg-slate-200 rounded"></div>
                <div className="h-4 w-2/3 bg-slate-200 rounded"></div>
              </div>

            </div>
          ))}
        </div>

        {/* footer skeleton */}
        <div className="mt-20 text-center border-t pt-16">
          <div className="h-6 w-1/3 bg-slate-200 rounded mx-auto mb-4"></div>
          <div className="h-4 w-1/2 bg-slate-200 rounded mx-auto mb-8"></div>

          <div className="max-w-md mx-auto flex gap-3">
            <div className="h-12 flex-1 bg-slate-200 rounded-xl"></div>
            <div className="h-12 w-28 bg-slate-200 rounded-xl"></div>
          </div>
        </div>

      </div>
    </div>
  );
}