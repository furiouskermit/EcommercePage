import Items from "./Items"

function List({data, current, onView}) {
  return (
    <div className="thumb">
      <div className="thumb-big"><img src={current.src} /></div>
      <div className="thumb-small">
        {
          data.map(
            item => 
            <Items key={item.id} item={item} onView={onView} />
          )
        }
      </div>
    </div>
  )
}
export default List;