export default (data: Lume.Data) => {
  const comp = data.comp;
  const title = data.metas?.site
    ? `${data.title} - ${data.metas.site}`
    : data.title;
  return (
    <>
      <html lang={data.lang}>
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>{title}</title>
          <link rel="stylesheet" href="/style.css" />
        </head>
        <body>
          <header>
            <div>
              <a href="/">
                <strong>{data.metas?.site?.toString()}</strong>
              </a>
            </div>
            <comp.Menus />
          </header>
          <main>
            {data.children}
          </main>
        </body>
      </html>
    </>
  );
};
