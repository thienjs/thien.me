import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from '@heroicons/react/solid'

const Alert = () => {
  return (
    <div className="flex flex-col space-y-5">
      {/* :SUCCESS ALERT */}
      <div className="flex max-w-4xl rounded-lg border border-green-300 bg-green-100 p-4">
        {/* ::Icon */}
        <span className="flex-shrink-0 text-green-500">
          <CheckCircleIcon className="h-6 w-6" />
        </span>
        {/* ::Content */}
        <div className="ml-3 flex flex-col items-start space-y-2 text-sm">
          {/* :::alert title */}
          <h3 className="font-semibold text-green-800">Well done!</h3>
          {/* :::alert message */}
          <p className="font-medium text-green-600 antialiased">
            You successfully read this important alert message.
          </p>
        </div>
      </div>

      {/* :ERROR ALERT */}
      <div className="flex max-w-4xl rounded-lg border border-red-300 bg-red-100 p-4">
        {/* ::Icon */}
        <span className="flex-shrink-0 text-red-500">
          <XCircleIcon className="h-6 w-6" />
        </span>
        {/* ::Content */}
        <div className="ml-3 flex flex-col items-start space-y-2 text-sm">
          {/* :::alert title */}
          <h3 className="font-semibold text-red-800">Oh snap!</h3>
          {/* :::alert message */}
          <p className="font-medium text-red-600 antialiased">
            Change a few things up and try submitting again.
          </p>
        </div>
      </div>

      {/* :INFO ALERT */}
      <div className="flex max-w-4xl rounded-lg border border-blue-300 bg-blue-100 p-4">
        {/* ::Icon */}
        <span className="flex-shrink-0 text-blue-500">
          <InformationCircleIcon className="h-6 w-6" />
        </span>
        {/* ::Content */}
        <div className="ml-3 flex flex-col items-start space-y-2 text-sm">
          {/* :::alert title */}
          <h3 className="font-semibold text-blue-800">Head up!</h3>
          {/* :::alert message */}
          <p className="font-medium text-blue-600 antialiased">
            This alert needs your attention, but it is not super important.
          </p>
        </div>
      </div>

      {/* :WARNING ALERT */}
      <div className="flex max-w-4xl rounded-lg border border-yellow-300 bg-yellow-100 p-4">
        {/* ::Icon */}
        <span className="flex-shrink-0 text-yellow-500">
          <ExclamationCircleIcon className="h-6 w-6" />
        </span>
        {/* ::Content */}
        <div className="ml-3 flex flex-col items-start space-y-2 text-sm">
          {/* :::alert title */}
          <h3 className="font-semibold text-yellow-800">Warning!</h3>
          {/* :::alert message */}
          <p className="font-medium text-yellow-600 antialiased">
            Better check this by yourself, it is not looking too good.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Alert
