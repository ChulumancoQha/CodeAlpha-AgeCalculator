function AgeCalculatorForm  () {
    return ( 
        <form>
            <input type="date" id="dob" name="dob" required />
            <button type="submit">Calculate</button>
        </form>
     );
}
 
export default AgeCalculatorForm;