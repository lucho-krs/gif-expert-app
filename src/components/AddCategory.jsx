import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState( 'Dragon Ball' )

    const onInputChange = ( event ) => {
        setInputValue( event.target.value )
    }

    const onSubmit = ( event ) => {

        event.preventDefault()
        const inputValueClean = inputValue.trim()
        if ( inputValueClean.length <= 1 ) return;
        
        onNewCategory( inputValueClean )
        setInputValue('')

    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />  
        </form>
    )
}
