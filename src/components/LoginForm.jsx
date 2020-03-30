import React from "react";
import {
  Box,
  Form,
  TextInput,
  Button } from "grommet"

const LoginForm = () => {
  return (
    <Box>
      <Form id="login-form">
        <TextInput id="email" name="email" placeholder="email" />
        <TextInput
          id="password"
          name="password"
          type="password"
          placeholder="password"
        />
        <Button margin="small" type="submit" label="Sign in" />
      </Form>
    </Box>
  );
};

export default LoginForm;
