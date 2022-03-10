 // encode uri se encarga de eliminar espacios y dejar sólo el texto
  // esta funcion va a buscar las img con la categoria que se recibe en el input 
  //y las procesa para luego guardarlas en el gifs
  export const getGifts = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=o5t4p5nqpayWteD0OCvggnMVFsnFkXRF`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => {
        return {
            id:img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}