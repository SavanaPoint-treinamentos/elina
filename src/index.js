// const name = 2
// const age = 25
// const maried = false
// profissao = "Software Developer"

// let person = {
//     name: {
//         firstName: "Elina",
//         lastName: "Tsovo"
//     },

//     age: 25,
//     job: "Backend Developer",
//     company: "SavanaPoint"
// }

// console.log(name)
// console.log(age)
// console.log(maried)
// if (typeof name === "string") {
//     console.log(name)
// } else {
//     console.log("KKKK, não é uma string!")
// }

// console.log(typeof person)

// let corlorlist ={
//  cores: {
//     color1: "vermelho",
//     color2: "vazul",
//     color3: "preto",
//  }   
// }

// console.log("a minha lista de cores é: ", corlorlist.cores)


// console.log(typeof `a minha lista de cores é:  ${corlorlist.cores.color1}`)

let colors = ["vermelho", "azul", "preto", "castanho"]

// for(let i = 0; colors.length > i; i++) {
//     console.log(colors[i])
// }


// for (let color of colors) {
//     console.log(color)
// }

// colors.map(color => console.log(color))
// colors.push("white")
// colors.shift(3)
// colors.forEach(color => console.log(color))

// console.log(colors.includes("azul"))

let students = [
    {
        id: 1,
        name: "Elina Tsovo",
        course: "Engenharia Informática"
    },

    {
        id: 2,
        name: "João Maera",
        course: "Engenharia Mecânica"
    },

    {
        id: 3,
        name: "Joana Tiago",
        course: "Engenharia Ambiente"
    },

    {
        id: 4,
        name: "Dércio Macau",
        course: "Engenharia Química"
    }
]

// students.map(student => console.log(student.course))


const student = students.find(student => student.id === 3)

if(students.includes(student.name) === true) {
    console.log(student.name)
} else {
    console.log("student not found")
}

//CODE ELINA

const familia= {
    tios: {
        paternos:{
            nome: "Ana",
            filhos: "3",
            conjige:"sou viuva"
        },

        maternos:{
            nome:"Carlos",
            filhos:"sem filhos",
            conjuge:"Vanda"

        }
    },

    netos:{
        maternos:{
            nome:"Bianca",
            filhos:"2",
            conjuge: "Jonas"
        },


        paternos:{
            nome:"Ana",
            filhos:"2",
            conjuge:"Pedro"

        }
    }

}

console.log(familia.netos.paternos.nome.includes("Ana"))

if (familia.tios.paternos.nome.includes("CARLOS") === familia.netos.paternos.nome.includes("Ana")){
    console.log("ALERTA: Temos nomes comuns dentro da família")
}
else{
    console.log("FIQUEM CALMOS:está tudo sob control")
}


//TRABALHANDO COM ARRAY

let numeros = [10,4,2,8,7,4,9]
//numeros.push(3)
numeros.shift()

console.log(numeros)


