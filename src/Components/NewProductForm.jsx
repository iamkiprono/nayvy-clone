import * as React from "react";
import Input from "@mui/joy/Input";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import S3FORM from "./S3FORM";
import axios from "axios";

const NewProductForm = () => {
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

  const product = {
    name,
    description,
    features: featureList,
    link,
    price,
    currency,
  };

  const addFeature = (feature) => {
    setFeatureList((featureList) => [...featureList, feature]);
    setFeature("");
  };

  const addProduct = async () => {
    try {
      const token = await getAccessTokenSilently();

      const formData = new FormData();
      formData.append("image", banner);
      formData.append("name", name);
      formData.append("description", description);
      formData.append("features", featureList);
      formData.append("link", link);
      formData.append("price", price);
      formData.append("currency", currency);

      const res = await axios.post(
        "http://localhost:5000/products/",
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
      
      console.log(newProduct);
    } catch (error) {
      console.log(error)
      console.log(error.response.data.error)
      // console.log({ error: error.message });
    }
  };
  return (
    <div className="max-w-7xl m-auto p-6">
      {/* <S3FORM /> */}
      <TextField
        onChange={(e) => setname(e.target.value)}
        sx={{
          margin: "20px 0",
        }}
        fullWidth
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
      />
      <p>Tell use what your code is about</p>

      <TextField
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
        onChange={(e) => setLink(e.target.value)}
        sx={{
          margin: "20px 0",
        }}
        fullWidth
        label="Demo link"
        placeholder="Live link of your project"
      />
      <div className="flex md:flex-row flex-col gap-4">
        <TextField
          onChange={(e) => setPrice(e.target.value)}
          type="Number"
          label="Price"
          fullWidth
        />
        <TextField
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
      <Button
        onClick={() => addProduct()}
        sx={{ margin: "20px 0" }}
        variant="contained"
      >
        Create Product
      </Button>
    </div>
  );
};

export default NewProductForm;
