import {useEffect} from 'react' 
import 'dotenv/config'

const page = () => {

  const getData = async () => {
    fetch(`https://api.spoonacular.com/recipes/1003464/ingredientWidget.json?apiKey=${process.env.API_KEY}`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch((err) => {
      console.error(err);
      
    })
  }

  // getData()

  return (
    <div className='p-10'>Testing for food API responsivity.</div>
  )
}

export default page