
const Badge = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center space-y-10">

      {/* :Small Badges */}
      <div className="flex justify-start items-center space-x-6">
        {/* Black badge = disabled */}
        <span className="inline-flex justify-center items-center py-0.5 px-2.5 border-none rounded bg-gray-200 text-xs text-gray-800 font-medium">Disabled</span>
        {/* Blue badge = info */}
        <span className="inline-flex justify-center items-center py-0.5 px-2.5 border-none rounded bg-blue-100 text-xs text-blue-800 font-medium">Info</span>
        {/* Green badge = success */}
        <span className="inline-flex justify-center items-center py-0.5 px-2.5 border-none rounded bg-green-100 text-xs text-green-800 font-medium">Success</span>
        {/* Yellow badge = warning */}
        <span className="inline-flex justify-center items-center py-0.5 px-2.5 border-none rounded bg-yellow-100 text-xs text-yellow-800 font-medium">Warning</span>
        {/* Red badge = error */}
        <span className="inline-flex justify-center items-center py-0.5 px-2.5 border-none rounded bg-red-100 text-xs text-red-800 font-medium">Error</span>
        {/* Indigo badge = new */}
        <span className="inline-flex justify-center items-center py-0.5 px-2.5 border-none rounded bg-indigo-100 text-xs text-indigo-800 font-medium">New</span>
      </div>
      



      {/* :Medium Badges */}
      <div className="flex justify-start items-center space-x-6">
        {/* Black badge = disabled */}
        <span className="inline-flex justify-center items-center py-1 px-5 border-none rounded bg-gray-200 text-sm text-gray-800 font-medium">Disabled</span>
        {/* Blue badge = info */}
        <span className="inline-flex justify-center items-center py-1 px-5 border-none rounded bg-blue-100 text-sm text-blue-800 font-medium">Info</span>
        {/* Green badge = success */}
        <span className="inline-flex justify-center items-center py-1 px-5 border-none rounded bg-green-100 text-sm text-green-800 font-medium">Success</span>
        {/* Yellow badge = warning */}
        <span className="inline-flex justify-center items-center py-1 px-5 border-none rounded bg-yellow-100 text-sm text-yellow-800 font-medium">Warning</span>
        {/* Red badge = error */}
        <span className="inline-flex justify-center items-center py-1 px-5 border-none rounded bg-red-100 text-sm text-red-800 font-medium">Error</span>
        {/* Indigo badge = new */}
        <span className="inline-flex justify-center items-center py-1 px-5 border-none rounded bg-indigo-100 text-sm text-indigo-800 font-medium">New</span>
      </div>
      



      {/* :Large Badges */}
      <div className="flex justify-start items-center space-x-6">
        {/* Black badge = disabled */}
        <span className="inline-flex justify-center items-center py-1 px-7 border-none rounded bg-gray-200 text-base text-gray-800 font-semibold">Disabled</span>
        {/* Blue badge = info */}
        <span className="inline-flex justify-center items-center py-1 px-7 border-none rounded bg-blue-100 text-base text-blue-800 font-semibold">Info</span>
        {/* Green badge = success */}
        <span className="inline-flex justify-center items-center py-1 px-7 border-none rounded bg-green-100 text-base text-green-800 font-semibold">Success</span>
        {/* Yellow badge = warning */}
        <span className="inline-flex justify-center items-center py-1 px-7 border-none rounded bg-yellow-100 text-base text-yellow-800 font-semibold">Warning</span>
        {/* Red badge = error */}
        <span className="inline-flex justify-center items-center py-1 px-7 border-none rounded bg-red-100 text-base text-red-800 font-semibold">Error</span>
        {/* Indigo badge = new */}
        <span className="inline-flex justify-center items-center py-1 px-7 border-none rounded bg-indigo-100 text-base text-indigo-800 font-semibold">New</span>
      </div>

    </div>
  )
}

export default Badge
