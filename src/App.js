import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  var person1 = {
    name:'Tusher Das',
    job:'Forever learner'
  }
  var colorFull = {
    color:'red',
    backgroundColor:'yellow'
  }
  const nameList = ['foo','moo', 'coo', 'loo'];
  const product = [
    {name:'Photoshop', price:'$99.99'},
    {name:'PDF Reader', price:'$0.99'},
    {name:'Ilstrator', price:'$59.99'},
    {name:'Premier Pro', price:'$199.00'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>My first react paragraph</p>
        <Counter></Counter>
        <Users></Users>
        <h1 style={colorFull}>Person name : {person1.name}</h1>
        <h1 style={{color:'gold'}}>Person job : {person1.job}</h1>
        <ul>
          {
            nameList.map(name => <li>{name}</li>)
          }
          {
            product.map(pname => <li>{pname.name}</li>)
          }
        </ul>
        {
          product.map(pd => <Products obj={pd}></Products>)
        }
        {/* <Products obj={product[1]}></Products> */}
      </header>
    </div>
  );
}
//components
function Users(){
  const [user, setUser] = useState(0);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data));
  }, [])
  return (
    <div>
      <h2>Dynamic user : {user.length}</h2>
      <ul>
        {
          user.map(u=><li>{u.name} : {u.email}</li>)
        }
      </ul>
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(0);
  return(
    <div>
      <h3>Counter : {count}</h3>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
      <button onClick={()=>setCount(count+1)}>Increase</button>
    </div>
  );
}
function Products(props){
  const {name, price} = props.obj;
  const productStyle = {
    backgroundColor: 'gray',
    borderRadius: '5px',
    height: '200px',
    width: '200px',
    margin: '5px'
  }
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h4>{price}</h4>
      <button>Buy now</button>
    </div>
  );
}


export default App;
