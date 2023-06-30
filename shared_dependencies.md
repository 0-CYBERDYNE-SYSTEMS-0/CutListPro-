Shared Dependencies:

1. Exported Variables:
   - "original breakdown"
   - "price list"

2. Data Schemas:
   - UserRequest: Contains the user's construction project request.
   - ProjectBreakdown: Contains the breakdown of the project including tools needed, supply list, cut list, and step-by-step instructions.
   - PriceList: Contains the detailed price list for the project with links to obtain supplies.
   - ProjectSketch: Contains the sketch of the completed project.

3. ID Names of DOM Elements:
   - "project-request-form"
   - "project-breakdown"
   - "price-list"
   - "project-sketch"
   - "final-layout"

4. Message Names:
   - "GPT4_CALL"
   - "DIFFUSION_CALL"
   - "PRICE_FINDER_CALL"

5. Function Names:
   - handleProjectRequest(): Handles the user's construction project request.
   - getProjectBreakdown(): Breaks down the project into tools needed, supply list, cut list, and step-by-step instructions.
   - getPriceList(): Finds the lowest price for each item on the supply list within a certain geographical area.
   - getProjectSketch(): Creates an image generation prompt with the variable information to create a sketch of the completed project.
   - getFinalLayout(): Brings together the original breakdown, the price list, and the prototype sketch into a user-friendly layout.