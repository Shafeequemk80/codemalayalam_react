import Label2 from "./Label2.jsx";
import "./litstItem.css";

function ListItem(props) {
  console.log('RENDER LIST ITEM')


  const { title, desc, isActive, onDelete,onLabelclick } = props;

  return (
    <div className="list-item">
      <hr />
      <div className="list-title">
        <h4>{title}</h4>
        <label onClick={onDelete} className="list-label-title">Delete</label>
      </div>
      <div className="list-desc">{desc}</div>

      <div className="list-label">
        <Label2
          onAction={onLabelclick}
          isActive={isActive}
        />
      </div>
    </div>
  );
}

export default ListItem;
