// React icons
import { IoMdClose } from "react-icons/io"


function TabButton({
  btnName,
  btnAction,
  closeAction,
  selectedStatus
}) {
  const currentTabs = [
    "P001",
    "P002",
    "P003",
    "P004"
  ]

  return (
    <div
      className="flex items-center justify-between"
    >
      <button
        title={`${btnName ? btnName : 'TabBtn'}`}
        className={`${selectedStatus ? 'bg-blue-800' : 'bg-blue-950'} flex items-center hover:bg-blue-800 rounded-sm h-8 py-2 px-2 text-l font-normal transition-all duration-75`}
        onClick={() => btnAction ? btnAction() : console.log("Tab Button")}
      >
        {btnName ? btnName : "TabBtn"}
      </button>

      <button
        title="Cerrar pestaña"
        className={`${selectedStatus ? 'bg-blue-800' : 'bg-blue-950'} flex items-center hover:bg-blue-800 rounded-sm h-8 py-2 px-2 text-l font-normal transition-all duration-75`}
        onClick={() => closeAction ? closeAction() : console.log("Close Tab")}
      >
        <IoMdClose />
      </button>
    </div>
  )
}

export default TabButton