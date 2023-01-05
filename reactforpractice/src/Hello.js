// import React from "react";

// // 첫 번째 컴포넌트 만들기
// function Hello({ color, name, isSpecial }) {
//   return (
//     <div style={{ color }}>
//       {isSpecial && <b>*</b>}안녕하세요. {name}
//     </div>
//   );
// }

// Hello.defaultProps = {
//   name: "이름없음",
// };

// // Hello 라는 컴포넌트를 내보내겠다는 의미. 이렇게 해주면 다른 컴포넌트에서 불러와서 사용 할 수 o.
// export default Hello;

import React, { Component } from "react";

class Hello extends Component {
  render() {
    const { color, name, isSpecial } = this.props;
    return (
      <div style={{ color }}>
        {isSpecial && <b>*</b>}
        안녕하세요 {name}
      </div>
    );
  }
}

Hello.defaultProps = {
  name: "이름없음",
};

export default Hello;
