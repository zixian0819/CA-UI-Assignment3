// import React, {useState} from 'react'

// const UpdatedComponent = originalComponent => {
//     const [checked, setChecked] = useState(false);
//     const [checked1, setChecked1] = useState(false);
//   class NewComponent extends React.Component {
//     render() {
//       return <originalComponent/>

//     }
//   }
//   return NewComponent
// }

// export default UpdatedComponent

import { useState } from "react";

function CheckedBox({ clickChecked }) {
  return (
    <div>
      <input type="checkbox" onChange={() => clickChecked()} />
    </div>
  );
}

export default CheckedBox;
