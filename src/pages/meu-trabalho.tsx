import styles from '../styles/MyWork.module.scss'
import ArrowLink from './components/ArrowLink'

import { Layout } from './components/Layout'

export default function SobreMim() {
  return (
    <Layout fromRight toLeft>
      <div className={styles.Container}>
        <section className={styles.Hero}>
          <div>
            <div>
              <p>- Só para ficar claro, o que você faz?</p>
              <h1>Design de interfaces para sites e aplicativos</h1>

              <h2>Eu faço as suas ideias de sites e aplicações virarem realidade.<br/ >Preparo os designs das suas ideias, e depois é só programar.</h2>
            </div>
            <div>
              <ArrowLink link="/" label="voltar" right />
            </div>
          </div>
        </section>

        <footer>
          <p>Gostou do que viu?</p>

          <p>Também estou apto a aprender e desenvolver novos tipos de trabalho. Tudo pode ser conversado, desde que se mantenha em minha área. Quer me contratar? Entre em contato:</p>
        </footer>
      </div>
    </Layout>
  )
}