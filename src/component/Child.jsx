const Child = (props) => {
  const { data } = props;

  return(
    <>
      <h1>Child</h1>

      <h1>{data.name}</h1>
    </>
  )
};


export default Child;