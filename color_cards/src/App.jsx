import { useState } from 'react';
import './App.css'
import { Cards } from './components/Cards'

function validationNameColor(nomeCor) {
   return nomeCor.trim().length > 3
}

function validationColorHex(corHexa) {
   const padrao = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
   let erro = false

   if (corHexa.trim().length < 3) return false;

   corHexa.toUpperCase().split('').forEach(char => {
      if (!padrao.includes(char)) {
         erro = true
      }
   })

   return !erro
}


const App = () => {
   /* state form */
   const [form, setForm] = useState({
      colorName: '',
      colorCode: ''
   })

   /* state lista de cards */
   const [cards, setCards] = useState([])

   /* tem erro */
   const [errorForm, setErrorForm] = useState(false)

   function onSubmit(e) {
      e.preventDefault();
      let error = !validationNameColor(form.colorName) || !validationColorHex(form.colorCode)

      setErrorForm(error)
      if (!error) {
         setCards([...cards, {
            colorName: form.colorName,
            colorCode: '#' + form.colorCode
         }])
         setForm({
            colorName: '',
            colorCode: ''
         })
      }


   }

   return (
      <>
         <div className="App">
            <form onSubmit={onSubmit} className="formContainer">
               <h2>ADICIONAR NOVA COR</h2>

               <div className="inputs">
                  <div className="inputContainer">
                     <label htmlFor="colorName">Nome</label>
                     <input name="colorName" value={form.colorName} onChange={e => setForm({ ...form, colorName: e.target.value.toUpperCase() })} />
                  </div>
                  <div className="inputContainer">
                     <label htmlFor="colorCode">Cor</label>
                     <input name="colorCode" value={form.colorCode} maxLength="6" placeholder="Insita sua cor no formato Hexadecimal" onChange={e => setForm({ ...form, colorCode: e.target.value.toUpperCase() })} />
                  </div>
               </div>
               <div className="buttons">
                  <input type="submit" value="ADICIONAR" />
               </div>
            </form>

            <span className='error'>{errorForm ? 'Por favor, verifique os dados inseridos no formulário' : ''}</span>

            <h2>CORES FAVORITAS</h2>
            <Cards data={cards} />
         </div>
      </>

   )
}
export default App
