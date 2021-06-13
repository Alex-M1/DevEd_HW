import React from 'react';
import Converter from '../Converter';

function App() {
  const lengthValues = ['meters', 'yards', 'miles', 'versts', 'feet'];
  const currencyValues = ['UAH', 'EUR', 'USD', 'RUR'];

  return (
    <div >
      < Converter type="length" values={lengthValues} />
      < Converter type="currency" values={currencyValues} />
    </div>
  );
}

export default App;
