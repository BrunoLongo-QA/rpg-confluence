import { formatarNome } from '@/helpers/general';

export default function SyltharielPage() {
  const reino = 'sylthariel';

  let Sylthariel;

  try {
    Sylthariel = require(`@/content/world/${reino}/page.js`).default;
  } catch (e) {
    return <div>Reino não encontrado: {reino}</div>;
  }

  return (
    <div>
      <Sylthariel />
    </div>
  );
}
