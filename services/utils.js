export const handleChangeInputObj = (setState, e, key) => {
  setState(prev => ({
    ...prev,
    [key]: e.target.value
  }))
}