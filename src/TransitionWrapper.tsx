import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import "./pagetransition.css"
import { useRef } from 'react';
interface Props {
  children: React.ReactNode;
}
export default function TransitionWrapper({ children }: Props) {
  const location = useLocation()
  const nodeRef = useRef(null)
  return (
    <>
      <TransitionGroup>
        <CSSTransition nodeRef={nodeRef} key={location.key} classNames={"alert"} timeout={500}>
          <div ref={nodeRef}>{children}</div>
        </CSSTransition>
      </TransitionGroup>
    </>
  )
}