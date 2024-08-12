
function HeaderBtn(
    btnName,
    btnAction,
    btnTag
  ) {
    const selectedWindow = "projects"

    return (
      <button
        title={`${btnName ? btnName : 'HeaderBtn'}`}
        className={`${btnTag == selectedWindow ? 'bg-purple-800' : 'bg-purple-950'} hover:bg-purple-800 rounded-sm h-8 py-2 px-2 text-l font-normal transition-all duration-75`}
        onClick={() => btnAction ? btnAction() : console.log("Header Button")}
      >
        {btnName ? btnName : "HeaderBtn"}
      </button>
    )
  }
  
  export default HeaderBtn