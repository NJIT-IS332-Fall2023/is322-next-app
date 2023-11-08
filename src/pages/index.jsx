import BottomNav from "../components/BottomNav";
import { Button } from "@/components/ui/button";
import { Icons } from "../components/icons";
import { ChevronLeft } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-200">
      <h1 className="p-4 text-center text-2xl">Home Page</h1>
      <section className="my-auto flex flex-col gap-4">
        <Button size="lg">Continue</Button>
        <Button variant="outline" size="lg">
          Continue
        </Button>
        <Button variant="icon" size="lg">
          <Icons.facebook className="h-6 w-6" />
          Facebook
        </Button>
        <Button variant="rounded" size="icon" className="mx-auto">
          <ChevronLeft />
        </Button>
      </section>
      <BottomNav />
    </div>
  );
}
