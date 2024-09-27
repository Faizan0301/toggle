import { useState } from 'react'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  let [color, setColor] = useState(true)
  let toggle = () => {
    setColor(!color)
  }
  return (


    <>
      <div className='container my-5 text-center'>
        <button onClick={ toggle } className='btn btn-lg btn-dark'>Toggle</button>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className={ `card ${color ? 'text-bg-danger' : ' text-bg-success'} mb-3 col-3 mx-2` }>
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Danger card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div className={ `card ${color ? 'text-bg-success' : ' text-bg-dark'} mb-3 col-3 mx-2` }>
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Danger card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div className={ `card ${color ? 'text-bg-dark' : ' text-bg-warning'} mb-3 col-3 mx-2` }>
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Danger card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div className={ `card ${color ? 'text-bg-warning' : ' text-bg-danger'} mb-3 col-3 mx-2` }>
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Danger card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div className={ `card ${color ? 'text-bg-danger' : ' text-bg-success'} mb-3 col-3 mx-2` }>
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Danger card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div className={ `card ${color ? 'text-bg-success' : ' text-bg-dark'} mb-3 col-3 mx-2` }>
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Danger card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
