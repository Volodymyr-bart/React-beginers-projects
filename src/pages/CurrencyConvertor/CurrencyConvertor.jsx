import { useEffect, useState } from "react";
import { Block } from "../../components/Block/Block";

function CurrencyConvertor() {
  const [rates, setRates] = useState({});
  console.log(rates);

  const codes = [{ USD: 840 }, { EUR: 978 }, { UAH: 980 }];

  useEffect(() => {
    fetch("https://api.monobank.ua/bank/currency")
      .then((res) => res.json())
      .then((res) => setRates(res))
      .catch((er) => console.log(er));
  }, []);

  return (
    <div className="App">
      <Block value={0} currency="RUB" onChangeCurrency={(cur) => console.log(cur)} />
      <Block value={0} currency="USD" />
    </div>
  );
}

export default CurrencyConvertor;
