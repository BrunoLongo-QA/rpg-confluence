export default function Headers() {
  return (
    <header>
      <div data-testid="header">
        <br />
        <center><h1>RPG Confluence</h1></center>
        <center><nav>
          <p><a data-testid="home-link" href="/">Inicio</a> | <a data-testid="world-link" href="/docs/world">Sobre o Mundo</a> | <a data-testid="groups-link" href="/docs/groups">Grupos</a></p>
        </nav></center>
      </div>
    </header>
  )
}
