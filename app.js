const form = document.querySelector('form')
const result = document.querySelector('.result')

form.addEventListener('submit', e => {
  e.preventDefault()

  let score = 0
  let corrects = ['A', 'A', 'A', 'A']

  const answers = [
    form.q1.value, 
    form.q2.value, 
    form.q3.value, 
    form.q4.value
  ];

  answers.forEach((answer, i) => {
    if(answer === corrects[i]) {
      score += 25;
    }
  })

  scrollTo(0, 0)
  result.classList.remove('d-none')

  let output = 0
  const timer = setInterval(() => {
    result.textContent = `${output}%`
    if(output === score) {
      clearInterval(timer)
    } else {
      output++
    }
  }, 30)
})
