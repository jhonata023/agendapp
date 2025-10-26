import { useEffect, useState } from "react";

interface IProfessional {
  id: number,
  name: string,
  enterpriseId: number,
  rating: number;
}

interface IService {
  id: number;
  name: string,
  price: number,
  duration: number,
  enterpriseId: number,
  professionals: number[]
}

interface IModalProps {
    businessTitle: string;
    service: IService;
    onClose: () => void;
}

interface IAvailableSlots {
  time: string,
  profId: number,
  date: string,
  enterpriseId: number
}

const renderStars = (rating: number) => {
  const stars = [];
  // Arredonda para o 0.5 mais próximo para lidar com estrelas parciais
  const roundedRating = Math.round(rating * 2) / 2;
  
  for (let i = 1; i <= 5; i++) {
    if (i <= roundedRating) {
      // Estrela cheia
      stars.push(<i key={i} className="bi bi-star-fill me-1"></i>);
    } else if (i - 0.5 === roundedRating) {
      // Meia estrela
      stars.push(<i key={i} className="bi bi-star-half me-1"></i>);
    } else {
      // Estrela vazia
      stars.push(<i key={i} className="bi bi-star me-1"></i>);
    }
  }
  return stars;
};

export const ServiceModal = (props: IModalProps) => {
  const { businessTitle, service, onClose } = props;
  const [professionals, setProfessionals] = useState<IProfessional[]>([])
  const [availableSlots, setAvailableSlots] = useState<IAvailableSlots[]>([])
  
  // Simulação de clique de agendamento
  const handleSchedule = (time: string, profName: string) => {
    console.log(`Agendado: ${service.name} com ${profName} às ${time} em ${businessTitle}.`);
    alert(`Agendado com sucesso!\nServiço: ${service.name}\nProfissional: ${profName}\nHorário: ${time}`);
    onClose();
  };

  useEffect(() => {
    fetch('http://localhost:8080/professionals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, body: JSON.stringify({enterpriseId: 1})
    })
      .then(response => response.json())
      .then(res => setProfessionals(res));
  }, [])
  useEffect(() => {
    fetch('http://localhost:8080/availableSlots', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, body: JSON.stringify({enterpriseId: 1})
    })
      .then(response => response.json())
      .then(res => setAvailableSlots(res));
  }, [])

  return (
    <div 
      className="modal d-block" 
      tabIndex={-1} 
      style={{ backgroundColor: 'rgba(0,0,0,0.5)', overflowY: 'auto' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }} // Fecha ao clicar fora
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content rounded-4 shadow-lg">
          <div className="modal-header border-0 pb-0">
            <h5 className="modal-title text-primary fw-bold">{service.name}</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
          </div>
            
          <div className="modal-body pt-0 px-4">
            <p className="text-muted small mb-3">
              Oferecido por: <span className="fw-bold text-dark">{businessTitle}</span>
            </p>
              
            {/* Detalhes Principais */}
            <div className="alert alert-primary p-3 rounded-3 d-flex justify-content-between align-items-center mb-4">
              <div className="text-start">
                <span className="d-block fw-bold fs-4">R$ {service.price.toFixed(2).replace('.', ',')}</span>
                <span className="small text-muted">Preço Total</span>
              </div>
              <div className="text-end">
                <span className="d-block fw-bold fs-4">{service.duration} min</span>
                <span className="small text-muted">Duração Estimada</span>
              </div>
            </div>

            {/* Profissionais */}
            <h6 className="fw-bold text-dark mb-3">Profissionais que Realizam este Serviço ({service.professionals.length})</h6>
            <div className="row g-2 mb-4">
              {service.professionals.map(profId => {
                const prof = professionals.find(professional => professional.id === profId)
                if (!prof) return null

                return (
                  <div key={profId} className="col-6">
                    <div className="border p-2 rounded-3 d-flex align-items-center bg-light">
                      <i className="bi bi-person-circle fs-5 me-2 text-secondary"></i>
                      <div className="small">
                        <p className="m-0 fw-bold">{prof.name}</p>
                        <div className="text-warning small">{renderStars(prof.rating)}</div>
                      </div>
                    </div>
                  </div>
                )
            })}
            </div>

            {/* Agenda e Horários */}
            <h6 className="fw-bold text-dark mb-3">Horários Disponíveis Hoje</h6>
            <div className="d-flex flex-wrap gap-2 mb-3">
              {availableSlots.map((slot, index) => {
                const prof = professionals.find(professional => professional.id === slot.profId);
                if (!prof) return null;

                return (
                  <button 
                    key={index} 
                    className="btn btn-outline-success btn-sm shadow-sm"
                    onClick={() => handleSchedule(slot.time, prof.name)}
                    title={`Agendar com ${prof.name}`}
                  >
                    {slot.time + " " + prof.name}
                  </button>
                );
              })}
            </div>
            <p className="small text-muted text-center mt-3">
              Clique no horário desejado para agendar.
            </p>

          </div>
          <div className="modal-footer border-0 pt-0">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Fechar</button>
          </div>
        </div>
      </div>
    </div>
  );
};