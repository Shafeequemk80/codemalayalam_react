import ListItem from "./ListItem";
function SimpleList(props) {
  console.log('RENDER SIMPLE LIST')
    const {data,onAction,onLabelclick}=props

  return (
  
    <div className="app-list">
      {data.map((obj) => {
        return (
          
          <ListItem
            key={obj.title}
            title={obj.title}
            desc={obj.desc}
            isActive={obj.isActive}
            onLabelclick={onLabelclick}

            onDelete={() => {
                onAction(obj);
            }}
          />
        );
      })}
    </div>
  );
}
export default SimpleList;
