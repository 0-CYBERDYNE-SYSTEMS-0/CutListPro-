Shared Dependencies:

1. Variables:
   - "original breakdown"
   - "price list"

2. Data Schemas:
   - UserRequest: Contains the user's construction project request.
   - Breakdown: Contains the breakdown of the project into tools needed, supply list, cut list, and step-by-step instructions.
   - PriceList: Contains the detailed price list for the project with links to obtain supplies.
   - Sketch: Contains the detailed sketch of the completed project.
   - FinalLayout: Contains the original breakdown, the price list, and the prototype sketch.

3. ID Names of DOM Elements:
   - "breakdown-container"
   - "pricelist-container"
   - "sketch-container"
   - "finalLayout-container"

4. Message Names:
   - "breakdownMessage"
   - "priceListMessage"
   - "sketchMessage"
   - "finalLayoutMessage"

5. Function Names:
   - getBreakdown(): To get the breakdown of the project.
   - getPriceList(): To get the price list of the project.
   - getSketch(): To get the sketch of the project.
   - getFinalLayout(): To get the final layout of the project.

6. Shared Libraries:
   - Next.js: Used in all pages and API routes.
   - TypeScript: Used in all .tsx and .ts files.
   - Tailwind: Used in all .css files.
   - Chakra UI: Used in all components for UI.
   - OpenAI API: Used in all API routes for GPT-4 calls.

7. Shared Configurations:
   - tsconfig.json: TypeScript configuration used in all .ts and .tsx files.
   - next.config.js: Next.js configuration used in all pages and API routes.
   - postcss.config.js: PostCSS configuration used in all .css files.
   - tailwind.config.js: Tailwind configuration used in all .css files.