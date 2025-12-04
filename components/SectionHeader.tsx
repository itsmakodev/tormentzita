export default function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-5 flex items-center justify-between gap-3">
      <h2 className="flex items-center gap-2 text-xl font-extrabold">
        <span aria-hidden className="h-6 w-2 rounded-full bg-gradient-to-b from-emerald-500 to-transparent" />
        {title}
      </h2>
      {subtitle && <p className="text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>}
    </div>
  )
}
