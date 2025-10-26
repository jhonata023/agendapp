import { Navbar } from "../components/Navbar"
import { SearchBar } from "../components/SearchBar"
import { Conteudo } from "../components/Conteudo"
import { Cards } from "../components/Cards"
import { Footer } from "../components/Footer"
import { useState, useEffect } from "react"

interface IEmpresasProps {
  id: number,
  title: string,
  address: string,
  srcImg: string,
  rating: number,
  description: string,
}
export const Empresas = () => {
  let [empresas, setEmpresas] = useState<IEmpresasProps[]>([]);

  useEffect(() => {
    fetch('http://localhost:8080/empresas').then(response => response.json()).then(res => {
      setEmpresas(res)
    })
  }, [])

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar/>
      <div className="d-flex flex-column align-items-center pt-5">
        <SearchBar></SearchBar>
        <Conteudo>
          {empresas.map(empresa => (
            <Cards key={empresa.id} id={empresa.id} title={empresa.title} 
            address={empresa.address} srcImg={empresa.srcImg} rating={empresa.rating}/>
          ))}
        </Conteudo>
      </div>
      <Footer/>
    </div>
  )
}