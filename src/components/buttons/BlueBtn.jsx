
function BlueBtn(
  btnName,
  btnAction,
) {
  return (
    <button
      title={`${btnName ? btnName : 'BlueBtn'}`}
      className="bg-blue-900 hover:bg-blue-700 rounded-sm h-8 py-2 px-2 text-l font-normal transition-all duration-75"
      onClick={() => btnAction ? btnAction() : console.log("Blue Button")}
    >
      {btnName ? btnName : "BlueBtn"}
    </button>
  )
}

export default BlueBtn