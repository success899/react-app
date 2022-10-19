import './App.css';

function Header(props){
  console.log('props', props)
  return <header>
  <h1><a href='/' onClick={(event)=>{
    event.preventDefault();
    props.onChangeMode();
  }}>{props.title}</a></h1>
</header>
}

function Nav(props){
  const lis = []
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={(event)=>{
        event.preventDefault();
        props.onChangeMode(event.target.id);
      }}>{t.title}</a>
      </li>)
  }
  return <nav>
  <ol>
    {lis}
  </ol>
</nav>
}

function Article(props){
  console.log('props', props)
  return <article>
  <h2>{props.title}</h2>
  {props.body}
</article>
}


function App() {
  const topics = [
    {id:1, title:'HTML', body:'html is ...'},
    {id:2, title:'CSS', body:'CSS is ...'},
    {id:3, title:'JavaScript', body:'JavaScript is ...'}
  ]
  return (
    <div>
      <Header title='WEB' onChangeMode={()=>{
        alert('React');
      }}></Header>
      
      <Nav topics={topics} onChangeMode={(id)=>{
        alert(id);
      }}></Nav>

      <Article title='Welcome' body='Hello, WEB'></Article>
    </div>
  );
}

export default App;
