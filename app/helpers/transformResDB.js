const transformResDB = articles => 
  articles.map(({ _doc }) => {
    const { _id, ...rest } = _doc
    return {
      ...rest,
      id: _id
    }
  })

module.exports = transformResDB
