import React from 'react'
import { Button } from "grommet"
import { connect, useDispatch} from "react-redux"

const LoginButton = () => {
  const dispatch = useDispatch()

  return (
    <Button 
    label="Login"
    onClick={dispatch({type: "SHOW_LOGIN_FORM"})}
    />
  )
}

export default connect()(LoginButton)