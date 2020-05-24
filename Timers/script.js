console.log(
  'Quando é repetitivo faz o setInterval, quando é momentaneo faz o setTimeout'
)

window.addEventListener('load', function () {
  const timer = document.querySelector('#timer')
  let count = 0

  const interval = setInterval(() => {
    timer.textContent = ++count

    if (count === 10) {
      this.clearInterval(interval)
      return
    }

    if (count % 5 === 0) {
      setTimeout(() => {
        timer.textContent = count + ',5'
      }, 500)
    }
  }, 1000)
})
