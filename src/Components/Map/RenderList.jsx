const RenderList = () => {
    const fruits = ['Apple', 'Banana', 'Orange', 'Grapes'];
    
  return (
    <div>
      <h1>List of Fruits</h1>
      <ul>
        {/* Using map to render each item in the array */}
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  )
}

export default RenderList;
