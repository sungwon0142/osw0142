// Login 컴포넌트를 import합니다.
import Login from "./JH_Login";

// App 컴포넌트를 정의합니다.
function App() {
    return (
        // JSX 형식으로 화면에 표시할 내용을 정의합니다.
        <div>
            {/* Login 컴포넌트를 렌더링합니다. */}
            <Login />
        </div>
    );
}

// App 컴포넌트를 export하여 다른 파일에서 사용할 수 있게 합니다.
export default App;
