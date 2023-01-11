import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = ({ cateogry }) => {

    const [categories, setCategories] = useState(['Dragon ball', 'Demon Slayer'])

    const onAddCategory = () => {

        setCategories([ ...categories, 'Naturo' ])

    }

    return (
        <>
            {/* Titulo */}
            <h1> GifExpertApp! </h1>

            {/* Input */}
            <AddCategory />

            {/* Listado de Gif */}
            <button onClick={ onAddCategory }>Agregar</button>
            <ol>
                {
                    categories.map( category => {
                        return <li key={ category }>{ category }</li>
                    })
                }
            </ol>
        </>
    )

}
