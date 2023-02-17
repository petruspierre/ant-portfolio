import Image from 'next/image'

import styles from '../styles/pages/AboutMe.module.scss'
import { Layout, ArrowLink } from '../components'

export default function SobreMim() {
  return (
    <Layout fromTop>
      <section className={styles.Hero}>
        <header className={styles.Header}>
          <div>
            <ArrowLink link="/" label="voltar" top />
          </div>
        </header>

        <div className={styles.Headline}>
          <img src="/assets/name.svg" alt="adson formiga vieira" draggable={false} />
        </div>

        <div className={styles.ScrollDownButton}>
          <button>
            apresentação
            <Image 
              height={40}
              width={40}
              src="/assets/arrow-white.svg"
              alt=""
            />
          </button>
        </div>
      </section>

      <section>

      </section>
    </Layout>
  )
}