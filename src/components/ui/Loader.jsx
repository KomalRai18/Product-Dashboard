/* ─── Skeleton card ──────────────────────────────────────────── */
export const SkeletonCard = () => (
  <div className="bg-slate-800/60 rounded-2xl overflow-hidden border border-slate-700/40 flex flex-col">
    {/* Image area */}
    <div className="skeleton h-52 w-full rounded-none" />

    {/* Content area */}
    <div className="p-4 flex flex-col gap-3">
      <div className="skeleton h-3.5 w-4/5" />
      <div className="skeleton h-3.5 w-3/5" />

      <div className="flex items-center gap-2 mt-1">
        <div className="skeleton h-3 w-24" />
      </div>

      <div className="flex items-center justify-between mt-2">
        <div className="skeleton h-6 w-16" />
        <div className="skeleton h-8 w-20 rounded-xl" />
      </div>
    </div>
  </div>
);

/* ─── Skeleton grid ──────────────────────────────────────────── */
export const SkeletonGrid = ({ count = 8 }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
    {Array.from({ length: count }, (_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
);

/* ─── Spinner ────────────────────────────────────────────────── */
export const Spinner = () => (
  <div className="flex justify-center items-center py-12">
    <div className="w-10 h-10 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin" />
  </div>
);
