function Items({item, onView}) {
  return (
    <button id={item.id} onClick={() => onView(item.id)}><img src={item.image} /></button>
  )
}
export default Items;