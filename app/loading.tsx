export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-background text-foreground">
      <div className="animate-spin rounded-full w-12 h-12 border-4 border-foreground border-t-transparent"></div>
    </div>
  );
}
