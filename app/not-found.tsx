import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <div className="grid min-h-screen place-items-center bg-background px-6 font-mono text-foreground">
      <div>
        <h2 className="mb-6 text-6xl font-bold uppercase tracking-tight">
          Not Found
        </h2>
        <p className="mb-8 text-muted-foreground">
          Could not find the page you were looking for.
        </p>
        <Link href="/" className="group flex items-center gap-2">
          <span className="text-xl">RETURN HOME</span>
          <span className="font-normal text-muted-foreground transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </div>
  )
}
