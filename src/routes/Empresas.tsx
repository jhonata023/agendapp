import { Navbar } from "../components/Navbar"
import { SearchBar } from "../components/SearchBar"
import { Conteudo } from "../components/Conteudo"
import { Cards } from "../components/Cards"
import { Footer } from "../components/Footer"
import React, { useState, useEffect } from "react"

interface IEnterprisesProps {
  id: number,
  title: string,
  address: string,
  srcImg: string,
  rating: number,
  description: string,
}

export const Empresas = () => {
  let [enterprises, setEnterprises] = useState<IEnterprisesProps[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [clientCity, setClientCity] = useState('Belo Horizonte')

  const newValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const enterprisesFilter = enterprises.filter(newEnterprises => {
    return (newEnterprises.title.toLowerCase().includes(inputValue.toLowerCase()))
  })

  useEffect(() => {
    fetch('http://localhost:8080/empresas', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({city: clientCity})
    }).then(response => response.json()).then(res => {
      setEnterprises(res)
    })
  }, [clientCity])

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar/>
      <div className="d-flex flex-column align-items-center pt-5">
        <div className="d-flex justify-content-center pl-5 pr-5 pb-4" style={{minWidth: '100%'}}>
          <label htmlFor="selectCity">Selecione uma cidade </label>
          <select name="selectCity" id="" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setClientCity(e.target.value)}
          className="custom-select ml-4" style={{maxWidth: '50%'}} value={clientCity}>
            <option value="Belo Horizonte">Belo Horizonte</option>
            <option value="São Paulo">São Paulo</option>
            <option value="Campinas">Campinas</option>
          </select>
        </div>
        <SearchBar inputValue={inputValue} newValue={newValue}></SearchBar>
        <Conteudo>
          {inputValue !== '' && enterprisesFilter.slice(0,5).map((empresa) => (
            <Cards key={empresa.id} id={empresa.id} title={empresa.title} 
            address={empresa.address} srcImg={empresa.srcImg} rating={empresa.rating}/>
          ))}
        </Conteudo>
      </div>
      <Footer/>
    </div>
  )
}