/**
 * CSS Modules or styled-components could be used here.
 * For this project, we're using Tailwind CSS, but we'll define
 * some reusable layout classes for the Dashboard.
 */

export const dashboardStyles = {
  container: "max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12",
  header: "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10",
  controls: "flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto",
  searchWrapper: "w-full sm:w-80",
  sortWrapper: "w-full sm:w-48",
  resultsInfo: "mb-6 flex items-center justify-between",
  countText: "text-slate-400 text-sm",
};
