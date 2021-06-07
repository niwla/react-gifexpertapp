import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp =() => {

    //const categories = ['One Punch man', 'Samurai X','Dragon ball'];
    const [categories, setCategories] = useState(['One Punch man'])

    // const handleAdd = () =>{

    //   // setCategories(['HxH', ...categories] );

    //     setCategories (cats => [...cats, 'HxH']);

    // }
    

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={ setCategories}/>
            <hr></hr>



            <ol>    
                { 
                    categories.map( category => (
                        <GifGrid 
                        key= {category}
                        category = { category} 
                        />
                    ))
                }
            </ol>
        </>
    )


 }


 export default GifExpertApp;
