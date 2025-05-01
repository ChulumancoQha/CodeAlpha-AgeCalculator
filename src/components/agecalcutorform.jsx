import { useState } from "react";

function AgeCalculatorForm  ({calculateAge}) {

    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(date);
        
        calculateAge(date);
    }


    
    return ( 
        <form onSubmit={handleSubmit} className="flex flex-col">
            <input
  type="date"
  value={date}
  required
  onChange={e => setDate(e.target.value)}
  className="block w-full max-w-sm px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
/>


            <button type="submit" className="p-3 bg-blue-400 my-5" >Calculate</button>
        </form>
     );
}
 
export default AgeCalculatorForm;