const res = [1, 2, 3].reduce((pre, cur) => {
  console.log(pre, cur)
  pre.push(cur)
  return pre
}, [])
console.log(res)

res.push(...[4, 5])
console.log(res)
