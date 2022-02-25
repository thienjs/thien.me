const Badge = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-10">
      {/* :Small Badges */}
      <div className="flex items-center justify-start space-x-6">
        {/* Black badge = disabled */}
        <span className="inline-flex items-center justify-center rounded border-none bg-gray-200 py-0.5 px-2.5 text-xs font-medium text-gray-800">
          Disabled
        </span>
        {/* Blue badge = info */}
        <span className="inline-flex items-center justify-center rounded border-none bg-blue-100 py-0.5 px-2.5 text-xs font-medium text-blue-800">
          Info
        </span>
        {/* Green badge = success */}
        <span className="inline-flex items-center justify-center rounded border-none bg-green-100 py-0.5 px-2.5 text-xs font-medium text-green-800">
          Success
        </span>
        {/* Yellow badge = warning */}
        <span className="inline-flex items-center justify-center rounded border-none bg-yellow-100 py-0.5 px-2.5 text-xs font-medium text-yellow-800">
          Warning
        </span>
        {/* Red badge = error */}
        <span className="inline-flex items-center justify-center rounded border-none bg-red-100 py-0.5 px-2.5 text-xs font-medium text-red-800">
          Error
        </span>
        {/* Indigo badge = new */}
        <span className="inline-flex items-center justify-center rounded border-none bg-indigo-100 py-0.5 px-2.5 text-xs font-medium text-indigo-800">
          New
        </span>
      </div>

      {/* :Medium Badges */}
      <div className="flex items-center justify-start space-x-6">
        {/* Black badge = disabled */}
        <span className="inline-flex items-center justify-center rounded border-none bg-gray-200 py-1 px-5 text-sm font-medium text-gray-800">
          Disabled
        </span>
        {/* Blue badge = info */}
        <span className="inline-flex items-center justify-center rounded border-none bg-blue-100 py-1 px-5 text-sm font-medium text-blue-800">
          Info
        </span>
        {/* Green badge = success */}
        <span className="inline-flex items-center justify-center rounded border-none bg-green-100 py-1 px-5 text-sm font-medium text-green-800">
          Success
        </span>
        {/* Yellow badge = warning */}
        <span className="inline-flex items-center justify-center rounded border-none bg-yellow-100 py-1 px-5 text-sm font-medium text-yellow-800">
          Warning
        </span>
        {/* Red badge = error */}
        <span className="inline-flex items-center justify-center rounded border-none bg-red-100 py-1 px-5 text-sm font-medium text-red-800">
          Error
        </span>
        {/* Indigo badge = new */}
        <span className="inline-flex items-center justify-center rounded border-none bg-indigo-100 py-1 px-5 text-sm font-medium text-indigo-800">
          New
        </span>
      </div>

      {/* :Large Badges */}
      <div className="flex items-center justify-start space-x-6">
        {/* Black badge = disabled */}
        <span className="inline-flex items-center justify-center rounded border-none bg-gray-200 py-1 px-7 text-base font-semibold text-gray-800">
          Disabled
        </span>
        {/* Blue badge = info */}
        <span className="inline-flex items-center justify-center rounded border-none bg-blue-100 py-1 px-7 text-base font-semibold text-blue-800">
          Info
        </span>
        {/* Green badge = success */}
        <span className="inline-flex items-center justify-center rounded border-none bg-green-100 py-1 px-7 text-base font-semibold text-green-800">
          Success
        </span>
        {/* Yellow badge = warning */}
        <span className="inline-flex items-center justify-center rounded border-none bg-yellow-100 py-1 px-7 text-base font-semibold text-yellow-800">
          Warning
        </span>
        {/* Red badge = error */}
        <span className="inline-flex items-center justify-center rounded border-none bg-red-100 py-1 px-7 text-base font-semibold text-red-800">
          Error
        </span>
        {/* Indigo badge = new */}
        <span className="inline-flex items-center justify-center rounded border-none bg-indigo-100 py-1 px-7 text-base font-semibold text-indigo-800">
          New
        </span>
      </div>
    </div>
  )
}

export default Badge
