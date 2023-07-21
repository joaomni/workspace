export default function Container({ children, id }) {
  return (
    <>
      <div className="text-white" id={id}>{children}</div>
    </>
  )
}