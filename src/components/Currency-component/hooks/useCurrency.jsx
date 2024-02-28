import { useEffect } from 'react'
const useCurrency = () => {

    useEffect(async () => {
        const url = 'https://currencyconverter.p.rapidapi.com/?from_amount=1&from=USD&to=SEK';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
                'X-RapidAPI-Host': 'currencyconverter.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }, [])

    return (
        <div>

        </div>
    )
}

export default useCurrency;