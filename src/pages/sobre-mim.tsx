import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/AboutMe.module.scss'

import { Layout } from './components/Layout'

export default function SobreMim() {
  return (
    <Layout fromTop>
      <div className={styles.Container}>
        <header className={styles.Header}>
          <div>
            <Link href="/">
              <a>
                voltar
                <Image height={40} width={18} src="/assets/arrow.svg" alt="" />
              </a>
            </Link>
          </div>
        </header>

        <div className={styles.Headline}>
          <img src="/assets/name.svg" alt="adson formiga vieira" draggable={false} />
        </div>
      </div>
    </Layout>
  )
}