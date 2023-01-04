const compra = ["Locoto", "Arroz", "Fideo", "Carne", "Leche"]
console.log(compra)

compra.push("Aceite de Girasol")
console.log(compra)

compra.pop()
console.log(compra)

const peliculas = [
    {
        titulo: "El pianista",
        director: "M.V.G",
        fecha: new Date(2000, 2, 2)
    },
    {
        titulo: "El mundial",
        director: "A.C.D",
        fecha: new Date(2002, 1, 8)
    },
    {
        titulo: "El Barco",
        director: "Q.G.T",
        fecha: new Date(1997, 2, 11)
    }
]
console.log(peliculas)

const peliculasNuevas = peliculas.filter(pelicula => pelicula.fecha > new Date(2010, 0, 1))
console.log(peliculasNuevas)

const directores = peliculas.map(pelicula => {
    return pelicula.director
})
console.log(directores)

const titulos = peliculas.map(pelicula => {
    return pelicula.titulo
})
console.log(titulos)

const directores_titulos = directores.concat(titulos)
console.log(directores_titulos)

const directores_titulos_spread = [...directores, ...titulos]
console.log(directores_titulos_spread)