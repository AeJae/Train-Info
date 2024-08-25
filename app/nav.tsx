export function HomeTitle({ name }: { name: string }) {
    return (
      <nav className="flex h-16 w-full bg-teal-600 justify-center items-center md:text-4xl sm:text-xl overflow-hidden text-nowrap">
          <p id="titleText">Live Departures from {name}</p>
      </nav>
    );
}