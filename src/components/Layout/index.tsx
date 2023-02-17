import { motion } from 'framer-motion'

interface LayoutProps {
  fromLeft?: boolean;
  fromRight?: boolean;
  fromTop?: boolean;
  fromBottom?: boolean;
  toRight?: boolean;
  toLeft?: boolean;
  children: React.ReactNode;
}

export function Layout({ children, fromLeft, fromRight, fromTop, fromBottom, toLeft, toRight }: LayoutProps) {
  const fromX = fromLeft ? -200 : fromRight ? 200 : 0;
  const fromY = fromTop ? -50 : fromBottom ? 50 : 0;
  const toX = toLeft ? -200 : toRight ? 100 : 0;
  const toY = 0;

  const variants = {
    hidden: { opacity: 0, x: fromX, y: fromY },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: toX, y: toY },
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: 'tween', ease: 'easeInOut', duration: 0.25 }}
    >
      {children}
    </motion.div>
  )
}