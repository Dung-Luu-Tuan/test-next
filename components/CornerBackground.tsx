export default function CornerBackground() {
  return (
    <div>
      <div className="absolute top-[500px] w-[200px] h-[300px] rounded-full bg-gradient-to-br from-[#e0ffcc] to-[#d6ffdc] opacity-70 blur-2xl z-[-1]" />
      <div className="absolute bottom-[500px] right-0 w-[200px] h-[300px] rounded-full bg-gradient-to-br from-[#e0ffcc] to-[#d6ffdc] opacity-70 blur-2xl z-[-1]" />
    </div>
  );
}
