import { useState, useEffect } from 'react'
import './style.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import LoaderImg from './assets/loader.gif'

function App() {

  const [data, setData] = useState([])

  const fetchData = async () => {
    const res = await fetch('https://run.mocky.io/v3/c818a738-962f-4bf6-b3d9-d247db62b94e?mocky-delay=10s')
    const resJSON = await res.json()
    const _data = resJSON.result
    setData(_data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      {data && data.length > 0 ? (
        <div className="container">
          <h1 className="title">Artikel Terbaru</h1>
          <div className="divider"></div>
          <div className="wrapper">
            <section>
              {data.map((item, i) => (
                <div key={i} className="d-flex mb-4 item-wrapper">
                  <div className="image me-4">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="content flex-1">
                    <h4>{item.title}</h4>
                    <p>{item.content}</p>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      ) : (
        <div className="w-100 d-flex align-items-center justify-content-center">
          <img width="150px" height="150px" src={LoaderImg} alt="loader" />
        </div>
      )}
    </div>
  )
}

export default App;
