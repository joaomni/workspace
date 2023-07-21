export default function Section({ children, color, className }) {
  return (
    <>
      <section className={className} id={(color == 'white') ? 'white' : (color == 'black' ? 'black' : '')}>{children}</section>
    </>
  )
}