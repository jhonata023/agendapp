import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Link } from "react-router-dom";

export function App() {
  return (
    <>
      <Navbar/>
      <div className="text-center">
        <section className="pb-5 pt-5">
          <div className="mt-3 p-4">
            <h1><b>Simplifique o agendamento da sua empresa</b></h1>

            <div className="w-100 d-flex justify-content-center mt-5">
              <p className="text-muted" style={{maxWidth: '500px'}}>O <b className="text-primary">AgendApp</b> é a solução completa para gerenciar seus agendamentos com praticidade, profissionalismo e sem complicações</p>
            </div>

            <Link to={'/auth/register'}><button className="btn btn-primary mt-3 mb-5">Comece Agora</button></Link>
          </div>

          <div className="mt-4 p-4">
            <h4>Por que escolher o AgendApp?</h4>

            <div className="row d-flex justify-content-around mt-5">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="rounded shadow-sm p-3 pb-0">
                  <h5><b className="text-primary">Interface Intuitiva</b></h5>
                  <div className="mt-4 p-3">
                    <p>Gerencie sua agenda sem complicações. Tudo está a um clique de distância</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <div className="rounded shadow-sm p-3 pb-0">
                  <h5><b className="text-primary">Acesso em qualquer lugar</b></h5>

                  <div className="mt-4 p-3">
                    <p>Use o sistema pelo celular, tablet ou computador, sem necessidade de instalação.</p>
                  </div>
                </div>
              </div>
              
              <div className="col-12 col-md-6 col-lg-4">
                <div className="rounded shadow-sm p-3 pb-0">
                  <h5><b className="text-primary">Controle Total</b></h5>

                  <div className="m-4 p-3">
                    <p>Acompanhe seus agendamentos, profissionais e clientes em tempo real.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="p-5" style={{backgroundColor: '#e9f4ff'}}>
          <div className="mb-5">
            <h3 className="mb-4"><b>Planos que crescem com seu negócio</b></h3>
            <p className="text-muted">Escolha o plano ideal para sua empresa e comece a agendar com facilidade</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 col-md-5 col-xl-3 mb-4 mx-md-2 rounded border shadow p-5 rounded">
              <h5>Plano Essencial</h5>
              <p className="text-muted">Para empresas com 1 profissional</p>

              <div className="d-flex align-items-center justify-content-center mt-5">
                <h1 className="text-primary"><b>R$ 24,90</b></h1>
                <p className="text-muted">/mês</p>
              </div>

              <div className="p-4">
                <p className="m-0">✅ 1 profissional</p>
                <p className="m-0">✅ Agendamento ilimitado</p>
                <p className="m-0">✅ Painel simples e rápido</p>
                <p className="m-0">✅ Cadastre até 5 serviços</p>
              </div>

              <button className="btn btn-primary">Assinar</button>
            </div>

            <div className="col-12 col-md-5 col-xl-3 mb-4 mx-md-2 pt-2 p-0 h-100 bg-success" style={{borderRadius: '20px'}}>
              <div className="border shadow-lg p-5" style={{backgroundColor: '#e9f4ff', borderRadius: '20px'}}>
                <h2><b>Plano Profissional</b></h2>
                <p className="text-muted">Para empresas com até 5 profissional</p>

                <div className="d-flex align-items-center justify-content-center mt-5">
                  <h1 className="text-success"><b>R$ 79,90</b></h1>
                  <p className="text-muted">/mês</p>
                </div>

                <div className="p-4">
                  <p className="m-0">✅ Até 5 profissionais</p>
                  <p className="m-0">✅ Notificações automáticas</p>
                  <p className="m-0">✅ Relatórios avançados</p>
                </div>

                <button className="btn btn-success">Assinar</button>
              </div>
            </div>

            <div className="col-12 col-md-5 col-xl-3 mb-4 mx-md-2 rounded border shadow p-5 rounded">
              <h5>Plano Empresarial</h5>
              <p className="text-muted">Profissionais ilimitados</p>

              <div className="d-flex align-items-center justify-content-center mt-5">
                <h1 className="text-primary"><b>R$ 159,90</b></h1>
                <p className="text-muted">/mês</p>
              </div>

              <div className="p-4">
                <p className="m-0">✅ Profissionais ilimitados</p>
                <p className="m-0">✅ Suporte prioritário</p>
                <p className="m-0">✅ Recursos personalizados</p>
              </div>

              <button className="btn btn-primary">Assinar</button>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </>
  )
}
