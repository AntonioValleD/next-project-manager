
function PurpleBtn(
  btnName,
  btnAction,
) {
  return (
    <button
      title={`${btnName ? btnName : 'PurpleBtn'}`}
      className="bg-purple-950 hover:bg-purple-800 rounded-sm h-8 py-2 px-2 text-l font-normal transition-all duration-75"
      onClick={() => btnAction ? btnAction() : console.log("Purple Button")}
    >
      {btnName ? btnName : "PurpleBtn"}
    </button>
  )
}

export default PurpleBtn