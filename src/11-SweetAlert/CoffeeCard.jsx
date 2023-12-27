import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import React from "react";

//import sweetAlert
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { id, name, description, price, image } = coffee;

  const handleClick = (id) => {
    console.log(id, name);

    Swal.fire({
      title: "Are you sure?",
      text: "want to order this coffee?!",
      icon: "success",
      showConfirmButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm!",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Succeed!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" onClick={() => handleClick(id)}>
          Order Now
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CoffeeCard;
