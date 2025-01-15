import dice_one from './assets/one.svg'
import dice_two from './assets/two.svg'
import dice_three from './assets/three.svg'
import dice_four from './assets/four.svg'
import dice_five from './assets/five.svg'
import dice_six from './assets/six.svg'
import Start from './componets/Start.jsx'
import Game from './componets/Game.jsx'
import Rules from './componets/Rules.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'


let router = createBrowserRouter([
  {
    path: "/",
    element: <Start />
  },
  {
    path: "/game",
    element: <Game/>
  },
]);

const dice = [dice_one, dice_two, dice_three, dice_four, dice_five, dice_six];


function App() {

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
