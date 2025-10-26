import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Conteudo } from "../components/Conteudo";
import { Cards } from "../components/Cards";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ServiceModal } from "../components/ServiceModal";

import { useState, useEffect } from "react";

interface IService {
  id: number,
  name: string,
  price: number, 
  duration: number,
  enterpriseId: number,
  professionals: number[]
}

interface IEmpresasProps {
  id: number,
  title: string,
  address: string,
  srcImg: string,
  rating: number,
  description: string,
  services: IService[]
}

export const MinhaEmpresa = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState<IService | null>(null);
    const [currentBusinessTitle, setCurrentBusinessTitle] = useState('');
    const [empresas, setEmpresas] = useState<IEmpresasProps[]>([]);
    const [servicesToRender, setServicesToRender] = useState<IService[]>([])

    useEffect(()=> {
      fetch('http://localhost:8080/empresas').then(response => response.json()).then(res => setEmpresas(res))
    }, []);
    useEffect(() => {
      fetch('http://localhost:8080/services', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({enterpriseId: 1})
      })
        .then(response => response.json()).then(res => setServicesToRender(res))
    }, [])

    const openServiceModal = (service: IService, businessTitle: string) => {
        setSelectedService(service);
        setCurrentBusinessTitle(businessTitle);
        setIsModalOpen(true);
    }

    const closeServiceModal = () => {
        setIsModalOpen(false);
        setSelectedService(null);
        setCurrentBusinessTitle('');
    }

    const { id } = useParams();
    const currentBusiness = empresas.find(b => b.title.toString() === id)
    
    if (!currentBusiness) {
      return <h3 className="text-center p-5 text-danger">Empresa não encontrada!</h3>;
    }

    return (
        <>
            <div className="d-flex flex-column min-vh-100">
              <Navbar/>
              <div className="d-flex flex-grow-1">
                <div className="d-none d-md-block bg-light shadow-lg" style={{width: "25%", minWidth: '200px'}}>
                  <img src={currentBusiness.srcImg} alt={currentBusiness.title} width={'100%'} style={{maxHeight: '270px'}} />
                  <div className="text-center p-3">
                    <h4 className="mb-4">{currentBusiness.title}</h4>

                    <p className="mb-5">{currentBusiness.description}</p>

                    <p className="text-muted mt-auto">{currentBusiness.address}</p>
                  </div>
                  <div className="p-3">
                    <Link to={'/empresas'}><button className="btn btn-outline-secondary btn-sm w-100">
                    <i className="bi bi-arrow-left me-1"></i> Ver todas as empresas
                    </button></Link>
                  </div>
                </div>
                  
                <div className="d-flex w-100 justify-content-center flex-grow-1">
                  <Conteudo>
                    <div className="col-12 text-center my-4 pt-3">
                      <h2 className="text-primary fw-light">Serviços Oferecidos</h2>
                    </div>
                    {servicesToRender.length > 0 ? (
                    servicesToRender.map((service) => (
                      <Cards 
                      key={service.id} 
                      id={service.id}
                      title={service.name}
                      address="" 
                      rating={0} 
                      srcImg={""} 
                      service={service} 
                      businessTitle={currentBusiness.title}
                      clickService={openServiceModal}
                      />
                    ))
                    ) : (
                    <div className="col-12 text-center text-muted">
                      <p>Nenhum serviço cadastrado para esta empresa.</p>
                    </div>
                    )}
                  </Conteudo>
                </div>
              </div>
              <Footer/>
              {isModalOpen && selectedService && (
                <ServiceModal 
                businessTitle={currentBusinessTitle}
                service={selectedService}
                onClose={closeServiceModal}
                />
              )}
            </div>
        </>
    )
}