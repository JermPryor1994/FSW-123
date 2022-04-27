import './App.css';
import CardBox from './card.js';

function App() {
  return (
    <div className='boxes'>
      <CardBox title='Title1' subTitle='SubTitle1' description='Hello World1' class='cardBox' backgroundColor='red' width='200px'/>
      <CardBox title='Title2' subTitle='SubTitle2' description='Hello World2' class='cardBox' backgroundColor='orange' width='200px'/>
      <CardBox title='Title3' subTitle='SubTitle3' description='Hello World3' class='cardBox' backgroundColor='yellow' width='200px'/>
      <CardBox title='Title4' subTitle='SubTitle4' description='Hello World4' class='cardBox' backgroundColor='green' width='200px'/>
    </div>
  );
}

export default App;
