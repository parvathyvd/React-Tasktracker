import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
     <div className="App ui raised very padded text container segment">
      <h1>Task Tracker</h1>
     <Header />
    </div>
    <div className="footer container segment">
    <Footer/>
    </div>
    </>
  );
}

export default App;
