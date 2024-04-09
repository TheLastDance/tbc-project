export const handleChangeInputObj = (setState, e, key) => {
  setState(prev => ({
    ...prev,
    [key]: e.target.value
  }))
}

export const handleFetch = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("No response")
    const json = await res.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}