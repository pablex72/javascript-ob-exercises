const nombre = "Anthony"
const apellido = "Pablo"
const estudiante = nombre.concat(" ").concat(apellido)
console.log(estudiante)

const estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus)
const estudianteMinus = estudiante.toLowerCase()
console.log(estudianteMinus)

const estudianteLength = estudiante.length
console.log(estudianteLength)

const inicialNombre = nombre[0]
console.log(inicialNombre)

const finalApellido = apellido[apellido.length - 1]
console.log(finalApellido)

const estudianteSinEspacios = estudiante.replace(" ", "")
console.log(estudianteSinEspacios)

const nombreEnEstudiante = estudiante.includes(nombre)
console.log(nombreEnEstudiante);
