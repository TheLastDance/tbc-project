export const getAnyData = async (url: string, options?: Record<string, string | number | boolean>): Promise<any> => {
  const res = await fetch(url, options);

  const json = await res.json();

  return json;
};
