export const Footer = () => {
  return(
    <footer className="bg-light text-muted py-3 mt-auto shadow">
            <div className="container text-center">
                <p className="mb-0">
                    &copy; {new Date().getFullYear()} AgendApp. Simplificando seus agendamentos.
                </p>
            </div>
        </footer>
  )
}