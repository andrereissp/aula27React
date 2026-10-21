import { useState } from "react"

function Crud() {
    const [lista, setLista] = useState([])
    const [textoDigitado, setTextoDigitado] = useState('')

    const [idEmEdicao, setidEmEdicao] = useState(null)

    const salvarItem = (e) => {
        e.preventDefault();
        if (!textoDigitado.trim()) return
        if (idEmEdicao !== null) {
            const listaAtualizada = lista.map((item) => {
                if (item.id === idEmEdicao) {
                    return { ...item, nome: textoDigitado }
                }
                return item
            })
            setLista(listaAtualizada)
            setidEmEdicao(null)
        } else {
            const novoItem = {
                id: Date.now(),
                nome: textoDigitado
            }
            setLista([...lista, novoItem])
        }
        setTextoDigitado('')
    }

    const prepararEdicao = (item) => {
        setTextoDigitado(item.nome)    //adiciona o nome do input
        setidEmEdicao(item.id)    // e guardo o id que estamos a editar
    }

    const removerItem = (idParaApagar) => {
        const listaFiltrada = lista.filter((item) => {
            return item.id !== idParaApagar
        })
        setLista(listaFiltrada)
    }

    return (
        <div>
            <h3>Meu primeiro C.R.U.D</h3>
            <form onSubmit={salvarItem}>
                <input type="text" placeholder="Digite aqui..." value={textoDigitado}
                    onChange={(e) => setTextoDigitado(e.target.value)} />
                <button type="submit">
                    {idEmEdicao !== null ? 'Atualizar' : 'Adicionar'}
                </button>
            </form>
            <ul>
                {lista.map((item) => {
                    return (
                        <li key={item.id}>
                            <span>{item.nome}</span>
                            <button
                                type="button"
                                onClick={() => { prepararEdicao(item); }}
                                style={{ marginLeft: '10px', marginRight: '5px' }}>Editar</button>

                            <button type="button"
                                onClick={() => { removerItem(item.id); }}
                                style={{ color: 'red' }}>Excluir</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default Crud


// import { useState } from "react";

// function Crud() {
//     const [lista, setLista] = useState([])
//     const [TextoDigitado, setTextoDigitado] = useState('')

//     const [idEmEdicao, setidEmEdicao] = useState(null)

//     const salvarItem = (e) => {
//         e.preventDefault();

//         if (!TextoDigitado.trim()) return

//         if (idEmEdicao !== null) {
//             const listAtualizada = lista.map((item) => {
//                 if (item.id === idEmEdicao) {
//                     return { ...item, nome: TextoDigitado }
//                 }
//                 return item
//             })
//             setLista(listAtualizada)
//             setidEmEdicao(null)

//         } else {
//             const novoItem = {
//                 id: Date.now(),
//                 nome: TextoDigitado
//             }
//             setLista([...lista, novoItem])
//         }
//         setTextoDigitado('')
//     }

//     const removerItem = (idParaApagar) => {
//         const listaFiltrada = lista.filter((item) => {
//             return item.id !== idParaApagar
//         })
//         setLista(listaFiltrada)
//     }
//     return (
//         <div>
//             <h3>Meu primeiro C.R.U.D</h3>
//             <form onSubmit={salvarItem}>
//                 <input type="text" placeholder="Digite aqui..." value={TextoDigitado} onChange={(e) => setTextoDigitado(e.target.value)} />
//                 <button type="submit">Adicionar</button>
//             </form>
//             <ul>
//                 {lista.map((item) => {
//                     return (
//                         <li key={item.id}>
//                             {item.nome}
//                             <button type="button" onClick={() => { removerItem(item.id) }}
//                                 style={{ color: 'red' }} > Excluir</button>
//                         </li>
//                     )
//                 })}
//             </ul>
//         </div >
//     )
// }
// export default Crud;