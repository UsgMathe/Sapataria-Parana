"use client"

import Button from "@/components/Button";
import MainPage from "@/components/MainPage";
import ProductCard from "@/components/ProductCard";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function Loja() {
    const sapatos = [
        {
            nome: "Sapato Brogue Mazuque",
            imagem: "/images/sapatos/sapato-brogue-mazuque.jpg",
            descricao: "Arremate seus visuais com muita elegância com este sapato Brogue. Confeccionado em couro, possui fino acabamento com recortes e perfuros característicos deste tipo de modelo. Conta também, com palmilha extra macia e cadarço para melhor ajuste. Sofisticado e confortável, é o sapato ideal para homens de bom gosto que prezam pela elegância e bem estar. Você pode combinar com calça alfaiataria ou sarja",
            preco: "R$52.99"
        },
        {
            nome: "Sapato de couro verde",
            imagem: "/images/sapatos/Sapatos_de_couro_verde.jpg",
            descricao: "",
            preco: "R$30.99"
        },
        {
            nome: "Sapato New Tradicional preto - 15465",
            imagem: "/images/sapatos/sapatoterapia-new-tradicional-preto-21421.jpg",
            descricao: "",
            preco: "R$98.85"
        },
        {
            nome: "Sapato New Tradicional - 21421",
            imagem: "/images/sapatos/sapato-brogue-mazuque.jpg",
            descricao: "",
            preco: "R$72.50"
        },
        {
            nome: "Sapato de couro",
            imagem: "/images/sapatos/Sapatos_de_couro_verde.jpg",
            descricao: "",
            preco: "R$30.99"
        },
        {
            nome: "Sapato brogue mazuque - 21421",
            imagem: "/images/sapatos/sapato-brogue-mazuque.jpg",
            descricao: "",
            preco: "R$72.50"
        },
    ]


    const [carrinho, setCarrinho] = useState([])

    const handleAddToCart = (sapato) => {
        setCarrinho([...carrinho, sapato])
    }

    useEffect(() => {
        Cookies.set('carrinho', JSON.stringify(carrinho))
        console.log(JSON.parse(Cookies.get('carrinho')))
    }, [carrinho])

    return (
        <MainPage>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 my-16 max-w-4xl">
                {
                    sapatos.map((sapato, index) =>
                        <ProductCard key={`${sapato.nome}-${index}`} sapato={sapato} addToCart={(sapato) => handleAddToCart(sapato)} />
                    )
                }

                {/* <div className="rounded-lg">
                    <img src={sapatos[2].imagem}
                        className="rounded-lg"   
                    />
                </div> */}
            </div>
        </MainPage>
    )
}