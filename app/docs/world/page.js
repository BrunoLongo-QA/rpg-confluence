import { listarReinos } from '@/lib/reinos';
import Link from 'next/link';
import { formatarNome } from '@/helpers/general';
import styles from './layout.module.css';

export default function WorldHome() {
  const reinos = listarReinos();

  return (
    <main style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'left' }}>🌍 Reinos do Mundo</h2>
      <div className="whiteGrid">
        <ul className={styles.gridItem}>
        {reinos.map((reino) => (
          <li data-testid={`reino-${reino}`} key={reino} className={styles.reinoName}>
            <Link href={`/docs/world/${reino}`} >
              {formatarNome(reino)}
            </Link>
            <div data-testid={`reino-flag-${reino}`} className={styles.reinoFlag}>
              <Link href={`/docs/world/${reino}`} >
                <img src={`/world/${reino}/flag.png`} alt={reino} />
              </Link>
            </div>
          </li>
        ))}
        </ul>
      </div>
    </main>
  );
}
