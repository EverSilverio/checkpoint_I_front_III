import { useState } from 'react';
import './App.css'
import { Cards } from './components/Cards'

const App = () => {
   /* state form */
   const [form, setForm] = useState({
      colorName: '',
      colorCode: ''
   })

   /* state lista de cards */
   const [cards, setCards] = useState([])

   function onSubmit(e) {
      e.preventDefault();

      console.log(cards);
      console.log(form);

      setCards([...cards, {
         colorName: form.colorName,
         colorCode: '#' + form.colorCode
      }])

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
                     <input name="colorCode" value={form.colorCode} placeholder="Insita sua cor no formato Hexadecimal" onChange={e => setForm({ ...form, colorCode: e.target.value.toUpperCase() })} />
                  </div>
               </div>
               <div className="buttons">
                  <input type="submit" value="ADICIONAR" />
               </div>
            </form>
 
            <span className='error'>Por favor, verifique os dados inseridos no formulário</span>

            <h2>CORES FAVORITAS</h2>
            <Cards data={cards} />
         </div>
      </>

   )
}
export default App
