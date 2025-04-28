import { listarReinos } from '@/lib/reinos';
import Link from 'next/link';
import { formatarNome } from '@/helpers/general';
export default function WorldHome() {
  const reinos = listarReinos();

  return (
    <main style={{ padding: '2rem' }}>
      <ul>
        {reinos.map((reino) => (
          <li key={reino}>
            <Link href={`/docs/world/${reino}`}>
              {formatarNome(reino)}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
