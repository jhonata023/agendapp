import { Navbar } from "../components/Navbar";
import { BarChart, Calendar, UserCheck, Briefcase } from "lucide-react";
import { ResponsiveContainer, BarChart as Chart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";

export const Relatorios = () => {
    const [dadosMensais] = useState([
        { mes: "Jan", agendamentos: 35 },
        { mes: "Fev", agendamentos: 42 },
        { mes: "Mar", agendamentos: 50 },
        { mes: "Abr", agendamentos: 47 },
        { mes: "Mai", agendamentos: 61 },
        { mes: "Jun", agendamentos: 55 },
    ]);

    const [agendamentos, setAgendamentos] = useState([]);

    useEffect(() => {fetch('http://localhost:8080/agendamentos').then(response => response.json()).then(res => setAgendamentos(res))},[]);

    return (
        <>
        <div className="min-vh-100 d-flex flex-column">
            <Navbar/>
            <h2 className="text-muted text-center mt-4">Relatórios da Empresa</h2>

            <div className="row justify-content-center pl-3 pr-3 mt-3 mb-3 ml-0 mr-0 text-center">
                <div className="col-lg-3 col-12 col-sm-6 p-1">
                    <div className="col-12 shadow border rounded p-3">
                        <Calendar className="text-primary mb-2" size={32} />
                        <p className="text-muted">Total de Agendamentos</p>
                        <h5 className="text-primary"><b>{agendamentos.length}</b></h5>
                    </div>
                </div>
                <div className="col-lg-3 col-12 col-sm-6 p-1">
                    <div className="col-12 shadow border rounded p-3">
                    <UserCheck className="text-primary mb-2" size={32} />
                    <p className="text-muted">Profissionais Ativos</p>
                    <h5 className="text-primary"><b>2</b></h5>
                    </div>
                </div>
                <div className="col-lg-3 col-12 col-sm-6 p-1">
                    <div className="col-12 shadow border rounded p-3">
                    <Briefcase className="text-primary mb-2" size={32} />
                    <p className="text-muted">Serviços Oferecidos</p>
                    <h5 className="text-primary"><b>7</b></h5>
                    </div>
                </div>
                <div className="col-lg-3 col-12 col-sm-6 p-1">
                    <div className="col-12 shadow border rounded p-3">
                    <BarChart className="text-primary mb-2" size={32} />
                    <p className="text-muted">Cancelamentos</p>
                    <h5 className="text-primary"><b>15</b></h5>
                    </div>
                </div>
            </div>

            <div className="p-3" style={{maxWidth: '100%'}}>
                <div className="bg-light border rounded shadow">
                    <h3 className="text-muted text-center">Agendamentos por Mês</h3>
                    <ResponsiveContainer width="100%" height={300}>
                    <Chart data={dadosMensais}>
                        <XAxis dataKey="mes" stroke="#94a3b8" />
                        <YAxis stroke="#94a3b8" />
                        <Tooltip cursor={{ fill: 'rgba(0,0,0,0.05)' }} />
                        <Bar dataKey="agendamentos" fill="#2563eb" radius={[8, 8, 0, 0]} />
                    </Chart>
                    </ResponsiveContainer>
                </div>
            </div>
            <Footer/>
        </div>
        </>
    )
}