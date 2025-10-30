import { Conteudo } from "../components/Conteudo";
import { Navbar } from "../components/Navbar"
import { useState, useEffect } from "react";
import { Edit, Trash2, Pause } from "lucide-react";

interface IServicesProps {
    id: number, 
    name: string, 
    price: number, 
    duration: number, 
    enterprise: number, 
    professionals: []
}
interface IProfessionals {
    id: number, 
    name: string,
}
interface IEnterprise {
    title: string,
    srcImg: string,
    description: string,
}

export const Home = () => {
    const [optionSelected, setOptionSelected] = useState('option1');
    const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => setOptionSelected(e.target.value);
    let [services, setServices] = useState<IServicesProps[]>([]);
    let [professionals, setProfessionals] = useState<IProfessionals[]>([]);
    let [enterprise, setEnterprise] = useState<IEnterprise | undefined>(undefined);

    const [title, setTitle] = useState(enterprise?.title);
    const [srcImg, setSrcImg] = useState(enterprise?.srcImg);
    const [description, setDescription] = useState(enterprise?.description);

    useEffect(() => {
        if (enterprise?.title) setTitle(enterprise.title)
        if (enterprise?.srcImg) setSrcImg(enterprise.srcImg)
        if (enterprise?.description) setDescription(enterprise.description)
    }, [enterprise])
    useEffect(() => {
        fetch('http://localhost:8080/services', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({enterpriseId: 1})
        })
            .then(response => response.json())
            .then(res => {setServices(res)})
    },[]);
    useEffect(() => {
        fetch('http://localhost:8080/professionals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({enterpriseId: 1})
        })
            .then(response => response.json())
            .then(res => {setProfessionals(res)})
    },[]);
    useEffect(() => {
        fetch('http://localhost:8080/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({enterpriseId: 1})
        })
            .then(response => response.json())
            .then(res => {setEnterprise(res); console.log(res)})
    },[]);
    
    return (
        <>
            <Navbar/>
            <Conteudo>
                    <div className="btn-group btn-group-toggle shadow p-2">
                        <label className={`btn btn-light ${optionSelected === 'option1' ? 'active':''}`}>
                            <input type="radio" name="options" id="option1" value="option1" autoComplete="off" checked={optionSelected === 'option1'} 
                                onChange={handleOptionChange}/> Serviços
                        </label>
                        <label className={`btn btn-light ${optionSelected === 'option2' ? 'active':''}`}>
                            <input type="radio" name="options" id="option2" value="option2" autoComplete="off" checked={optionSelected === 'option2'}
                                onChange={handleOptionChange}/> Horários
                        </label>
                        <label className={`btn btn-light ${optionSelected === 'option3' ? 'active':''}`}>
                            <input type="radio" name="options" id="option3" value="option3" autoComplete="off" checked={optionSelected === 'option3'}
                                onChange={handleOptionChange}/> Profissionais
                        </label>
                        <label className={`btn btn-light ${optionSelected === 'option4' ? 'active':''}`}>
                            <input type="radio" name="options" id="option4" value="option4" autoComplete="off" checked={optionSelected === 'option4'}
                                onChange={handleOptionChange}/> Perfil
                        </label>
                    </div>
                    {optionSelected === 'option1' && (
                        <div className="border rounded p-md-4 p-sm-2 shadow">
                            <h3 className="mt-3 text-center">Serviços da Empresa</h3>

                            {services.map(service => (
                                <div key={service.id} className="border rounded p-2 mt-3 d-flex justify-content-between">
                                    <div>
                                        <h5>{service.name}</h5>
                                        <div className="d-flex justify-content-around">
                                            <p className="m-0">R$ {service.price}</p>
                                            <p className="text-muted m-0">{service.duration} min</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="btn btn-light"><Edit size={16} /></button>
                                        <button className="btn btn-light m-2"><Pause size={16} /></button>
                                        <button className="btn btn-danger"><Trash2 size={16} /></button>
                                    </div>
                                </div>
                            ))}
                            

                            <div className="p-3 mt-4 rounded border row" style={{backgroundColor: '#dae0e5'}}>
                                <div className="col-12 col-sm-6 col-md-3 m-1 m-sm-0">
                                    <input type="text" className="form-control" placeholder="Novo Serviço"/>
                                </div>
                                <div className="col-12 col-sm-6 col-md-3 m-1 m-sm-0">
                                    <input type="text" className="form-control" placeholder="Preço"/>
                                </div>
                                <div className="col-12 col-sm-6 col-md-3 m-1 m-sm-0">
                                    <input type="text" className="form-control" placeholder="Duração - (min)"/>
                                </div>
                                <div className="col-12 col-sm-6 col-md-3 m-1 m-sm-0 text-center">
                                    <button className="btn btn-primary">Adicionar</button>
                                </div>
                            </div>
                        </div>
                    )}
                    {optionSelected === 'option2' && (
                        <div className="border rounded shadow">
                            <h3 className="text-center mt-3">Horário de atendimento</h3>

                            <div className="row p-2 justify-content-center">
                                <div className="col-lg-3 col-md-4 col-sm-12 p-2">
                                    <div className="rounded border p-3 col-12">
                                        <div className="d-flex">
                                            <h6 className="text-center w-100" style={{marginRight: 'auto'}}>Dom</h6>
                                            <button className="btn btn-secondary">+</button>
                                        </div>
                                        <input type="text" name="" id="" className="text-center mt-1 form-control" placeholder="Fechado"/>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-12 p-2">
                                    <div className="rounded border p-3 col-12">
                                        <div className="d-flex justify-content-around">
                                            <h6 className="text-center w-100" style={{marginRight: 'auto'}}>Seg</h6>
                                            <button className="btn btn-secondary">+</button>
                                        </div>
                                        <input type="text" name="" id="" className="text-center mt-1 form-control" placeholder="08:00 - 18:00"/>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-12 p-2">
                                    <div className="rounded border p-3 col-12">
                                        <div className="d-flex justify-content-around">
                                            <h6 className="text-center w-100" style={{marginRight: 'auto'}}>Ter</h6>
                                            <button className="btn btn-secondary">+</button>
                                        </div>
                                        <input type="text" name="" id="" className="text-center mt-1 form-control" placeholder="08:00 - 18:00"/>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-12 p-2">
                                    <div className="rounded border p-3 col-12">
                                        <div className="d-flex justify-content-around">
                                            <h6 className="text-center w-100" style={{marginRight: 'auto'}}>Qua</h6>
                                            <button className="btn btn-secondary">+</button>
                                        </div>
                                        <input type="text" name="" id="" className="text-center mt-1 form-control" placeholder="08:00 - 18:00"/>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-12 p-2">
                                    <div className="rounded border p-3 col-12">
                                        <div className="d-flex justify-content-around">
                                            <h6 className="text-center w-100" style={{marginRight: 'auto'}}>Qui</h6>
                                            <button className="btn btn-secondary">+</button>
                                        </div>
                                        <input type="text" name="" id="" className="text-center mt-1 form-control" placeholder="08:00 - 18:00"/>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-12 p-2">
                                    <div className="rounded border p-3 col-12">
                                        <div className="d-flex justify-content-around">
                                            <h6 className="text-center w-100" style={{marginRight: 'auto'}}>Sex</h6>
                                            <button className="btn btn-secondary">+</button>
                                        </div>
                                        <input type="text" name="" id="" className="text-center mt-1 form-control" placeholder="08:00 - 18:00"/>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-12 p-2">
                                    <div className="rounded border p-3 col-12">
                                        <div className="d-flex justify-content-around">
                                            <h6 className="text-center w-100" style={{marginRight: 'auto'}}>Sáb</h6>
                                            <button className="btn btn-secondary">+</button>
                                        </div>
                                        <input type="text" name="" id="" className="text-center mt-1 form-control" placeholder="09:00 - 13:00"/>
                                    </div>
                                </div>
                                
                                <button className="btn btn-success m-3">Salvar</button>
                            </div>

                        </div>
                    )}
                    {optionSelected === 'option3' && (
                        <div className="border rounded shadow">
                            <h3 className="text-center mt-3">Equipe de Profissionais</h3>

                            <div className="mt-4">
                                {professionals.map(professional => (
                                    <div key={professional.id} className="border rounded p-3 m-2 d-flex justify-content-between align-items-center">
                                        <h6>{professional.name}</h6>
                                        <button className="btn btn-light">Editar</button>
                                    </div>
                                ))}
                            </div>

                            <button className="btn btn-primary m-3">Adicionar Profissional</button>
                            
                        </div>
                    )}
                    {optionSelected === 'option4' && (
                        <div className="border rounded shadow p-3">
                            <h3 className="text-center mb-4">Perfil da Empresa</h3>
                            <div>
                                <label htmlFor="title">Nome da empresa</label>
                                <input type="text" name="title" id="" className="form-control m-2" placeholder="Nome da Empresa" 
                                value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setTitle(e.target.value)}}/>
                                <label htmlFor="srcImg">URL da imagem</label>
                                <input type="text" name="srcImg" id="" className="form-control m-2" placeholder="URL da imagem" 
                                value={srcImg} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setSrcImg(e.target.value)}}/>
                                <label htmlFor="description">Descrição</label>
                                <input type="text" name="description" id="" className="form-control m-2" placeholder="Descrição da empresa" 
                                value={description} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setDescription(e.target.value)}}/>
                            </div>
                            <button className="btn btn-success">Salvar</button>
                        </div>
                    )}
            </Conteudo>
        </>
    )
}