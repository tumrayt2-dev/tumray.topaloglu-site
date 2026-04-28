'use client'

import { useLanguage } from './language-provider'
import {
  featuredProjects,
  projectCategoryLabel,
  projectDescription,
  type Project,
  type ProjectStatus,
} from '../lib/projects'

const statusBadgeStyles: Record<ProjectStatus, string> = {
  live: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-900',
  closedTest:
    'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-900',
  earlyTest:
    'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950 dark:text-sky-300 dark:border-sky-900',
  development:
    'bg-neutral-50 text-neutral-600 border-neutral-200 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-800',
}

export function Projects() {
  const { t, lang } = useLanguage()

  return (
    <section id="projects" className="mb-16 scroll-mt-24">
      <h2 className="text-xl font-semibold tracking-tight mb-6">
        {t.sections.featured}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {featuredProjects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const { t, lang } = useLanguage()
  const statusLabel = t.statusLabels[project.status]
  const actionLabel = t.projectActions[project.action]

  const isExternalLink =
    (project.action === 'visit' || project.action === 'playStore') &&
    project.href
  const isContact = project.action === 'contactForAccess'

  const content = (
    <div className="h-full flex flex-col p-5 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors">
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-medium tracking-tight">{project.name}</h3>
        <span
          className={`shrink-0 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border ${statusBadgeStyles[project.status]}`}
        >
          {statusLabel}
        </span>
      </div>
      <p className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-3">
        {projectCategoryLabel(project, lang)}
      </p>
      <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4 flex-1">
        {projectDescription(project, lang)}
      </p>
      <p className="text-sm text-neutral-900 dark:text-neutral-100 underline-offset-4 decoration-neutral-400 dark:decoration-neutral-600 group-hover:underline">
        {actionLabel} →
      </p>
    </div>
  )

  if (isExternalLink) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        {content}
      </a>
    )
  }

  if (isContact) {
    return (
      <a href="#contact" className="group block">
        {content}
      </a>
    )
  }

  return <div className="block">{content}</div>
}
