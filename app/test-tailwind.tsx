export default function TestTailwind() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">Tailwind Test Page</h1>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-blue-500 text-white p-4 rounded">
          Blue Box with Tailwind
        </div>
        <div className="bg-green-500 text-white p-4 rounded">
          Green Box with Tailwind
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Custom Colors Test</h2>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-foso-green text-white p-4 rounded">
          FOSO Green Box
        </div>
        <div className="bg-foso-blue text-white p-4 rounded">FOSO Blue Box</div>
      </div>
    </div>
  );
}
