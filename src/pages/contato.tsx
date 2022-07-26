import Link from 'next/link'
import { motion } from 'framer-motion'

import styles from '../styles/Contact.module.scss'
import Image from 'next/image'
import { Layout } from './components/Layout'

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

export default function Contato() {
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

        <div className={styles.ItemLeft}>
          <Link href="/">
            <a>
              Voltar
              <Image height={40} width={18} src="/assets/arrow.svg" alt="" />
            </a>
          </Link>
        </div>

        <motion.div 
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
            <p>email</p>
            <div>
              <p>adson.formiga@gmail.com</p>
              <button>
                <Image width={20} height={20} src="/assets/copy.svg" alt="copiar" title="copiar" />
              </button>
            </div>
          </div>

          <div className={styles.Info}>
            <p>celular</p>
            <div>
              <p>(83) 98635-4504</p>
              <button>
                <Image width={20} height={20} src="/assets/copy.svg" alt="copiar" title="copiar" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  )
}