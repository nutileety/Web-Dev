import { useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from "recoil"
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
  const todos = useRecoilValueLoadable(todoAtomFamily(id));

  console.log(todos.state)
  if (todos.state === 'loading'){
    return (
      <div>
        Loading....
      </div>
    )
  }
  else if(todos.state === 'hasValue') {
    return (
    <>
      <div>
        <h5>id: {todos.contents.id} Title: {todos.contents.title}</h5>
        <h5>Completed: {String(todos.contents.completed)}</h5>
        <br />
      </div>
    </>
    )
  }
  else if(todos.state === 'hasError') {
    return (
      <div>
        Error is fetchiing backend....
      </div>
    )
  }
}

export {
    Counter,
    Increase,
    IsEven,
    Decrease,
    Navigation
}
