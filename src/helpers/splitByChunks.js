const splitByChunks = (arr, chunk) => {
  const res = []
  
  const parts = Math.ceil(arr.length / chunk)
  
  for (let i = 0; i < parts*chunk; i+=chunk) {
    res.push(arr.slice(i, chunk+i))
  }
  

  return res
}

module.exports = splitByChunks
