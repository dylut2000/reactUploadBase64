import {useState} from 'react'

const App = () => {
  const [file, setFile] = useState(null)

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0]
    const reader = new FileReader()

    reader.onload = () => {
      const base64String = reader.result
      console.log(base64String)
      setFile(base64String)
    }

    reader.readAsDataURL(selectedFile)
  }

  return (
    <div>
      <input type='file' onChange={handleFileChange} />
      {file && <img src={file} alt='Uploaded file' />}
    </div>
  )
}

export default App
