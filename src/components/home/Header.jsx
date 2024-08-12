"use client"

// Components
import HeaderBtn from "../buttons/HeaderBtn"


function Header() {
  return (  
    <div
      className="flex justify-between"
    >
      <HeaderBtn
        btnName="Inicio"
        btnAction={() => alert("Inicio")}
        selectedStatus={true}
      />

      <div
        className="flex gap-x-1"
      >
        <HeaderBtn
          btnName="Proyectos"
          btnAction={() => alert("Proyectos")}
          selectedStatus={true}
        />
        <HeaderBtn
          btnName="Producción"
          btnAction={() => alert("Producción")}
          selectedStatus={false}
        />
      </div>
    </div>
  )
}

export default Header