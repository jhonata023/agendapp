import { AgendamentosModal } from "../components/AgendamentosModal";
import { Navbar } from "../components/Navbar"
import { Calendar, Clock, User } from "lucide-react";

import { useState, useEffect } from "react";

const getColor = (status: string) => {
    switch (status) {
        case 'Confirmado': return 'bg-success'
        case 'Pendente': return 'bg-warning'
        case 'Cancelado': return 'bg-danger'
    }
}

interface IAgendamentosProps {
    id: number,
    enterprise: string,
    service: string,
    professional: string,
    date: string,
    time: string,
    status: string,
    price: number,
    duration: number
}

export const Agendamentos = () => {
    const [selectedService, setSelectedService] = useState<IAgendamentosProps | undefined>(undefined);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [agendamentos, setAgendamentos] = useState<IAgendamentosProps[]>([]);

    useEffect(() => {fetch('http://localhost:8080/agendamentos').then(response => response.json()).then(res => setAgendamentos(res))},[]);
    

    const onClose = () => {
        setIsModalOpen(false);
    }

    return (
        <>
            <Navbar/>
            <div>
                <h1 className="text-center mt-4">Meus Agendamentos</h1>
                
                <div className="row justify-content-center m-0" style={{maxWidth: '100vw'}}>
                    {agendamentos.map(agendamento => (
                        <div key={agendamento.id} className="border rounded shadow-sm col-lg-3 col-md-4 col-sm-5 col-10 p-3 text-center my-4 mx-4">
                            <h5 className="text-primary">{agendamento.enterprise}</h5>
                            <div className="text-start p-3">
                                <p className="mb-4">Serviço: <b>{agendamento.service}</b></p>
                                <p><User size={16}/> {agendamento.professional}</p>
                                <p><Calendar size={16}/> {agendamento.date}</p>
                                <p><Clock size={16}/> {agendamento.time}</p>
                                <p className={`"rounded p-1 ${getColor(agendamento.status)} text-center rounded rounded"`}>{agendamento.status}</p>
                            </div>

                            <button className="btn btn-primary" onClick={() => {setSelectedService(agendamento); setIsModalOpen(true)}}>Ver Detalhes</button>
                        </div>
                    ))}
                </div>
            </div>

            {selectedService && isModalOpen &&(
                <AgendamentosModal onClose={onClose} service={selectedService}/>
            )}
        </>
    )
}