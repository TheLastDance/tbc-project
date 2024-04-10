export const handleChangeInputObj = (setState, e, key) => {
  setState(prev => ({
    ...prev,
    [key]: e.target.value
  }))
}

export const handleFetch = async (url, options) => {
  try {
    const res = await fetch(url, options);

    if (!res.ok) throw new Error("No response");

    const json = await res.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}