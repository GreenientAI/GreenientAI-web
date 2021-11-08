import styles from '../styles/404.module.css';
import Head from 'next/head';

const styles404 = `${styles.text} d-flex justify-content-center align-items-center`;
export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 Not Found</title>
        <meta name='404 Not Found' content='404 Not Found' />
      </Head>
      <div style={{ height: '100vh' }} className={styles404}>
        <h1 className='display-1' style={{ color: 'rgb(0, 255, 0)' }}>
          404
        </h1>
      </div>
    </>
  );
}
