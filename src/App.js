import './App.css';
import './tailwind.css';
import Header from './components/Header';

function App() {
  let obj = {
    taxi: "a car licensed to transport passengers in return for payment of a fare",
    food: {
      sushi: "a traditional Japanese dish of prepared rice accompanied by seafood and vegetables",
      apple: {
        Honeycrisp: "an apple cultivar developed at the MAES Horticultural Research Center",
        Fuji: "an apple cultivar developed by growers at Tohoku Research Station",
      },
    },
  };

  return (
    <div className="App">
      <Header taxi={obj.taxi} sushi={obj.food.sushi} honey={obj.food.apple.Honeycrisp} fuji={obj.food.apple.Fuji} />
    </div>
  );
}

export default App;
