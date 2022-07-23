import styles from '../styles/Contact.module.scss'

export default function Contato() {
  return (
    <div className={styles.Container}>
      <div>
        <h1>CONTATO</h1>
        <p>contato</p>
      </div>

      <a href="/">
        Voltar
      </a>

      <div>
        <div>
          <p>email</p>
          <div>
            <p>adson.formiga@gmail.com</p>
            <button>copiar</button>
          </div>
        </div>
      </div>
    </div>
  )
}