import styles from '@/app/docs/world/layout.module.css';

export default function ReinoUm() {
  return (
    <section>
      <br />
      <p>Um reino mágico com florestas e antigos segredos.</p>
      <br />
      <div className="whiteGrid" data-testid="descricao-da-capital">
        <div className={styles.gridText}>
          <b>Capital: Elarion — conhecida como "A Jóia Verde"</b>
        </div>

        <h4 className={styles.gridText}>
          Descrição da Capital:
        </h4>

        <div className={styles.gridText}>
          <p>
            Elarion é uma cidade mágica extraordinária, escondida entre as densas e místicas
            florestas ancestrais de Lys'Taeril, onde árvores milenares tocam o céu com suas
            copas esmeralda e brilham com uma suave bioluminescência que dança como estrelas
            terrenas durante a noite.
          </p>

          <p>
            Suas estruturas são magistralmente erguidas em perfeita harmonia com a natureza
            — elegantes pontes de vidro e madeira élfica entrelaçam-se entre árvores
            centenárias, torres majestosas de cristal vegetal refletem a luz do sol em
            milhares de cores, e jardins suspensos flutuam como nuvens verdes no ar,
            sustentados por antiga magia élfica.
          </p>

          <p>
            A essência mágica permeia cada canto: as folhas douradas sussurram canções
            antigas em línguas esquecidas, fontes cristalinas cantam melodias etéreas,
            e os ventos místicos tecem uma cortina invisível que protege a cidade dos
            olhos indesejados.
          </p>

          <p>
            Nas praças principais, cristais gigantes pulsam com energia arcana, alimentando
            os encantamentos que mantêm a cidade em seu eterno equilíbrio com a natureza.
            Os habitantes se movem com graça sobrenatural entre os caminhos elevados e
            jardins flutuantes, suas vestes esvoaçantes misturando-se com a própria luz
            que emana da cidade.
          </p>
        </div>
        <br />
        <div className={styles.imageGrid}>
          <div className={styles.gridItem}>
            <img src="/world/sylthariel/elarion-one.png" alt="Elarion" />

            <img src="/world/sylthariel/elarion-two.png" alt="Elarion" />

            <img src="/world/sylthariel/elarion-three.png" alt="Elarion" />

            <img src="/world/sylthariel/elarion-four.png" alt="Elarion" />
          </div>
        </div>
      </div>
      <br />
      <div className="whiteGrid" data-testid="descricao-do-rei-ou-rainha">
        <b>Rainha:</b> Aeryn Valessë, a Flor Solitária
      </div>
      <br />
      <div className="whiteGrid" data-testid="lugares-do-reino">
        <ul>
          <li><a href="/world/reino-um/lugar-famoso-um">Lugar Famoso Um</a></li>
          <li><a href="/world/reino-um/lugar-famoso-dois">Lugar Famoso Dois</a></li>
        </ul>
      </div>
    </section>
  );
}
