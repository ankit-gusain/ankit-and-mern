import { FormGroup, FormControl, InputLabel, Input, Typography, styled, Button } from "@mui/material";
import { useState } from "react";

import { addUser } from "../service/api";

const Container = styled(FormGroup)`
    width: 40%;
    margin: 7% auto;
    & > div {
        margin-top: 30px;
    }
`;

export default function AddingUser() {

    const defaultValue = {
        name: "",
        username: "",
        email: "",
        phone: ""

    }

    const [user, setUser] = useState(defaultValue);

    function onChangeValue(e) {
        // Update the state of the user object
        // - Create a new object by spreading the current state of the user object
        // - Use a computed property name to dynamically set the property based on the input field's name attribute
        // - Assign the new value from the input field to the corresponding property

        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
        //...user, // Spread operator creates a shallow copy of the object and herr it is used to copy all existing properties of the user object
        //[e.target.name]: e.target.value // Dynamically set the property based on the input field's name and assign the new value
    }


    async function clickHandler() {
        await addUser(user);  // as the adduser was a await hence here also same and await comes with async hence use it here 
    }




    return (
        <>
            {/* Using styled Container component instead of form group */}
            <Container>
                <Typography variant="h4">Lets Add User</Typography>

                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={onChangeValue} name="name" />
                </FormControl>

                <FormControl>
                    <InputLabel>Username</InputLabel>
                    <Input onChange={onChangeValue} name="username" />
                </FormControl>

                <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input onChange={onChangeValue} name="email" />
                </FormControl>

                <FormControl>
                    <InputLabel>Phone</InputLabel>
                    <Input onChange={onChangeValue} name="phone" />
                </FormControl>

                <FormControl>
                    <Button variant="contained" onClick={clickHandler}>Add User</Button>
                </FormControl>
            </Container>
        </>
    );
}
