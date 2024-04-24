export const getAnyData = async (
  url: string,
  options?: RequestOptions
): Promise<ResponseData | PostItem> => {
  const res = await fetch(url, options);

  const json = await res.json();

  return json;
};
