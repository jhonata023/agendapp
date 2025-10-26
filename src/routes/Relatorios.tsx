import { Navbar } from "../components/Navbar";
import { BarChart, Calendar, UserCheck, Briefcase } from "lucide-react";
import { ResponsiveContainer, BarChart as Chart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";

interface IServices {
    id: number,
    name: string,
    price: number,
    duration: number,
    enterprise: number,
    professionals: number[]
}

interface IReports {
    schedulings: Date[],
    professionals: number,
    services: IServices[],
    canceleds: number
}

interface IMonthsData {
    month: string,
    amount: number
}

export const Relatorios = () => {
    const [agendamentos, setAgendamentos] = useState<IReports | undefined>(undefined);

    useEffect(() => {
        fetch('http://localhost:8080/relatorios', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({enterpriseId: 1})
        })
            .then(response => response.json())
            .then(res => setAgendamentos(res))
    },[]);
   
    let [dadosMensais, setDadosMensais] = useState<IMonthsData[]>([]);

    useEffect(() => {
        if (agendamentos?.schedulings) {
            let months = [0,0,0,0,0,0,0,0,0,0,0,0]
            const nameMonth = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']
            agendamentos.schedulings.forEach(agend => {
                const shortMonth = new Date(agend).toLocaleString('pt-BR', {month: 'short'}).slice(0,3);
    
                if (shortMonth === 'jan') months[0] += 1;
                else if (shortMonth === 'fev') months[1] += 1;
                else if (shortMonth === 'mar') months[2] += 1;
                else if (shortMonth === 'abr') months[3] += 1;
                else if (shortMonth === 'mai') months[4] += 1;
                else if (shortMonth === 'jun') months[5] += 1;
                else if (shortMonth === 'jul') months[6] += 1;
                else if (shortMonth === 'ago') months[7] += 1;
                else if (shortMonth === 'set') months[8] += 1;
                else if (shortMonth === 'out') months[9] += 1;
                else if (shortMonth === 'nov') months[10] += 1;
                else if (shortMonth === 'dez') months[11] += 1;  
            })
            
            const monsthsData = months.map((amount, index) => {
                if (amount > 0) return {month: nameMonth[index], amount}
                return null
            }).filter (item => item !== null);

            setDadosMensais(monsthsData)
        }
    }, [agendamentos?.schedulings])
    
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
                        <h5 className="text-primary"><b>{agendamentos?.schedulings.length ?? 0}</b></h5>
                    </div>
                </div>
                <div className="col-lg-3 col-12 col-sm-6 p-1">
                    <div className="col-12 shadow border rounded p-3">
                    <UserCheck className="text-primary mb-2" size={32} />
                    <p className="text-muted">Profissionais Ativos</p>
                    <h5 className="text-primary"><b>{agendamentos?.professionals ?? 0}</b></h5>
                    </div>
                </div>
                <div className="col-lg-3 col-12 col-sm-6 p-1">
                    <div className="col-12 shadow border rounded p-3">
                    <Briefcase className="text-primary mb-2" size={32} />
                    <p className="text-muted">Serviços Oferecidos</p>
                    <h5 className="text-primary"><b>{agendamentos?.services.length ?? 0}</b></h5>
                    </div>
                </div>
                <div className="col-lg-3 col-12 col-sm-6 p-1">
                    <div className="col-12 shadow border rounded p-3">
                    <BarChart className="text-primary mb-2" size={32} />
                    <p className="text-muted">Cancelamentos</p>
                    <h5 className="text-primary"><b>{agendamentos?.canceleds ?? 0}</b></h5>
                    </div>
                </div>
            </div>

            <div className="p-3" style={{maxWidth: '100%'}}>
                <div className="bg-light border rounded shadow">
                    <h3 className="text-muted text-center">Agendamentos por Mês</h3>
                    <ResponsiveContainer width="100%" height={300}>
                    <Chart data={dadosMensais}>
                        <XAxis dataKey="month" stroke="#94a3b8" />
                        <YAxis stroke="#94a3b8" />
                        <Tooltip cursor={{ fill: 'rgba(0,0,0,0.05)' }} />
                        <Bar dataKey="amount" fill="#2563eb" radius={[8, 8, 0, 0]} />
                    </Chart>
                    </ResponsiveContainer>
                </div>
            </div>
            <Footer/>
        </div>
        </>
    )
}