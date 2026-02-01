import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
     <div className="min-h-screen bg-stone-50 text-stone-900">
      <section className="pt-32 pb-20 px-4">
        <h1 className="text-4xl font-bold text-center">Welcome to the Home Page</h1>
        <Button variant="destructive" className="mt-4 mx-auto block">Destructive</Button>
      </section>
    </div>
  );
}
