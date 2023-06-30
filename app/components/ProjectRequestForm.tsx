import { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";

interface UserRequest {
  projectName: string;
  projectDescription: string;
}

const ProjectRequestForm = () => {
  const [request, setRequest] = useState<UserRequest>({ projectName: '', projectDescription: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRequest({ ...request, [e.target.name]: e.target.value });
  };

  const handleProjectRequest = async () => {
    const response = await fetch('/api/gpt4', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request),
    });
    const data = await response.json();
    // handle data here
  };

  return (
    <Box id="project-request-form">
      <FormControl>
        <FormLabel>Project Name</FormLabel>
        <Input type="text" name="projectName" value={request.projectName} onChange={handleInputChange} />
      </FormControl>
      <FormControl>
        <FormLabel>Project Description</FormLabel>
        <Textarea name="projectDescription" value={request.projectDescription} onChange={handleInputChange} />
      </FormControl>
      <Button onClick={handleProjectRequest}>Submit</Button>
    </Box>
  );
};

export default ProjectRequestForm;