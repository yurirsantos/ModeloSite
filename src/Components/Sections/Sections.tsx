export function SectionMain(props: any) {
  return (
    <main className="bg-gray-700 md:w-4/5 sm:m-auto m-3 rounded-md sm:rounded-t-none sm:rounded-br-md sm:mt-0 h-auto p-3 overscroll-x-contain">
      {props.children}
    </main>
  )
}
