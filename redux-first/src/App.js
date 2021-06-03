import './App.css';
import {FirstHoc} from './HOC/firstHoc'
import {SecondHoc} from './HOC/secondHoc'
const  App=()=>{
  return(
    <div>
      <h1 className='text text-info m-5' style={{textAlign:'center'}}>Root component</h1>
      <FirstHoc></FirstHoc>
      <SecondHoc></SecondHoc>
    </div>
  )
}

export default App;