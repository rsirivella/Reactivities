import { Duck } from './demo'
interface Props{
    duck: Duck
}
export default function DuckItem({duck}: Props) {
    return (
      <div key={duck.name}> 
            <span>{duck.name}</span>
            <button onClick={() => duck.makeSound(duck.name + ' Quack')}> Make Sound </button>
          </div>
    )
  }
// export default function DuckItem(props: Props) {
//   return (
//     <div key={props.duck.name}> 
//           <span>{props.duck.name}</span>
//           <button onClick={() => props.duck.makeSound(props.duck.name + ' Quack')}> Make Sound </button>
//         </div>
//   )
// }
