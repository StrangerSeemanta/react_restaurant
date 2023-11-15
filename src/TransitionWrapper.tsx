import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import "./pagetransition.css"
interface Props {
  children: React.ReactNode;
}
export default function TransitionWrapper({ children }: Props) {
  const location = useLocation()
  return (
    <>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames={"alert"} timeout={500}>
          {children}
        </CSSTransition>
      </TransitionGroup>
    </>
  )
}