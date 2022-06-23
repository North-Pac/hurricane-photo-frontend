import { useState } from 'react'
import { Box, Flex, FormControl, FormLabel, Heading, Input, Button } from "@chakra-ui/react"

export default function LoginForm({ onSubmit })
{

    const initialValues = {
        username: '',
        password: '',
    }

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const handleSubmit = event => {
//       event.preventDefault();
//       alert(`Email: ${email} & Password: ${password}`);
//     };
//     // ...
//   }

    const [values, setValues] = useState(initialValues);

    function submitHandler(event)
    {
        event.preventDefault();
        onSubmit(values.username, values.password);
        setValues(initialValues)
        // alert(`Email: ${values.email} & Password: ${values.password}`)
    }

    function inputChangeHandler(event)
    {

        let { name, value } = event.target;

        setValues({ ...values, [name]: value });
    }

    // https://blog.logrocket.com/how-to-create-forms-with-chakra-ui-in-react-apps/
    return (
        <Flex width="full" align="center" justifyContent="center" margin="2rem 0rem">
            <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
                <Box textAlign="center">
                    <Heading>Login</Heading>
                </Box>
                <Box my={4} textAlign="left">
                    <form>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input type="email" placeholder="email@email.com" />
                        </FormControl>
                        <FormControl mt={6}>
                            <FormLabel>Password</FormLabel>
                            <Input type="password" placeholder="**********" />
                        </FormControl>
                        <Button width="full" mt={4} type="submit">
                            Sign In
                        </Button>
                    {/* <form className="flex flex-col w-1/2 gap-4 p-8 mx-auto my-4 text-center bg-green-200 border-2 border-green-400 rounded-lg text-md" onSubmit={submitHandler}>
                        <div className="flex flex-col ">
                            <label className="mb-2 font-bold uppercase text-grey-darkest" htmlFor="username">User Name</label>
                            <input className="px-3 py-2 border text-grey-darkest" type="text" name="username" id="username" value={values.username} onChange={inputChangeHandler} placeholder="User Name" />
                        </div>

                        <div className="flex flex-col ">
                            <label className="mb-2 font-bold uppercase text-grey-darkest" htmlFor="password">Password</label>
                            <input className="px-3 py-2 border text-grey-darkest" type="password" name="password" id="password" value={values.password} onChange={inputChangeHandler} placeholder="password" />
                        </div>

                        <button className="px-3 py-4 mt-8 uppercase bg-green-500 rounded text-green hover:bg-green-600" type="submit">Sign In</button> */}

                    </form>
                </Box>
            </Box>
        </Flex>
    );
}