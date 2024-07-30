// src/components/PageTransition.js

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './PageTransition.css'; // для стилей анимации

const PageTransition = ({ children, location }) => (
    <TransitionGroup>
        <CSSTransition
            key={location.pathname}
            timeout={300}
            classNames="fade"
        >
            {children}
        </CSSTransition>
    </TransitionGroup>
);

export default PageTransition;
