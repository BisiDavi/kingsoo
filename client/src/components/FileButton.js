import React from 'react';
import { Button } from '@material-ui/core';

const FileButton = () => {
  return (
    <Button
      variant="contained"
      label="Browse">
      Browse
      <input type="file" />
    </Button>
  )
}

export default FileButton;


