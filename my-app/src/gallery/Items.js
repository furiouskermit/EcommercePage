function Items({item, onView}) {
  return (
    <button id={item.id}><img src={item.image} /></button>
  )
}
export default Items;