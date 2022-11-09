import './App.css'
import Card from './components/Card'

const App = () => {
   function onSubmit(e) {
      e.preventDefault();

      alert('opa')
   }


   return (
      <>
         <h1>Initial</h1>
         <form onSubmit={onSubmit}>
            <input />
            <input />
            <input type="submit" value="Salvar" />
         </form>
         <Card data="novo card"></Card>
      </>

   )
}
export default App
