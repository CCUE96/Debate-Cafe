import Grid from '@mui/material/Grid';

import { Typography} from '@mui/material';


function ReplyCard() {


return (
<>
<hr />
  <Grid className="yanone" justifyContent="left" item xs zeroMinWidth>
    <Typography variant="h6" component="h4" style={{ margin: 0, textAlign: "left" }}><div className='yanone'>Michael Michael</div></Typography>
    <Typography style={{ textAlign: "left" }}>
   this was a great take, i think u are right{" "}
    </Typography>
    <Typography style={{ textAlign: "left", color: "gray" }}>
      posted 1 minute ago
    </Typography>
  </Grid>
  <hr />
  <Grid className="yanone" justifyContent="left" item xs zeroMinWidth>
    <Typography variant="h6" component="h4" style={{ margin: 0, textAlign: "left" }}><div className='yanone'>Wayne Wayne</div></Typography>
    <Typography style={{ textAlign: "left" }}>
    nice, this is great{" "}
    </Typography>
    <Typography style={{ textAlign: "left", color: "gray" }}>
      posted 1 minute ago
    </Typography>
  </Grid>
</>
)
}

export default ReplyCard