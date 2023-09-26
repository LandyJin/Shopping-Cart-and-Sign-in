export default async function getProducts(id) {
  let newId = id ? id : ''
  const res = await fetch(
    'http://localhost:4000/products/' + newId
  ).then(res => {
    if (res.ok) {
      return res.json()
    } else {
      throw new Error('error ' + res.status)
    }
  })
  return res
}