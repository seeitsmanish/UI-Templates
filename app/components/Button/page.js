"use client";
import Button from "./Button";
export default function page() {
  return (
    <div className="w-screen h-screen flex flex-col gap-3 justify-center items-center">
      <Button variant="primary" size="sm">
        Hello
      </Button>

      <Button onClick={() => console.log("Hiii")} variant="secondary" size="md">
        Hello
      </Button>

      <Button variant="outline" size="lg">
        Hello
      </Button>
    </div>
  );
}
