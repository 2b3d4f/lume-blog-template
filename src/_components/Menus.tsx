import Searcher from "lume/core/searcher.ts";

interface MenusProps extends Lume.Data {
  search: Searcher;
}

export default ({ search }: MenusProps) => {
  const menus = search.pages("menu.visible=true");
  return (
    <nav>
      <ul>
        {menus.map((menu) => (
          <li key={menu.url}>
            <a href={menu.url}>{menu.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
