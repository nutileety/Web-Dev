import { useRecoilValue, useSetRecoilState } from "recoil"
import { counterAtom, evenSelector } from './store/atoms/atomCounter'
import { notificationAtom, messageAtom, jobsAtom, totalNotification } from './store/atoms/atomNavBar'
import { todoAtomFamily } from './store/atoms/atomFamily'


function Counter() {
  const count = useRecoilValue(counterAtom)

  return (
    <div>
      {count}
    </div>
  )
}

function IsEven() {
  const isEven = useRecoilValue(evenSelector)

  return (
    <div>
      {isEven ? 'Even' : 'Odd'}
    </div>
  )
}

function Increase() {
  const setCount = useSetRecoilState(counterAtom)

  return (
    <div>
      <button onClick={() => setCount(count => count + 2)} >Increase </button>
    </div>
  )
}

function Decrease() {
  const setCount = useSetRecoilState(counterAtom)

  return (
    <div>
      <button onClick={() => setCount(count => count - 1)} >Decrease</button>
    </div>
  )
}

function Navigation() {
  const notificationCount = useRecoilValue(notificationAtom)
  const messageCount = useRecoilValue(messageAtom)
  const jobsCount = useRecoilValue(jobsAtom)
  const totalNotificationCount = useRecoilValue(totalNotification)
    return (
        <div>
            <button >Home</button>
            <button >Notifications ({notificationCount >= 99 ? "99+" : notificationCount})</button>
            <button >Messages ({messageCount})</button>
            <button >Jobs ({jobsCount})</button>
            <button >Me ({totalNotificationCount})</button>
        </div>
    )
}

export function Todo({id}) {
  const todos = useRecoilValue(todoAtomFamily(id));

  return (
    <>
      <div>
        <h5>Title: {todos.title}</h5>
        <h5>Completed: {String(todos.completed)}</h5>
      </div>
    </>
  )
}

export {
    Counter,
    Increase,
    IsEven,
    Decrease,
    Navigation
}
