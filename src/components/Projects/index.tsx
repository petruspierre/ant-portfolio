import styles from './styles.module.scss'
import { projects } from "./content";

export function Projects() {
  return (
    <div>
      {projects.map(project => (
        <div className={styles.Project} key={project.title}>
          <div>
            <h2>{project.title}</h2>
            <p>{project.subtitle}</p>
          </div>
          <img alt={`Imagem de ${project.title}`} src={project.image} draggable={false} />
        </div>
      ))}
    </div>
  )
}