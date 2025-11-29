import { CartProvider} from "@/components/cart-provider"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background w-full">
        <Header />
      </div>
    </CartProvider>
  );
}
