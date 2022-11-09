import { useState } from 'react';
import './App.css'
import Card from './components/Card'

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

      setCards([...cards, form ])

   }


   return (
      <>
         <h1>Initial</h1>
         <form onSubmit={onSubmit}>
            <input value={form.colorName} onChange={ e => setForm({ ...form, colorName:e.target.value })}/>
            <input value={form.colorCode} onChange={ e => setForm({ ...form, colorCode:e.target.value })}/>
            <input type="submit" value="Salvar" />
         </form>
         <Card data="novo card"></Card>

         <h2>FORM</h2>
         <span>{JSON.stringify(form)}</span>

         <h2>CARDS</h2>
         <span>{JSON.stringify(cards)}</span>

      </>

   )
}
export default App
