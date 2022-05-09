import React from 'react'
import { Typography, Container } from "@material-ui/core";
const Confirmation = () => {
  return (
    <div>
        <h1>Order Successful</h1>
        <Container>
        <Typography variant="h6" gutterBottom style={{ margin: "20px 0" }}>
        Order Successfull
      </Typography>
      </Container>
    </div>
  )
}

export default Confirmation
