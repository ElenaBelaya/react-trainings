import { Component } from 'react';
import { Controls } from './Controls';
import { Position } from './Position';
import { Publication } from './Publication';

const KEY = 'storage_index';

class Render extends Component {
state = {
publicationIndex: 0,
}; 
componentDidMount() {
    const index = localStorage.getItem(KEY);
    if (index !== null) {
        this.setState({
            publicationIndex: Number(index),
        })
    }
}

componentDidUpdate(_, prevState) {
    if(prevState.publicationIndex !== this.state.publicationIndex) {       
    localStorage.setItem(KEY, this.state.publicationIndex)     
   }   
}

handleChangePage = value => {
this.setState(state => ({
    publicationIndex: state.publicationIndex + value,
}))
}          

   render() {
    const {publicationIndex} = this.state;
    const {items} = this.props; 
    const lastPage = items.length; 
    const currentItem = items[publicationIndex];
    return (
        <div>
            <Controls 
            onForward={() => this.handleChangePage(1)}
            onBack={() => this.handleChangePage(-1)}
            prevDesabled={publicationIndex === 0}
            nextDesabled={publicationIndex === items.length - 1}
            />
           
           <Position
           currentPage={publicationIndex + 1}
           total={lastPage} />
         
           <Publication items={currentItem} />                   
        </div>
        
            );
        };     
   }
   
  

export default Render;