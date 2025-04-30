import styles from '@/app/docs/world/layout.module.css';

export default function SyltharielPage() {
  return (
    <section>
      <div data-testid="indice-reino" className="whiteGrid">
        <center id="indice"><p><a data-testid="descricao-da-capital-link" href="#descricao">Descrição da Capital</a> | <a data-testid="lista-imagens-da-capital-link" href="#rainha">Rainha</a> | <a data-testid="lugares-do-reino-link" href="#lugares">Lugares Famosos</a></p></center>
      </div>
      <br />
      <div data-testid="informacoes-da-capital" className="whiteGrid" >
        <div data-testid="nome-da-capital" className={styles.gridText}>
          <h3 id="capital">Capital: Elarion — referenciada como "A Jóia Verde"</h3>
          <p>Um reino mágico com florestas e antigos segredos.</p>
        </div>
        <div data-testid="descricao-da-capital" className={styles.gridText}>
          <h3> Descrição da Capital: </h3>
          <p>
            Elarion é uma cidade mágica extraordinária, escondida entre as densas e místicas florestas ancestrais de Lys'Taeril, onde árvores milenares tocam o céu com suas copas esmeralda e brilham com uma suave luz bioluminescente que dança como estrelas terrenas durante a noite.
          </p>
          <p>
            Suas estruturas são magistralmente erguidas em perfeita harmonia com a natureza elegantes pontes de vidro e madeira élfica entrelaçam-se entre árvores centenárias, torres majestosas de cristal vegetal refletem a luz do sol em milhares de cores, e jardins suspensos flutuam como nuvens verdes no ar, sustentados por antiga magia élfica.
          </p>
          <p>
            A essência mágica permeia cada canto: as folhas douradas sussurram canções antigas em línguas esquecidas, fontes cristalinas cantam melodias etéreas, e os ventos místicos tecem uma cortina invisível que protege a cidade dos olhos indesejados.
          </p>
          <p>
            Nas praças principais, cristais gigantes pulsam com energia arcana, alimentando os encantamentos que mantêm a cidade em seu eterno equilíbrio com a natureza.
          </p>
          <p>
            Os habitantes se movem com graça sobrenatural entre os caminhos elevados e jardins flutuantes, suas vestes esvoaçantes misturando-se com a própria luz que emana da cidade.
          </p>
          <a data-testid="link-indice-descricao" href="#indice">Voltar ao Índice</a>
        </div>
        <div data-testid="lista-imagens-da-capital" className={styles.gridImages}>
            <img src="/world/sylthariel/elarion-one.png" alt="Elarion" />

            <img src="/world/sylthariel/elarion-two.png" alt="Elarion" />

            <img src="/world/sylthariel/elarion-three.png" alt="Elarion" />

          <img src="/world/sylthariel/elarion-four.png" alt="Elarion" />
        </div>
      </div>
      <br />
      <br />
      <div data-testid="outras-informacoes-do-reino" className={styles.gridImages}>
        <div data-testid="descricao-do-rei-ou-rainha" className="whiteGrid" >
          <h3 id="rainha">Rainha: Aeryn Valessë, a Flor Solitária</h3>
          <a data-testid="link-indice-descricao" href="#indice">Voltar ao Índice</a>
          <div data-testid={`rainha-portrait`} className={styles.rainhaPortrait}>
            <img src="/world/sylthariel/elarion-four.png" alt="Elarion" />
          </div>
        </div>
        <div data-testid="lugares-do-reino" className="whiteGrid" >
          <h3 id="lugares">Lugares Famosos</h3>
          <a data-testid="link-indice-descricao" href="#indice">Voltar ao Índice</a>
          <ul>
            <li><a href="/world/reino-um/lugar-famoso-um">Lugar Famoso Um</a></li>
            <li><a href="/world/reino-um/lugar-famoso-dois">Lugar Famoso Dois</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
