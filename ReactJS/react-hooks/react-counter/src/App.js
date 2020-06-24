import React, { Fragment, useState } from 'react';
import Counter from './components/Counter/Counter'
import Counter2 from './components/Counter/Counter2'
import Band from './components/Band'

export default function App() {

  const [currentCounter, setCurrentCounter] = useState(2)
  const [steps, setSteps] = useState(0)

  const handleCount = (clickType) => {

    setCurrentCounter(clickType === '+' ? currentCounter + 1 : currentCounter - 1)
    setSteps(steps + 1)
  }

  return (
    <Fragment>

      <h3>Band</h3>
      <Band />

      <h3>Counter com estado isolado</h3>
      <Counter />
      <Counter />
      <Counter />

      <h3>Counter com estado compartilhado</h3>

      <Counter2
        onCount={handleCount}
        countValue={currentCounter}
        stepsValue={steps} />
      <Counter2
        onCount={handleCount}
        countValue={currentCounter}
        stepsValue={steps} />
      <Counter2
        onCount={handleCount}
        countValue={currentCounter}
        stepsValue={steps} />
    </Fragment>
  )
}

