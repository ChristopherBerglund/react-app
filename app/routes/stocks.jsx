import { useEffect, useState } from 'react';

export default function Stocks() {
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        fetch('https://testapi-6jwh.onrender.com/stock')
            .then((response) => response.json())
            .then((data) => {
                console.log('Fetched stock data:', data);
                setStocks(data);
            })
            .catch((error) => console.error('Error fetching stock data:', error));
    }, []);  

    return (
        <div>
            <h1>Stocks</h1>
            <ul>
                {stocks.map((stock) => (
                    <li key={stock.id}>
                        {stock.name} - ${stock.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}
