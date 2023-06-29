import { useEffect, useState } from "react"
import Button from "../Button"

import { BiTrash } from 'react-icons/bi'


export default function ProductCart({ item_carrinho, addToCart, removeFromCart, carrinho }) {

  const [verMais, setVerMais] = useState(false)
  const [item, setItem] = useState({
    nome: item_carrinho.nome,
    descricao: item_carrinho.descricao,
    imagem: item_carrinho.imagem,
    qntd: item_carrinho.qntd
  })

  useEffect(() => {
    setItem({
      nome: item_carrinho.nome,
      descricao: item_carrinho.descricao,
      imagem: item_carrinho.imagem,
      qntd: item_carrinho.qntd
    })
    console.log(item.qntd)
  }, [item_carrinho])

  return (
    <div className="flex w-full md:w-3/4 max-w-5xl h-36">
      <div className="flex w-full gap-4 rounded-lg bg-slate-100">
        <div className="w-1/3">
          <img src={item.imagem}
            className="rounded-lg object-cover w-full h-full self-start transition-all duration-300"
          />
        </div>
        <div className="flex flex-col w-1/3">
          <p className="m-2 line-clamp-1 text-center font-semibold text-gray-900">{item.nome}</p>
          <p className="line-clamp-3 text-justify font-normal px-2 text-gray-700">{item.descricao}</p>
          <div className="flex items-center justify-center">

            <Button className="" onClick={_ => removeFromCart(item_carrinho)}>-</Button>
            <p className="p-2 bg-red-200 text-black">{item.qntd}</p>
            <Button className="" onClick={_ => removeFromCart(item_carrinho)}>+</Button>
          </div>
        </div>
        <div className="w-1/3">

          <Button icon={<BiTrash />} className="" onClick={_ => removeFromCart(item_carrinho)} />
        </div>

      </div>
    </div>
  )
}