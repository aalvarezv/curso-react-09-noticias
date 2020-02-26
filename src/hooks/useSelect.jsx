import React, {useState} from 'react'


const useSelect = (stateInicial, opciones) => {
    

    const [state, actualizarState] = useState(stateInicial)

    const SelectNoticias = () => {
        return (
            <select
                className="browser-default"
                onChange={e => actualizarState(e.target.value)}
                value={state}
            >
             
             {//return implicito, todo lo que esta en el parentesis despues del arrow es el return.
              opciones.map(opcion => (
                  <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
              ))
             }
            </select>
        )
    }

    return [state, SelectNoticias]

}
 
export default useSelect;