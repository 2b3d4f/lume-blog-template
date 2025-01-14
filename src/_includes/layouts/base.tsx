import { ReactNode } from "npm:@types/react@*";

export default function Base(data: Lume.Data) {
  const { comp } = data;
  const title = data.title ? data.title : data.metas?.title;
  const pageTitle = data.metas?.site ? `${title} - ${data.metas.site}` : title;
  return (
    <>
      <html lang={data.lang }>
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>{pageTitle as string}</title>
          <link rel="stylesheet" href="/style.css" />
        </head>
        <body className="flex flex-col min-h-screen max-w-prose mx-auto">
          <comp.Header />
          <main className="grow">{data.content as ReactNode}</main>
          <footer className="p-4">Footer</footer>
        </body>
      </html>
    </>
  );
}
