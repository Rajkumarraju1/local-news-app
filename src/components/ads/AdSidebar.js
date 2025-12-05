export default function AdSidebar() {
  return (
    <div className="glass p-4 rounded-xl text-center shadow-md">
      <p className="text-sm text-gray-300">Ad Space</p>

      {/* Placeholder box */}
      <div className="mt-3 bg-gray-500/20 dark:bg-white/10 h-64 rounded-lg flex items-center justify-center">
        <span className="opacity-50 text-xs">Sidebar Ad</span>
      </div>
    </div>
  );
}
