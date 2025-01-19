import React, { useState } from "react";
import '../css/page2.css'; // CSS 파일 경로

const Page2 = () => {
     // 상태로 그리드 아이템을 관리
     const [gridItems, setGridItems] = useState([1]); // 초기에는 1개의 아이템만 있음

     // 아이템 추가 함수
     const addItem = () => {
          if(gridItems.length < 9){
               setGridItems([...gridItems, gridItems.length + 1]); // 새로운 아이템 추가
          }else {
               alert("최대 9개까지만 추가 가능합니다.");
          }

     };

     const removeItem = (index) => {
          setGridItems(gridItems.filter((item, i) => i !== index)); // 해당 아이템 삭제
     };

     return (
         <div>
              <div className="grid-container">
                   {gridItems.map((item, index) => (
                       <div key={index} className="grid-item">
                            {item}
                            <button onClick={() => removeItem(index)}>삭제</button>
                       </div>
                   ))}
                   <button className='addBtn' onClick={addItem}>+</button>
              </div>

         </div>
     );
};

export default Page2;
