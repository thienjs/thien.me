export default function SnapCarousel() {
  return (
    <div className="flex snap-y  snap-mandatory overflow-x-auto px-10 py-10">
      <div className="mx-10 flex h-96 w-full snap-start items-center justify-center bg-amber-200 px-10 text-8xl">
        1
      </div>
      <div className="flex h-96 w-full snap-start items-center justify-center bg-teal-200 text-8xl">
        2
      </div>
      <div className="flex h-96 w-full snap-start items-center justify-center bg-cyan-200 text-8xl">
        3
      </div>
      <div className="flex h-96 w-full snap-start items-center justify-center bg-fuchsia-200 text-8xl">
        4
      </div>
    </div>
  )
}
