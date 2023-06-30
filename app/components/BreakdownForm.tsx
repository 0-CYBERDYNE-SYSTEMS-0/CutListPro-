```tsx
import { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';

const BreakdownForm = () => {
  const [projectRequest, setProjectRequest] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('/api/breakdown', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ projectRequest }),
    });

    const { originalBreakdown } = await response.json();
    console.log(originalBreakdown);
  };

  return (
    <Box id="breakdownForm" as="form" onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>Construction Project Request</FormLabel>
        <Textarea
          value={projectRequest}
          onChange={(e) => setProjectRequest(e.target.value)}
          placeholder="Describe your construction project here..."
          size="lg"
          isRequired
        />
      </FormControl>
      <Button type="submit" colorScheme="teal" size="lg" mt={4}>
        Submit
      </Button>
    </Box>
  );
};

export default BreakdownForm;
```