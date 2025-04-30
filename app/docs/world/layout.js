import styles from './layout.module.css';
import '@/app/globals.css';

export default function WorldLayout({ children }) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}
