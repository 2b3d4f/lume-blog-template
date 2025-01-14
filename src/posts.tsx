export const title = "Posts";
export const menu = {
  visible: true,
};

export default ({ comp }: Lume.Data) => {
  return (
    <>
      <comp.Pages query="type=post" order="date=desc title=asc" />
    </>
  );
};
