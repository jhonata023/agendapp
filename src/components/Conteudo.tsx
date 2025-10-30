interface IConteudoProps {
  children: React.ReactNode;
}
export const Conteudo = (props: IConteudoProps) => {
  return(
    <div className="container">
      <div className="row justify-content-center">
        {props.children}
      </div>
    </div>
  )
}