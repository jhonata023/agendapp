interface IServiceAgend {
    id: number,
    enterprise: string;
    service: string;
    professional: string;
    date: string;
    time: string;
    status: string;
    price: number;
    duration: number;
}

interface IAgendModalProps {
    service: IServiceAgend;
    onClose: () => void;
}

export const AgendamentosModal = (props: IAgendModalProps) => {
    return (
    <div 
      className="modal d-block" 
      tabIndex={-1} 
      style={{ backgroundColor: 'rgba(0,0,0,0.5)', overflowY: 'auto' }}
      onClick={(e) => { if (e.target === e.currentTarget) props.onClose(); }} // Fecha ao clicar fora
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content rounded-4 shadow-lg">
          <div className="modal-header border-0 pb-0">
            <h5 className="modal-title text-primary fw-bold">{props.service.enterprise}</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={props.onClose}></button>
          </div>
            
          <div className="modal-body pt-0 px-4">
            <p className="text-muted small mb-3">
              Oferecido por: <span className="fw-bold text-dark">{props.service.service}</span>
            </p>
              
            {/* Detalhes Principais */}
            <div className="alert alert-primary p-3 rounded-3 d-flex justify-content-between align-items-center mb-4">
              <div className="text-start">
                <span className="d-block fw-bold fs-4">R$ {props.service.price.toFixed(2).replace('.', ',')}</span>
                <span className="small text-muted">Preço Total</span>
              </div>
              <div className="text-end">
                {props.service.duration < 60 && (
                    <span className="d-block fw-bold fs-4">{props.service.duration} min</span>
                )}
                {props.service.duration == 60 && (
                    <span className="d-block fw-bold fs-4">{props.service.duration / 60} hora</span>
                )}
                {!(props.service.duration % 60) && props.service.duration > 60 &&(
                    <span className="d-block fw-bold fs-4">{props.service.duration / 60} horas</span>
                )}
                {props.service.duration > 60 && props.service.duration < 120 && (
                    <span className="d-block fw-bold fs-4">{(props.service.duration / 60).toString().slice(0,1)} hora {props.service.duration % 60} min</span>
                )}
                {props.service.duration > 120 && (
                    <span className="d-block fw-bold fs-4">{(props.service.duration / 60).toString().slice(0,1)} horas {props.service.duration % 60} min</span>
                )}
                <span className="small text-muted">Duração Estimada</span>
              </div>
            </div>

            {/* Profissionais */}
            <p className="mb-3">Profissional que Realizará este Serviço <b>({props.service.professional})</b></p>

            {/* Agenda e Horários */}
            <h6 className="fw-bold text-dark mb-3">Horário: {props.service.time}</h6>
            <div className="d-flex flex-wrap gap-2 mb-3">

            </div>

          </div>
          <div className="modal-footer border-0 pt-0">
            {props.service.status == 'Confirmado' || props.service.status == 'Pendente' && (
                <button type="button" className="btn btn-danger" onClick={props.onClose}>Cancelar</button>
            )}
            <button type="button" className="btn btn-warning" onClick={props.onClose}>Fechar</button>
          </div>
        </div>
      </div>
    </div>
  );
}