let article: readonly [number, string, boolean] = [11, "Title One", true]

article = [12, "Title two", false]

article.push(100)

console.log(article)

const [id, title, published] = article

console.log(id)
console.log(title)
console.log(published)