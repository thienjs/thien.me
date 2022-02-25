import { FaCheckCircle, FaTrashAlt } from 'react-icons/fa'
interface ControlProps {
  clearCanvas: () => void
  color: string
  setColor: (color: string) => void
}
const colorList = [
  'rgba(255, 0, 0, 0.5)',
  'rgba(0, 255, 0, 0.5)',
  'rgba(0, 0, 255, 0.5)',
]
const CanvasControl = ({ clearCanvas, color, setColor }: ControlProps) => {
  return (
    <div className="dark:bg-light fixed top-[10%] right-1 z-50 flex items-center rounded-full bg-gray-100 p-2 md:top-[unset]">
      <div className="flex flex-col space-y-2">
        {colorList.map((data, key) => (
          <button
            onClick={() => setColor(data)}
            className="h-8 w-8 rounded-full"
            key={key}
            style={{ backgroundColor: data }}
            aria-label="Change brush color"
          >
            {data === color && <FaCheckCircle className="mx-auto" />}
          </button>
        ))}
        <button
          onClick={() => {
            clearCanvas()
          }}
          className="dark:bg-dark h-8 w-8 rounded-full bg-gray-200"
          aria-label="Clear doodle"
        >
          <FaTrashAlt className="mx-auto" />
        </button>
      </div>
    </div>
  )
}

export default CanvasControl
