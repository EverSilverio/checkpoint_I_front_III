import { useState } from 'react';
import './App.css'
import { Cards } from './components/Cards'
import { validationNameColor, validationColorHex } from './utils/index.js';

const App = () => {
   const [form, setForm] = useState({
      colorName: '',
      colorCode: ''
   })
   const [cards, setCards] = useState([])
   const [errorForm, setErrorForm] = useState(false)
   const [listaErros, setListaErros] = useState([]);

   function onSubmit(e) {
      e.preventDefault();
      const erros = []

      if (!validationNameColor(form.colorName)) {
         erros.push({
            status: true,
            msg: 'Informe um nome de cor com mais de 03 letras'
         })
      }

      if (!validationColorHex(form.colorCode)) {
         erros.push({
            status: true,
            msg: 'Informe uma cor hexadecimal válida, com 3 letras ou mais e sem o "#"'
         })
      }

      setErrorForm(erros.length > 0)

      if (erros.length == 0) {
         setCards([...cards, {
            colorName: form.colorName,
            colorCode: '#' + form.colorCode
         }])
         setForm({
            colorName: '',
            colorCode: ''
         })
      }

      setListaErros(erros.map( (e, i) => <span key={`err-${i}`} className='error'>{e.msg}</span>))

   }

   return (
      <>
         <div className="App">
            <form onSubmit={onSubmit} className={`formContainer${errorForm  ? ' formError' : ''}` }>
               <h2>ADICIONAR NOVA COR</h2>

               <div className="inputs">
                  <div className="inputContainer">
                     <label htmlFor="colorName">Nome</label>
                     <input type="text" name="colorName" autoFocus value={form.colorName} placeholder="Insira um nome para cor" onChange={e => setForm({ ...form, colorName: e.target.value.toUpperCase() })} />
                  </div>
                  <div className="inputContainer">
                     <label htmlFor="colorCode">Cor</label>
                     <input type="text" name="colorCode" value={form.colorCode} maxLength="6" placeholder="Insira sua cor no formato Hexadecimal" onChange={e => setForm({ ...form, colorCode: e.target.value.toUpperCase() })} />
                  </div>
               </div>
               <div className="buttons">
                  <input type="submit" value="ADICIONAR" />
               </div>
            </form>

            { listaErros }

            { cards.length > 0 ?  <h2>CORES FAVORITAS</h2> : ''}
            
            <Cards data={cards} />
         </div>
      </>

   )
}
export default App
