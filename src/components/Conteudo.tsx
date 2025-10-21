interface IConteudoProps {
  children: React.ReactNode;
}
export const Conteudo = (props: IConteudoProps) => {
  return(
    <div className=" p-3 d-flex align-items-center">
      {/* <h4 className="text-center display-6 fw-light text-secondary mb-5">
        Escolha uma empresa para agendar seu serviço
      </h4> */}

      <div className="container">
        <div className="row justify-content-center g-4 gy-5">
          {props.children}
        </div>
      </div>
    </div>
  )
}