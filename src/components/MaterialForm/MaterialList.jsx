export const MaterialList = ({items, onDelete}) => {
return (
    <ul>
        {            
        items.map(item =>      
        <li key={item.id}>
        <b>Title:</b>{item.title} <br/>
        <b>Link:</b>{item.link}
        <button type="button" 
        onClick={() => onDelete(item.id)}>Delete</button>
        <hr/>
        </li>
        
        )
    }
    </ul>
)}
