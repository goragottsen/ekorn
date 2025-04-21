# **Notes**

## **Thought Process**

My approach:
1. Read the technical task to understand requirements and restrictions
2. Read Svelte docs to grasp basic concepts
3. Reviewed the provided codebase and example components. I also checked the package.json to see installed versions and whether any additional packages were included. I noticed that Svelte v. 5 is a bit different from prev versions, and a lot of older code examples online may be deprecated.
4. Reviewed the Figma mockup, special attention to:
    - Font color and sizes
    - Cards layout 
5. So my plan was as follows:
    - Start with students data transformation:
        - Ensure each object in the studentsData array includes all required fields to fill Students data array
        - Create utility functions to help transform the data
        - Ensure all types are correct
        - Handle potential errors and add validation
    - UI Implementation:
        - Build a basic page layout and student card components
        - Add global variables for font, colors, and spacing to keep styling consistent across the app. I know most are used only once, but I still find it useful to keep these clean and in one place
        - Style the components to match the mockup
        - Adjust the style for mobile
    - Filtering and sorting:
        - Add student array transformation logic and props
        - Add a toolbar component
        - Adjust styles
6. Implement and test everything

### Error Handling
- Currently showing "No students found" for empty student array and disabling Sorting / Filtering
- Could improve by:
  - Adding error boundaries
  - Implementing per - student error handling
  - Adding loading states (when fetching data from server)


### Performance Considerations
- Could memoize expensive calculations (e.g., average score)
- Could implement pagination or infinite scroll

### Accessibility
- Need to add:
  - aria labels
  - Keyboard navigation

## **Known Limitations**
- No test coverage because it requires test package

## **Assumptions
- There are no specific requirements for how to determine a “Passed” value, so based on what I read online and what I remember, a score is considered passed at 75%. Initially, I used the average score to determine pass / fail since we weren’t supposed to add new fields to the Student type. But even with a good average, a student could still fail a subject.
So, I updated the logic: fetch the student by ID, check each of their three scores, and return false if any of them is below 75%.

- There are no strict requirements for Sorting. I just used the example - sort by name. I assumed we don’t need ascending/descending toggle. If we did, I’d add a flag for it. I used localeCompare() for string comparison, which should be sufficient for this use case.

- There are no strict requirements for Filter function - so I used the example case - to show only active students.

- For filtering and sorting, I assumed we want to keep the original data state intact and apply both at the same time.

- I assumed first and last names are already capitalized and didn’t need validation. But in a real-world app, I’d parse and validate every value coming from the data array.
