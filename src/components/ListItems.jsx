import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import Item from "./Item";
import NoItem from "./NoItem";

export default function ListItems({ urunler, onDeleteItem }) {
  return (
    <ul className="shopping-list list-unstyled">
      {urunler.length > 0 ? (
        urunler.map((urun, index) => <Item urun={urun} key={index} onDeleteItem ={onDeleteItem}/>)
      ) : (
        <NoItem />
      )}
    </ul>
  );
}
