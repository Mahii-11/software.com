export default  function TrustedBySkeleton() {
  return (
    <section className="w-full bg-white py-4 overflow-hidden">
      {/* Heading */}
      <div className="text-center px-6 mb-10">
        <div className="h-3 w-28 mx-auto rounded-full bg-blue-100 mb-4" />

        <div className="h-10 w-80 max-w-[90%] mx-auto rounded-xl bg-gray-200" />

        <div className="mt-4 space-y-2">
          <div className="h-3 w-72 max-w-[80%] mx-auto rounded-full bg-gray-200" />
          <div className="h-3 w-56 max-w-[60%] mx-auto rounded-full bg-gray-200" />
        </div>
      </div>

      {/* Logo Cards */}
      <div className="flex gap-6 px-6 overflow-hidden">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="min-w-[160px] rounded-2xl border border-gray-100 bg-white shadow-sm px-8 py-6 flex flex-col items-center gap-4"
          >
            {/* Logo */}
            <div className="h-8 w-24 rounded-md bg-gray-200" />

            {/* Name */}
            <div className="h-3 w-20 rounded-full bg-gray-200" />
          </div>
        ))}
      </div>
    </section>
  );
}