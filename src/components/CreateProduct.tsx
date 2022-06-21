import React from 'react';
import { Input, Label, Button,Error } from './CutsomStyledComponets';
import { useState, useEffect } from 'react';

type addPro = {
  addProduct: (pname: String, image: File) => void;
  fetchProduct: { id: String; name: String; image: File } | undefined;
  update: (id: String, pname: String, image: File) => void;
};

const CreateProduct: React.FC<addPro> = (props) => {
  const [pname, setPname] = useState<String>('');
  const [msg, setMsg] = useState('');
  const [updateEnable, setUpdateEnable] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File>();
 const avatarFileType = ["image/png", "image/jpeg"]
  const imageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
         let avatarFile = e.target.files[0];
         if (avatarFile && avatarFileType.includes(avatarFile.type)) {
           // size in bytes
           if (avatarFile.size <= 512000) {
            setSelectedImage(e.target.files[0]);
           } else {
           
             setMsg('select file with size below 500 KB!');
           }
         } else {
          
           setMsg('Please select Image file with (png | jpg | jpeg)!');
         }
      
    } else {
      setSelectedImage(null || undefined);
    }
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (pname && selectedImage) {
      props.addProduct(pname, selectedImage);
      setPname('');
      setMsg('');
      setSelectedImage(null || undefined);
      setUpdateEnable(false);
    } else {
      return setMsg('Please anter valid product name or image!');
    }
  };
  const updateHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (props.fetchProduct && pname && selectedImage) {
      props.update(props.fetchProduct.id, pname, selectedImage);
      setPname('');
      setMsg('');
      setSelectedImage(null || undefined);
      setUpdateEnable(false);
    } else {
      return setMsg('Please anter valid product name!');
    }
  };
  useEffect(() => {
    if (props.fetchProduct) {
      setPname(props.fetchProduct.name);
      setSelectedImage(props.fetchProduct.image);
      setUpdateEnable(true);
    }
  }, [props.fetchProduct]);
  const nameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPname(event.target.value);
  };
  return (
    <div>
      <h1>{updateEnable ? 'Update' : 'Add'} Products </h1>
      <Error>{msg}</Error>
      <form onSubmit={updateEnable ? updateHandler : submitHandler}>
        {selectedImage && (
          <div>
            <img
              src={
                typeof selectedImage !== 'string'
                  ? URL.createObjectURL(selectedImage)
                  : selectedImage
              }
              alt="Thumb"
              style={{ height: 200, width: 200 }}
            />
          </div>
        )}
        <br />
        <Label color="skyBlue" fontSize={'1.5em'}>
          <Input onChange={imageChange} accept="image/*" type="file" hidden />
          Choose Product Image
        </Label>
        <br />
        <Input
          color="skyBlue"
          border="2px"
          placeholder="Enter product name"
          value={pname}
          onChange={nameHandler}
        />
        <br />
        {/* {!updateEnable ? ( */}
          <Button type="submit">{updateEnable ?"Update":"Add"} Product</Button>
        {/* // ) : (
        //   <Button type="submit">Update Product</Button>
        // )} */}
      </form>
    </div>
  );
};

export default CreateProduct;
