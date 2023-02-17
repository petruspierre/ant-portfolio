import styles from '../styles/pages/MyWork.module.scss'

import { Layout, ArrowLink, Projects } from '../components'

export default function SobreMim() {
  return (
    <Layout fromRight toLeft>
      <div className={styles.Container}>
        <section className={styles.Hero}>
          <div>
            <div>
              <h2>- Só para ficar claro, o que você faz?</h2>
              <h1>Design de interfaces para sites e aplicativos</h1>

              <p>Eu faço as suas ideias de sites e aplicações virarem realidade.<br/ >Preparo os designs das suas ideias, e depois é só programar.</p>
            </div>
            <div>
              <ArrowLink link="/" label="voltar" right />
            </div>
          </div>
        </section>

        <section>
          <Projects />
        </section>

        <footer className={styles.Footer}>
          <p>Gostou do que viu?</p>

          <p>Também estou apto a aprender e desenvolver novos tipos de trabalho. Tudo pode ser conversado, desde que se mantenha em minha área. Quer me contratar? Entre em contato:</p>

          <ArrowLink link="/contato" label="contato" right />
        </footer>
      </div>
    </Layout>
  )
}