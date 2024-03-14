// import React, { Component } from 'react'

// class MyComponent extends Component {
//     state = {
//         message: "to class component"
//     }

//     changeState() {
//         this.setState({
//             message: "to outdated component"
//         })
//         console.log("updataed state", this.state.message)
//     }


//   render() {
//     return (
//       <div>
//         <div>
//         Welcome {this.state.message}
//       </div>
//       <button onClick={() => this.changeState()}>Change state</button>
//       </div>
      
//     )
//   }
// }

// export default MyComponent


import React, { useState } from 'react'

function MyComponent() {
    const [message, setMessage] = useState("to class component")
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
    }

  return (
    <div className='container'>
      <div>Welcome {message} {count}</div>
      <button onClick={() => setMessage("to outdated component")}>Change state</button>
      <p>Helo</p>
        <button onClick={() => handleClick()}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default MyComponent




