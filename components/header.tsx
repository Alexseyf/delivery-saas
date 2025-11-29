"use client"

export function Header() {

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="w-full px-4 md:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <span className="text-xl font-bold text-primary-foreground">
                  <img src="/images/pizza-icon.png" alt="Pizza icon" className="h-10 w-10" />
                </span>
              </div>
              <span className="text-xl font-bold text-foreground">Pizza Delivery</span>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <a href="#menu" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Cardápio
              </a>
              <a
                href="#bebidas"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Bebidas
              </a>
              <a
                href="#contato"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Contato
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}