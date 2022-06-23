import {
Center,
Text,
Heading,
VStack,
Button,
Input,
HStack,
Container,
SimpleGrid,
Box,
Image,
Spinner,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
//   import { upload } from "@testing-library/user-event/dist/upload";
//   import userEvent from '@testing-library/user-event'
import Link from 'next/link'
import LoginForm from '../components/LoginForm'
import { signOut } from "next-auth/react";
import Header from "../components/Header";


function Upload() {
    const [isSelected, setIsSelected] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [allPhotos, setAllPhotos] = useState([]);
    const [uploadSuccessful, setUploadSuccessful] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false);

    useEffect(() => {
        fetch("https://photo-faker.vercel.app/api/photos")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setAllPhotos(data);
            });
    }, [uploadSuccessful]);

    const onInputChange = (e) => {
        console.log(e.target.files[0]);
        setIsSelected(true);

        setSelectedFile(e.target.files[0]);
    };
    const onButtonClick = (e) => {
        console.log("Button clicked..");
        e.target.value = "";
    };

    const logoutHandler = () => {
        signOut();
      };



    const onFileUpload = (e) => {
        setShowSpinner(true);
        const formData = new FormData();
        formData.append("file", selectedFile, selectedFile.name);
        fetch("https://photo-faker.vercel.app/api/photos", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success posting!!");
                setUploadSuccessful(!uploadSuccessful);
                setShowSpinner(false);
            });
    };
    return (
      
        <ChakraProvider>
                 <Link href="/">
                <a
                  className="text-danger"
                  onClick={logoutHandler}
                >
                  Logout
                </a>
              </Link>
            <Center bg="grey" color="white" padding={8}>
                <VStack spacing={7}>
                    <Heading>Photo Upload Page</Heading>
                    {/* <Text>Your Photo Gallery</Text> */}
                    <HStack>
                        <input
                            type="file"
                            onChange={onInputChange}
                            onClick={onButtonClick}
                        ></input>

                        <Button
                            size="sm"
                            colorScheme="red"
                            isDisabled={!isSelected}
                            onClick={onFileUpload}
                        >
                            Upload Photo
                        </Button>
                        {showSpinner && (
                            <Center>
                                <Spinner size="xl" />
                            </Center>
                        )}
                    </HStack>
                    <Heading fontSize={30}>This is Your Photo Gallery</Heading>
                    <SimpleGrid columns={3} spacing={8}>
                        {allPhotos.length !== 0 &&
                            allPhotos.map((photo, index) => {
                                return (
                                    <Image
                                        alt=""
                                        key={index}
                                        borderRadius={25}
                                        boxSize="300px"
                                        src={photo["photo_url"]}
                                        fallbackSrc="https://via.placeholder.com/150"
                                        objectFit="cover"
                                    />
                                
                                );
                            })}
                    </SimpleGrid>
                </VStack>
            </Center>
        </ChakraProvider>
    );
}

export default Upload;