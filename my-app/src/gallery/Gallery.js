import {useState} from "react"
import List from "./List"
import thumbnails from "../temp/thumbnails"

function Gallery() {
  const [data, setData] = useState(thumbnails);
  const [current, setCurrent] = useState(data[0]);
  const onView = (id) => {
    setCurrent(data.find(item => item.id === id))
  }
  return (
    <div className="main-left">
      <List data={data} current={current} onView={onView} />
    </div>
  )
}
export default Gallery;