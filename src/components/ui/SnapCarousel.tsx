export default function SnapCarousel() {
  return (
    <div className="flex snap-y  snap-mandatory overflow-x-auto px-10 py-10">
    <div className="snap-start bg-amber-200 w-full h-96 flex items-center justify-center text-8xl px-10 mx-10">1</div>
    <div className="snap-start bg-teal-200 w-full h-96 flex items-center justify-center text-8xl">2</div>
    <div className="snap-start bg-cyan-200 w-full h-96 flex items-center justify-center text-8xl">3</div>
    <div className="snap-start bg-fuchsia-200 w-full h-96 flex items-center justify-center text-8xl">4</div>
</div>
  )
}
