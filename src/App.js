import "./App.css";

const App = () => {
  const search = (q) => {
    console.log({q})
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Cinema</h1>
        <input 
          placeholder="cari movie..." 
          className="Movie-search" 
          onChange={({target}) => search(target.value)}

        />
        <div className="Movie-container">
          <div className="Movie-wrapper">
            <div className="Movie-title">Contoh Pertama</div>
            <img src="" alt="" className="Movie-image" />
            <div className="Movie-date">11-12-2023</div>
            <div className="Movie-rate">8.9</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
