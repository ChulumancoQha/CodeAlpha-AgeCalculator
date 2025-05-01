import { Typography } from "@mui/material";

const AgeResults = ({age}) => {

    return ( 
        <div>
            <Typography align="center" variant="h6">You are <b>{age}</b> years old</Typography >
        </div>
     );
}
 
export default AgeResults;