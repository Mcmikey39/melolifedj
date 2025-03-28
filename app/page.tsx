export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="bg-gray-800 h-[33rem]">
        <div className="max-w-screen-2xl mx-auto">
          <div>
            <h1 className="text-4xl font-bold text-center">Header</h1>
          </div>
        </div>
      </header>

      {/* Music */}
      <div className="h-[35rem] bg-gray-400">
        <div>
          <h2 className="text-2xl font-bold text-center ">Music</h2>
        </div>
      </div>

      {/* About */}
      <div className="h-[35rem] bg-gray-200">
        <div>
          <h2 className="text-2xl font-bold text-center">About</h2>
        </div>
      </div>

      {/* Footer */}
    </>
  );
}
