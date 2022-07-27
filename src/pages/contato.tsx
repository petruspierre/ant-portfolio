import Link from 'next/link'
import { motion } from 'framer-motion'

import styles from '../styles/Contact.module.scss'
import Image from 'next/image'
import { Layout } from './components/Layout'
import ArrowLink from './components/ArrowLink'

const animations = {
  left: {
    x: -100
  },
  right: {
    x: -50
  },
  
}

const transitions = {
  big: {
    duration: 10,
    ease: 'easeOut',
  }
}

const EMAIL = 'adson.formiga@gmail.com'
const PHONE = '(83) 98635-4504'

export default function Contato() {
  const copyEmail = () => {
    if(typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(EMAIL);
    }
  }

  const copyPhone = () => {
    if(typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(EMAIL);
    }
  }

  return (
    <Layout fromLeft toRight>
      <div className={styles.Container}>
        <motion.div
          className={styles.Background}
        >
          <motion.p
            variants={animations}
            initial={'left'}
            animate={'right'}
            transition={transitions.big}
          >
            contato
          </motion.p>
          <motion.h1
            variants={animations}
            initial={'right'}
            animate={'left'}
            transition={transitions.big}
          >
            CONTATO
          </motion.h1>
        </motion.div>

        <div className={styles.Content}>
          <div className={styles.BackButtonContainer}>
            <ArrowLink link="/" label="voltar" left />
          </div>

          <motion.main 
            initial={{
              x: 25
            }}
            animate={{
              x: 0
            }}
            transition={{
              duration: 2,
              ease: 'easeOut',
            }}
            className={styles.InfoContainer}
          >
            <div className={styles.Info}>
              <p>
                email
                <button onClick={copyEmail}>
                  <Image width={20} height={20} src="/assets/copy.svg" alt="copiar" title="copiar" />
                </button>
              </p>
              <div>
                <p>{EMAIL}</p>
                <button onClick={copyEmail}>
                  <Image width={20} height={20} src="/assets/copy.svg" alt="copiar" title="copiar" />
                </button>
              </div>
            </div>

            <div className={styles.Info}>
              <p>
                celular
                <button onClick={copyEmail}>
                  <Image width={20} height={20} src="/assets/copy.svg" alt="copiar" title="copiar" />
                </button>
              </p>
              <div>
                <p>{PHONE}</p>
                <button onClick={copyPhone}>
                  <Image width={20} height={20} src="/assets/copy.svg" alt="copiar" title="copiar" />
                </button>
              </div>
            </div>
          </motion.main>
        </div>
      </div>
    </Layout>
  )
}