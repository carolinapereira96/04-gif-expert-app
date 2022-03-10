import React,{useState, useEffect} from 'react'
import { GifGriditem } from './GifGriditem';
import { getGifts } from '../helpers/getGifts';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

  
 // renonmbrar data por images
  const {data:images,loading}=useFetchGifs(category);
  
      
  return (
    <>
    <h3 className="animate__animated animate__fadeIn">{category}</h3>
    {loading && <p className="animate__animated animate__flash">Loading..</p>}
    <div className='card-grid'>
         { 
             images.map(img => (
               <GifGriditem 
                    key={img.id}
                    {...img} // trae cada propiedad de la img como independiente
               />
            ))
       }
      
    </div>
    </>
  )
}
