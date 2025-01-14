export default function Header(data: Lume.Data) {
  const comp = data.comp;
  return (
    <header>
      <nav className="flex justify-between p-4">
        <a href="/">
          <strong>{(data.metas?.site as string) || "Top"}</strong>
        </a>
        <comp.Menus />
      </nav>
    </header>
  );
}
