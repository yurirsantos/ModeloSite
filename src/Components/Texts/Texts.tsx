export function Title(props: any) {
  let className = 'text-5xl text-center font-semibold m-5 '
  const color = props.color
  className = className + color

  return (
    <>
      <h1 className={className}>{props.text}</h1>
    </>
  )
}
