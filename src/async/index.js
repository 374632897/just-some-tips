function getNumber (num) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(num)
    }, 1000)
  })
}

async function getWrapper () {
  const a =  await getNumber(12)
  console.log(a)
}
getWrapper()
console.log('next')

// console.log(await getNumber(12))
