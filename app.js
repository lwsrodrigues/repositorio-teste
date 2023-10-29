const monstros = [
    {
    
        id: 1, 
        nome: 'Romeu',
        altura: 2,
        habilidades:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ex assumenda magnam blanditiis, provident veritatis explicabo veniam modi dignissimos odit similique animi officiis! Quibusdam odio et magni officia distinctio ducimus.',
        foto: 'https://robohash.org/Romeu'
    
    },
    {
    
        id: 2, 
        nome: 'Megamente',
        altura: 3,
        habilidades:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ex assumenda magnam blanditiis, provident veritatis explicabo veniam modi dignissimos odit similique animi officiis! Quibusdam odio et magni officia distinctio ducimus.',
        foto: 'https://robohash.org/megamente'
    
    },
    {
        id: 3, 
        nome: 'Bartho',
        altura: 7,
        habilidades:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ex assumenda magnam blanditiis, provident veritatis explicabo veniam modi dignissimos odit similique animi officiis! Quibusdam odio et magni officia distinctio ducimus.',
        foto: 'https://robohash.org/bartho'
    
    },
    {
    
        id: 4, 
        nome: 'ozzy',
        altura: 1.4,
        habilidades:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ex assumenda magnam blanditiis, provident veritatis explicabo veniam modi dignissimos odit similique animi officiis! Quibusdam odio et magni officia distinctio ducimus.',
        foto: 'https://robohash.org/ozzy'
    
    }
    
    ]

const secao = document.querySelector('.monstros')
const botao = document.querySelector('.btn')

botao.addEventListener('click', ()=>{
    document.documentElement.classList.toglle('dark')
})

const todosOsMonstros = monstros.map( monstro => {
     return `<div>
     <p>Nome: ${monstro.nome}</p>
     <p>Altura> ${monstro.altura}</p>
     <img src="${monstro.foto}">
     <p class"habilidades">Habilidades: ${monstro.habilidades}</p>
     </div>`

})

secao.innerHTML = todosOsMonstros