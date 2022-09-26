const sum = (a,b) => a+b

const cacheEnchancer = (fun) => {
  const cacheMap = new Map();
  return function(...arguments){
    const keyFromArguments = arguments.sort((a,b) => a+b).join(',')
    if(cacheMap.has(keyFromArguments)){
      return cacheMap.get(keyFromArguments)
    }
    else {
      const keyFromArguments = arguments.sort((a,b) => a+b).join(',')
      const result = fun(...arguments)
      cacheMap.set(keyFromArguments,result)
      return result
    }
  }
}

const cachedSum = cacheEnchancer(sum)

console.log(cachedSum(1,2))
console.log(cachedSum(1,2))
console.log(cachedSum(2,2))