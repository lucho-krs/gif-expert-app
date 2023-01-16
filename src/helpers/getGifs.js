export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=LbxxqyykAmlxvshYyr2tr62xSE49pLk3&q=${ category }&limit=20`
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium

    }))

    console.log('gifs>>', gifs);

}