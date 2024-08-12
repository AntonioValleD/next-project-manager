
function GreenBtn(
  btnName,
  btnAction,
) {
  return (
    <button
      title={`${btnName ? btnName : 'GreenBtn'}`}
      className="bg-green-900 hover:bg-green-700 rounded-sm h-8 py-2 px-2 text-l font-normal transition-all
        duration-75"
      onClick={() => btnAction ? btnAction() : console.log("Green Button")}
    >
      {btnName ? btnName : "GreenBtn"}
    </button>
  )
}

export default GreenBtn