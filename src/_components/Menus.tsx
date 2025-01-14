export default function Menus(data: Lume.Data) {
  const { search } = data;
  return (
    <ul className="flex justify-between gap-2">
      {
      search.pages("menu.visible=true", "order=asc title=asc").map((menu) => {
        if (!menu.title) {
          throw new Error(`Menu title is missing for menu: ${menu.page.sourcePath}`);
        }
        return (
          <li key={menu.url}>
            <a href={menu.url}>{menu.title}</a>
          </li>
        );
      })}
    </ul>
  );
}
