import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-10 p-10">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold">Todos</h3>
        <Button>Add Todo</Button>
      </div>
    </div>
  );
}
