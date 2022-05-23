 const produc = [
        { id: 1, nombre: 'Apple Audífonos Airpods Pro',
        imagen:'https://i.blogs.es/e98029/024c1c95-5db4-46b3-8749-eac0336a8af6/450_1000.jpeg' ,
        categoria: 'celulares', precio: 1000 },
        { id: 2, 
        nombre: 'Iphone Smartphone 8 - 64Gb Plata',
        imagen:'https://i.ebayimg.com/images/g/LwYAAOSwc2FaGbN~/s-l1600.jpg', 
        categoria: 'celulares', 
        precio: 2000 },
        { id: 3, 
        nombre: 'Samsung Barra de Sonido - T450',
        imagen:'https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/pdp/09-09-2020/t450/gallery01-1600x1200.jpg?$product-details-jpg',
        categoria: 'sonido', 
        precio: 500 },

    ]

    export const Traerproductos =(cat) =>{
        return new Promise ((resolve,reject)=>{
            const producFiltro = produc.filter(
                (prod)=>prod.categoria === cat
            );
            setTimeout(()=>{
                if (cat === undefined){
                    resolve(produc);
                }else{
                    resolve(producFiltro)
                }
            },2000)
        })
    }

    

export default produc;





