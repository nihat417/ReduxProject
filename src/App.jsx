import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment , incrementByAmount } from './redux/slices/counterSlice'
import { enableDarkMode,disableDarkMode, enableCustomColor } from './redux/slices/colorSlice'

function App() {
  const count = useSelector((state) => state.counter.value);
  const color = useSelector((state) => state.color.value);
  const dispatch = useDispatch();

  return (
    <>
     
      <div style={{backgroundColor : color}} className="card">
        <button onClick={() => dispatch(increment())}>+</button>
        <p>count is {count}</p>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(color === "white" ? enableDarkMode() : disableDarkMode())}>
          {color === "gary" ? "disable dark mode " : "enable dark mode"}</button>
      </div>
    </>
  )
}

export default App
