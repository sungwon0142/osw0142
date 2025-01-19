import React, { useEffect, useState } from 'react';

// 사용자 정보 (이메일과 비밀번호)를 정의합니다.
const User = {
    email: 'test@example.com',
    pw: 'test2323@@@'
};

export default function Login() {
    // 상태 관리: 이메일과 비밀번호, 유효성 체크, 버튼 활성화 상태
    const [email, setEmail] = useState(''); // 이메일 상태
    const [pw, setPw] = useState(''); // 비밀번호 상태

    const [emailValid, setEmailValid] = useState(false); // 이메일 유효성 상태
    const [pwValid, setPwValid] = useState(false); // 비밀번호 유효성 상태
    const [notAllow, setNotAllow] = useState(true); // 버튼 활성화 여부 (초기값은 비활성화)

    // 이메일과 비밀번호의 유효성 체크가 변경될 때마다 버튼 활성화 여부를 업데이트
    useEffect(() => {
        if(emailValid && pwValid) {
            setNotAllow(false); // 유효한 이메일과 비밀번호일 때 버튼 활성화
            return;
        }
        setNotAllow(true); // 하나라도 유효하지 않으면 버튼 비활성화
    }, [emailValid, pwValid]);

    // 이메일 입력 처리 함수
    const handleEmail = (e) => {
        setEmail(e.target.value); // 이메일 값 업데이트
        const regex =
            /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i; // 이메일 정규식
        if (regex.test(e.target.value)) {
            setEmailValid(true); // 이메일이 유효하면 유효성 상태를 true로
        } else {
            setEmailValid(false); // 유효하지 않으면 false로
        }
    };

    // 비밀번호 입력 처리 함수
    const handlePw = (e) => {
        setPw(e.target.value); // 비밀번호 값 업데이트
        const regex =
            /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/; // 비밀번호 정규식
        if (regex.test(e.target.value)) {
            setPwValid(true); // 비밀번호가 유효하면 유효성 상태를 true로
        } else {
            setPwValid(false); // 유효하지 않으면 false로
        }
    };

    // 로그인 버튼 클릭 시 확인하는 함수
    const onClickConfirmButton = () => {
        if(email === User.email && pw === User.pw) {
            alert('로그인에 성공했습니다.'); // 로그인 성공 시 알림
        } else {
            alert("등록되지 않은 회원입니다."); // 로그인 실패 시 알림
        }
    };

    return (
        <div className="page">
            <div className="titleWrap">
                이메일과 비밀번호를
                <br />
                입력해주세요
            </div>

            <div className="contentWrap">
                {/* 이메일 입력 필드 */}
                <div className="inputTitle">이메일 주소</div>
                <div className="inputWrap">
                    <input
                        className="input"
                        type="text"
                        placeholder="test@gmail.com"
                        value={email}
                        onChange={handleEmail} // 이메일 입력 시 처리할 함수
                    />
                </div>
                {/* 이메일 유효성 검사 메시지 */}
                <div className="errorMessageWrap">
                    {!emailValid && email.length > 0 && (
                        <div>올바른 이메일을 입력해주세요.</div>
                    )}
                </div>

                {/* 비밀번호 입력 필드 */}
                <div style={{ marginTop: "26px" }} className="inputTitle">
                    비밀번호
                </div>
                <div className="inputWrap">
                    <input
                        className="input"
                        type="password"
                        placeholder="영문, 숫자, 특수문자 포함 8자 이상"
                        value={pw}
                        onChange={handlePw} // 비밀번호 입력 시 처리할 함수
                    />
                </div>
                {/* 비밀번호 유효성 검사 메시지 */}
                <div className="errorMessageWrap">
                    {!pwValid && pw.length > 0 && (
                        <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                    )}
                </div>
            </div>

            {/* 확인 버튼: 유효한 이메일과 비밀번호일 때만 활성화 */}
            <div>
                <button onClick={onClickConfirmButton} disabled={notAllow} className="bottomButton">
                    확인
                </button>
            </div>
        </div>
    );
}
