import styles from './layout.module.css';
import '@/app/globals.css';

export default function WorldLayout({ children }) {
  return (
    <div className={styles.container}>
      <h1 style={{ textAlign: 'center' }}>🌍 Reinos do Mundo</h1>
      {children}
    </div>
  );
}
