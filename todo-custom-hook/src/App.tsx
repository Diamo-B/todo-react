import './App.css'
import Form from './components/Form';

function App() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="card w-1/2 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-syne text-3xl">Todo List</h2>
          <Form/>
        </div>
      </div>
    </div>
  );
}

export default App