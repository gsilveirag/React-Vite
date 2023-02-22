import  './styles.css';
import { Card } from '../../components/Card';

export function Home() {

  return (
    <div className='container'>
      <h1> Lista de Presença:</h1>
      <input type="text" placeholder="Digite o nome..."/>
      <button type="button">Adicionar</button>
    
      <Card name='Alessando' time='10:55:25' />
      <Card name='Diego' time='12:55:25' /> 
      <Card name='Anna' time='10:59:29'/>
    </div>
  )
}


