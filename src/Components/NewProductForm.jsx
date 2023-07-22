import * as React from "react";
import Input from "@mui/joy/Input";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import S3FORM from "./S3FORM";
import axios from "axios";
// import imageCompression from "browser-image-compression";
import LoadingButton from "@mui/lab/LoadingButton";
import { useMutation } from "@tanstack/react-query";

import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const NewProductForm = () => {
  const notify = (name) =>
    toast(`${name} added successfully`, { autoClose: false });

  const { getAccessTokenSilently } = useAuth0();

  const [featureList, setFeatureList] = useState([]);
  const [feature, setFeature] = useState("");

  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [link, setLink] = useState("");
  const [price, setPrice] = useState(0);
  const [currency, setCurrency] = useState("");
  const [banner, setBanner] = useState(null);

  const currencies = [
    {
      value: "",
      label: "",
    },
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];

  const addFeature = (feature) => {
    setFeatureList((featureList) => [...featureList, feature]);
    setFeature("");
  };

  const addProduct = async () => {
    const token = await getAccessTokenSilently();
    // const options = {
    //   maxSizeMB: 1,
    //   maxWidthOrHeight: 1920,
    // };

    // const compressedFile = await imageCompression(banner, options);
    // console.table(compressedFile);
    const formData = new FormData();
    formData.append("image", banner);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("features", featureList);
    formData.append("link", link);
    formData.append("price", price);
    formData.append("currency", currency);

    const res = await axios.post(
      "https://nayvy-clone-api.onrender.com/products/",
      formData,
      {
        headers: {
          "content-type": "multipart/form-data",
          authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(res);
    const newProduct = await res.data;
    return newProduct;
  };

  const { mutate, isLoading, isError, error, data } = useMutation(addProduct);

  console.log(data);
  return (
    <>
      <form className="m-auto max-w-7xl p-6">
        {/* <S3FORM /> */}

        <TextField
          onChange={(e) => setname(e.target.value)}
          sx={{
            margin: "20px 0",
          }}
          fullWidth
          required
          size="lg"
          label="Name of project"
        />

        <TextField
          onChange={(e) => setdescription(e.target.value)}
          sx={{
            margin: "20px 0",
          }}
          fullWidth
          id="filled-multiline-flexible"
          label="Description"
          multiline
          required
        />
        <p>Tell use what your code is about</p>

        <TextField
          required
          value={feature}
          onChange={(e) => setFeature(e.target.value)}
          sx={{
            margin: "20px 0",
          }}
          fullWidth
          label="Features"
          placeholder="Type in a feature then click 'add feature' to add multiple features"
        />
        <ul className="list-disc">
          {featureList.map((f) => {
            return <li className="italic">{f}</li>;
          })}
        </ul>
        <Button onClick={() => addFeature(feature)} variant="outlined">
          Add feature
        </Button>
        <p className="mt-4">Banner:</p>
        <Input
          required
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            setBanner(file);
          }}
          sx={{
            margin: "20px 0",
            padding: "50px ",
          }}
          size="lg"
          type="file"
        />
        <TextField
          required
          onChange={(e) => setLink(e.target.value)}
          sx={{
            margin: "20px 0",
          }}
          fullWidth
          label="Demo link"
          placeholder="Live link of your project"
        />
        <div className="flex flex-col gap-4 md:flex-row">
          <TextField
            required
            onChange={(e) => setPrice(e.target.value)}
            type="Number"
            label="Price"
            fullWidth
          />
          <TextField
            required
            onChange={(e) => setCurrency(e.target.value)}
            fullWidth
            id="outlined-select-currency-native"
            select
            label="Currency"
            defaultValue="EUR"
            SelectProps={{
              native: true,
            }}
            helperText="Please select your currency"
          >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </div>
        {isError && (
          <Stack sx={{ width: "100%", position: "sticky" }} spacing={2}>
            <Alert severity="error">{error.response.data.error}</Alert>
          </Stack>
        )}
        {data && (
          <Stack sx={{ width: "100%", position: "sticky" }} spacing={2}>
            <Alert severity="success">{data.name} added</Alert>
          </Stack>
        )}
        <LoadingButton
          loading={isLoading}
          disabled={isLoading}
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            mutate();
          }}
          sx={{ margin: "20px 0" }}
          variant="contained"
        >
          Create Product
        </LoadingButton>
   
      </form>
    </>
  );
};

export default NewProductForm;
