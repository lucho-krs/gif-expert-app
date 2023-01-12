import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['Dragon ball', 'Demon Slayer'])

    const onAddCategory = ( newCategory ) => {

        setCategories([ newCategory, ...categories ])

    }

    return (
        <>
            {/* Titulo */}
            <h1> GifExpertApp! </h1>

            {/* Input */}
            <AddCategory onNewCategory={ onAddCategory }/>

            {/* Listado de Gif */}

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
