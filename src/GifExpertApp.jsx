import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['Dragon ball', 'Demon Slayer'])

    const onAddCategory = () => {

        // console.log('Categories' ,AddCategory.inputValue);
        // console.log('setCategories' ,setCategories);
        // setCategories([ ...categories, 'Naturo' ])

    }

    return (
        <>
            {/* Titulo */}
            <h1> GifExpertApp! </h1>

            {/* Input */}
            <AddCategory setCategories={ setCategories }/>

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
