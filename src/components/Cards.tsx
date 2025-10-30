import { Link } from "react-router-dom";

interface IService {
  id: number;
  name: string,
  price: number,
  duration: number,
  enterpriseId: number,
  professionals: number[]
}

interface ICardsProps {
  id: number,
  title: string,
  address: string,
  srcImg: string,
  rating: number,
  
  service?: IService,
  businessTitle?: string,
  clickService?: (service: IService, businessTitle: string) => void
}
export const Cards = (props: ICardsProps) => {
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

  if(!props.service) {
    return(
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex">
        <div 
          className="card shadow border-0 rounded-3 d-flex flex-column" 
          style={{ 
            transition: 'transform 0.2s', 
            cursor: 'pointer',
            width: '100%'
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <img src={props.srcImg} alt={props.title} style={{height: '150px', objectFit: 'cover'}} className="card-img-top rounded-top-3"/>
          
          <div className="card-body p-2 flex-grow-1 text-center">
            <h5 className="card-title text-primary">{props.title}</h5>
            <p className="card-text text-muted small mb-2">{props.address}</p>
  
            <div className="text-warning mb-0">
              {renderStars(props.rating)}
              {/* Exibe o número da avaliação ao lado das estrelas */}
              <span className="text-secondary ms-1 small">({props.rating.toFixed(1)})</span> 
            </div> 
          </div>

          <Link to={`/${props.title}`}>
            <div className="card-footer bg-transparent border-top p-3">
              <button className="btn btn-sm btn-primary w-100">Ver detalhes</button>
            </div>
          </Link>
        </div>
      </div>
    )
  }

  const service = props.service as IService;
  const professionalsCount = service.professionals.length;
  
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-4 d-flex">
      <div className="col-12 card shadow border-0 rounded-3 d-flex flex-column h-100 p-3 text-center" 
          style={{transition: 'transform 0.2s', cursor: 'pointer'}}>
            <div className="card-body p-3 text-center">
              <h6 className="card-title text-dark fw-bold mb-1">{service.name}</h6>
              <p className="card-text text-primary fs-5 mb-1">R$ {service.price.toFixed(2).replace('.',',')}</p>
              <p className="card-text text-muted small mb-3">{service.duration} min</p>
            </div>
            <p className="card-text text-muted small mb-3">
              {service.duration} min
              <span className="ms-3">{professionalsCount} {professionalsCount > 1 ? 'profissionais' : 'profissional'}</span>
            </p>

            <div className="card-footer bg-transparent border-top p-3 text-center">
              <button className="btn btn-primary btn-sm w-100" onClick={() => props.clickService && props.clickService(service, props.businessTitle || '')}>
                Detalhes e Agenda
              </button>
            </div>
        </div>
    </div>
  )
}