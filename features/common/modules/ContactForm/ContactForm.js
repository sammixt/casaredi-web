import { Box, Button, Checkbox, FormControl, Input, Text, Textarea } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
const ContactForm = () => {

    const { register, handleSubmit, formState: { errors }} = useForm()
    const onSubmit = (data) => console.log(data)
    
    return (
        <Box
        width='100%'
        borderRadius='sm'
        backgroundColor='white'
        color='gray.700'
        >
            <FormControl>
                <Input marginTop='1rem' id='name' type='text' placeholder='Name' {...register("name", {required: true})} />
                <Input marginTop='1rem' id='email' type='email' placeholder='Email' {...register("email", {required: true})} />
                <Input marginTop='1rem' id='phone' type='text' placeholder='Phone' {...register("phone", {required: true})} />
                <Textarea marginTop='1rem' id='message' type='textarea' {...register("message", {required: true})} />
                <Checkbox marginTop='1rem' id='gdpr' type='checkbox' placeholder='GDPR' {...register("gdpr", {required: true})} >
                   <Text fontSize='0.8rem' color='gray.500'>
                        I consent to this website storing my details for communication
                   </Text>
                </Checkbox>
            </FormControl>
            <Button type='submit' colorScheme='blue' fontSize='xl' padding='2rem' marginTop='2rem'>Send Message</Button>
        </Box>
    )
}

export default ContactForm;