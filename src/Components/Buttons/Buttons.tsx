export function Button(props: any) {
  let className =
    'w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10'
  let color = props.color
  if (color == 'white') {
    color = ' text-indigo-700 bg-indigo-100 hover:bg-indigo-200'
  }
  if (color == 'purple') {
    color = ' text-white bg-indigo-600 hover:bg-indigo-700'
  }
  className = className + color
  return (
    <div className="rounded-md shadow duration-150 hover:scale-105 m-2">
      <a href={props.link} className={className}>
        {props.title}
      </a>
    </div>
  )
}
