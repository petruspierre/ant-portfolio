
import Image from "next/image";
import Link from "next/link";

import styles from './styles.module.scss'

interface ArrowLinkProps {
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
  link: string;
  label: string;
}

export default function ArrowLink(props: ArrowLinkProps) {
  const classes = [
    props.left ? styles.Left : "",
    props.right ? styles.Right : "",
    props.top ? styles.Top : "",
    props.bottom ? styles.Bottom : "",
  ].join("");

  return (
    <div className={styles.Container}>
      <Link href={props.link}>
        <a className={classes}>
          <span>
            {props.label}
          </span>
          <Image 
            height={40}
            width={props.top || props.bottom ? 40 : 18}
            src="/assets/arrow.svg"
            alt=""
          />
        </a>
      </Link>
    </div>
  )
}