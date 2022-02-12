import {
  HStack,
  Flex,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Text,
  Select,
  Textarea,
  Box,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

const buttonStyles = {
  padding: "10px",
  borderRadius: "50px",
  borderWidth: "1px",
  borderColor: "brand.300",
  borderStyle: "solid",
  width: "200px",
  height: "40px",
};
const Categories = [
  { value: "skin care", label: "Skin Care" },
  { value: "body care", label: "Body Care" },
  { value: "makeup", label: "Makeup" },
  { value: "hair care", label: "Hair Care" },
  { value: "nail care", label: "Nail Care" },
  { value: "fragrance", label: "Fragrance" },
  {
    value: "tools, devices and accessories",
    label: "Tools, Devices and Accessories",
  },
];

const AddProduct = () => {
  const navigate = useNavigate();

  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("metal and steel work");
  const [description, setDescription] = useState("");
  const [pricePerUnit, setPricePerUnit] = useState(null);
  const [unit, setUnit] = useState("");
  const [mainImage, setMainImage] = useState(null);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);

  const data = {
    item_name: itemName,
    item_description: description,
    item_price: pricePerUnit,
    item_measurement_unit: unit,
    item_main_image: mainImage,
    item_extra_image1: image1,
    item_extra_image2: image2,
    category: category,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    let form_data = new FormData();
    form_data.append("commodity_name", itemName);
    form_data.append("commodity_description", description);
    form_data.append("price", pricePerUnit);
    form_data.append("pricing_unit", unit);
    form_data.append("commodity_main_image", mainImage, mainImage.name);
    form_data.append("commodity_extra_image1", image1, image1?.name);
    form_data.append("commodity_extra_image2", image2, image2?.name);
    form_data.append("category", category);

    navigate("/admin/inventory");
  };

  const handleCancel = () => {
    navigate(`/admin/inventory`);
  };

  return (
    <HStack spacing={0} overflowY="hidden">
      <Sidebar />
      <Flex
        bg="brand.200"
        direction="column"
        maxWidth="85vw"
        width="85vw"
        h="100vh"
        p={30}
        overflowY="scroll"
      >
        <Text textAlign={"left"} fontSize={20} mb={5}>
          Add Product
        </Text>
        <VStack>
          <FormControl id="product-Name" isRequired>
            <FormLabel>Product Name</FormLabel>
            <Input
              onChange={(e) => setItemName(e.target.value)}
              variant="filled"
              width="100%"
              bg="white"
            />
          </FormControl>
          <FormControl id="category" isRequired>
            <FormLabel>Category</FormLabel>
            <Select
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              bg="white"
            >
              {Categories.map((category) => {
                return (
                  <option style={{ "text-transform": "capitalize" }}>
                    {category.value}
                  </option>
                );
              })}
            </Select>
            {/* <Input variant="filled" width="100%" /> */}
          </FormControl>
          <FormControl id="product-description" isRequired>
            <FormLabel>Product description</FormLabel>
            <Textarea
              onChange={(e) => setDescription(e.target.value)}
              variant="filled"
              width="100%"
              height="220px"
              bg="white"
            />
          </FormControl>

          <HStack alignItems="left" width="100%">
            <FormControl id="price" isRequired>
              <FormLabel>Price</FormLabel>
              <Input
                onChange={(e) => setPricePerUnit(e.target.value)}
                variant="filled"
                width="100%"
                bg="white"
              />
            </FormControl>
            <FormControl id="unit" isRequired>
              <FormLabel>Pricing Unit</FormLabel>
              <Input
                onChange={(e) => setUnit(e.target.value)}
                variant="filled"
                width="100%"
                bg="white"
              />
            </FormControl>
          </HStack>
          <Box
            as="span"
            alignSelf="left"
            fontSize={20}
            m={10}
            textAlign="left"
            w="100%"
          >
            Product Images
          </Box>
          <Text fontSize={10} m={10} textAlign="left" w="100%">
            You may upload up to 3 photos. Please upload good quality photos
          </Text>

          <HStack alignItems="left" w="100%" ml={0} spacing="2%">
            <FormControl id="price" isRequired>
              <FormLabel>Item Main Image</FormLabel>
              <input
                type="file"
                accept="image/png, image/jpeg"
                onChange={(e) => {
                  setMainImage(e.target.files[0]);
                }}
                width="100%"
                style={{
                  "border-width": "2px",
                  padding: "5px",
                  "border-radius": "5px",
                }}
              />
            </FormControl>
            <FormControl id="price">
              <FormLabel>Item Extra Image 1</FormLabel>
              <input
                type="file"
                accept="image/png, image/jpeg"
                onChange={(e) => {
                  setImage1(e.target.files[0]);
                }}
                width="100%"
                style={{
                  "border-width": "2px",
                  padding: "5px",
                  "border-radius": "5px",
                }}
              />
            </FormControl>
            <FormControl id="unit">
              <FormLabel>Item Extra Image 2</FormLabel>
              <input
                type="file"
                accept="image/png, image/jpeg"
                onChange={(e) => {
                  setImage2(e.target.files[0]);
                }}
                width="100%"
                style={{
                  "border-width": "2px",
                  padding: "5px",
                  "border-radius": "5px",
                }}
              />
            </FormControl>
          </HStack>
        </VStack>
        <HStack mt={4} alignItems="right" ml="62%">
          <ButtonGroup>
            <Button
              {...buttonStyles}
              onClick={handleCancel}
              background="#ffffff"
              color="brand.300"
            >
              Cancel
            </Button>
            <Button
              {...buttonStyles}
              background="brand.300"
              variant="solid"
              color="white"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </ButtonGroup>
        </HStack>
      </Flex>
    </HStack>
  );
};

export default AddProduct;
