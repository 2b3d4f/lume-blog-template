export const layout = "layouts/base.tsx";

export default (data: Lume.Data) => {
  return (
    <>
      {data.title ? <h1>{data.title}</h1> : null}
      {data.children}
    </>
  );
};
