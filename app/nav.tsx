export function HomeTitle({ name }: { name: string }) {
    return (
      <nav className="flex h-16 w-full bg-teal-600 justify-center items-center text-4xl">
          <p id="titleText">Live Departures from {name}</p>
      </nav>
    );
}