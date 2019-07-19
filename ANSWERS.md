# Answers

- [ ] Why are forms used so often in web applications and software?
For many applications it’s the artery between your code and the user – the only means by which they have to tell us what we need to know.  Think signup, login, search, dropdowns, etc. 

- [ ] What advantages are there by using a forms library like Formik?
 Formik abstracts away some of the more complex situations we might come across, such as:

    Nested form data and/or arrays
    Wiring up state
    Validation
    Error messages
- [ ] What is stateful logic?
Stateful logic is logic that is built into a component.
- [ ] What is a custom hook, and what does it mean to compose hooks together?
Custom Hooks, so-called because you are building the hook yourself, allow you to apply non-visual behavior and stateful logic throughout your components by reusing the same hook over and over again. Composing hooks is when we extend our stateful logic by combining several hooks together in a powerful, single custom hook. 
- [ ] Describe the process of retriving a token from a server and using that token in subsequent API calls.
The server running these services can issue a JWT (JSON Web Token) as the authentication token, in exchange for correct login credentials.  From then on, it’s the application’s responsibility to add an Authorization: <token> header to every request, in order to be allowed access to protected resources that require authentication.