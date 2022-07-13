import { Component } from 'react';
import LoginForm from './LoginForm';
import Render from './Render/Render';
import items from '..//publication.json';
import { MaterialForm } from './MaterialForm/MaterialForm';
import * as API from './MaterialForm/services/app';
import { MaterialList } from './MaterialForm/MaterialList';

export class App extends Component {
  state ={
    material: [],
    isLoading: false,
    error: false
  }

async componentDidMount () {
  try {
    this.setState({ isLoading: true });
    const material = await API.gerMaterials();
    this.setState({ material, isLoading: false });    
  } catch (error) {
    this.setState({ error: true, isLoading: false });
    console.log(error);
  }  
}
deleteMaterial = async (id) =>{
  try {
    await API.deleteMaterial(id);
  
    this.setState(state => ({
      material: state.material.filter(item => item.id !== id)
    }))
  } catch (error) {
    console.log(error);
  }
}


addMaterial = async (values) => {
  try {    
    const materialEl = await API.addMaterials(values);
    this.setState(state => ({
      material: [...state.material, materialEl],     
    }))
  } catch (error) {
    console.log(error);
  }
 

  }

  render() {
    const {isLoading, material, error } = this.state;
    return (
      <>
      <LoginForm />
      <Render items={items}/>
      {error && (<p> Ups!</p>)}
      <MaterialForm 
      onSubmit={this.addMaterial}      
      />
      {isLoading ? <p>LOADIND</p>  
      : <MaterialList items={material}
      onDelete={this.deleteMaterial} 
       />}      
      </>
    );
  };
  }
  
