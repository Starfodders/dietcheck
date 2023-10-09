import 'dotenv/config'
import Display from './components/Display'

const page = () => {

  // const getData = async () => {
  //   fetch(`https://api.spoonacular.com/recipes/1003464/ingredientWidget.json?apiKey=${process.env.API_KEY}`)
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  //   .catch((err) => {
  //     console.error(err);
      
  //   })
  // }

  // getData()

  // const getPetFact = async () => {
  //   try {
  //     const res = await fetch('https://world.openpetfoodfacts.org/api/v0/product/20106836.json');
  //     if (res.status !== 200) {
  //       console.error('error');
        
  //     } 

  //     const data = await res.json()
  //     console.log(data);
      
      
  //   }
  //   catch(err) {
  //     console.error('Error making request to cat facts API');
      
  //   }
  // }

  // getPetFact()

  return (
    <div className='p-10'>
      <h1>Pet Diet</h1>
      <p>Pet Type</p>
      <button>Cat</button>
      <button>Dog</button>
      <Display/>
      <p>What info is needed? Healthy cat diets</p>
    </div>
  )
}

export default page

//redo the project to be a blog style. Upload blogs to a database (AWS) and query it using Prisma
//blog content will be around shopping list items, their cost associated. Can also build in the spoonacular API to have an autocomplete input that will add to the list