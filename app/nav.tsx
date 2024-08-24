export function HomeTitle({ name }: { name: string }) {
    return (
      <nav className="flex h-20 w-full bg-teal-600 justify-center items-center text-4xl">
          <p id="titleText">{name}</p>
      </nav>
    );
}