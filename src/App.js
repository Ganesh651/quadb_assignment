const App = ()=>{

  const onClickItem = ()=>{
    console.log("Child Element is called...")
  }

  return(
  <ul onClick={onClickItem}>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
    </ul>
  )
}


export default App