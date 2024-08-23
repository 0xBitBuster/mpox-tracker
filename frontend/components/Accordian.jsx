import React, { createContext, useContext, useEffect, useRef, useState } from "react";

const AccordianContext = createContext()

export function AccordianItem({ children, value, title, ...props }) {
  const { selected, setSelected } = useContext(AccordianContext)
  const ref = useRef(null)
  const open = selected === value

  return (
    <li className="border-b border-gray-500" {...props}>
      <header role="button" onClick={() => setSelected(open ? null : value)} className="flex justify-between items-center py-4 pr-4 font-medium text-lg">
        {title}
        <p className={`text-2xl text-honey transition-transform ${open ? "rotate-45" : ""}`}>+</p>
      </header>

      <div className="overflow-y-hidden transition-all" style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}>
        <div className="pb-4" ref={ref}>{children}</div>
      </div>
    </li>
  )
}

export default function Accordian({ children, value, onChange, ...props }) {
  const [selected, setSelected] = useState(value)

  useEffect(() => {
    if (onChange)
      onChange(selected)
  }, [selected])

  return (
    <ul {...props}>
      <AccordianContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordianContext.Provider>
    </ul>
  );
}
