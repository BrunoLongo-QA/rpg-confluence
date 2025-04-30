export default function ReinoPage({ params }) {
  const { reino } = params;

  try {
    const ReinoComponent = require(`@/content/world/${reino}/page.js`).default;
    return (
      <div>
        <ReinoComponent />
      </div>
    );
  } catch (error) {
    return <div>Reino "{reino}" não encontrado!</div>;
  }
}
