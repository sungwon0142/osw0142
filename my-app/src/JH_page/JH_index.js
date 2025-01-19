// React와 ReactDOM을 import합니다. React는 컴포넌트를 만들 때 필요하고,
// ReactDOM은 실제 DOM에 React 컴포넌트를 렌더링하는 데 사용됩니다.
import React from 'react';
import ReactDOM from 'react-dom/client';

// App 컴포넌트를 import합니다. 이 컴포넌트는 애플리케이션의 루트 컴포넌트입니다.
import App from './App';

// CSS 파일을 import합니다. 이 파일에는 애플리케이션 전역에 적용될 스타일이 들어 있습니다.
import './index.css';

// `root`라는 id를 가진 DOM 요소를 찾아 그곳에 React 애플리케이션을 렌더링합니다.
const root = ReactDOM.createRoot(document.getElementById('root'));

// `React.StrictMode`는 React 애플리케이션의 개발 모드에서 추가적인 경고를 제공하며,
// 애플리케이션을 렌더링할 때 자주 발생할 수 있는 문제들을 확인할 수 있습니다.
root.render(
    <React.StrictMode>
        {/* App 컴포넌트를 렌더링합니다. */}
        <App />
    </React.StrictMode>
);
