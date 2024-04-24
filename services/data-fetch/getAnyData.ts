export const getAnyData = async<T>(
  url: string,
  options?: RequestOptions
): Promise<T> => {
  const res = await fetch(url, options);

  const json = await res.json();

  return json;
};
