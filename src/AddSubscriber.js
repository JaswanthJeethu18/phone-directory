import React, { Component, useState } from "react";
import Header from "./Header";
import "./AddSubscriber.css";
import { Link, useHistory } from "react-router-dom";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

export default function AddSubscriber({ addSubscriberHandler }) {
  const [addSubscriberForm, setAddSubscriberForm] = useState({
    id: 0,
    name: "",
    phone: "",
  });
  `-`;
  const history = useHistory();

  const inputChangedHandler = (e) => {
    const state = addSubscriberForm;
    state[e.target.name] = e.target.value;
    setAddSubscriberForm({ ...state });
  };

  const onFormSubmitted = (e) => {
    e.preventDefault();
    addSubscriberHandler(addSubscriberForm);
    setAddSubscriberForm({ id: 0, name: "", phone: " " });
    history.push("/");
  };

  const { name, phone } = addSubscriberForm;

  return (
    <div>
      <Header heading="Add Subscriber" />
      <div className="component-body-container">
        <Link to="/">
          <button className="custom-btn">Back</button>
        </Link>

        <ValidatorForm className="subscriber-form" onSubmit={onFormSubmitted}>
          <TextValidator
            label="Enter Name"
            type="text"
            onChange={inputChangedHandler}
            name="name"
            value={name}
            validators={["required"]}
            errorMessages={["invalid name"]}
          ></TextValidator>

          <br />
          <br />

          <TextValidator
            label="Phone Number"
            type="text"
            onChange={inputChangedHandler}
            name="phone"
            value={phone}
            validators={["required"]}
            errorMessages={["invalid phone"]}
          ></TextValidator>

          <br />
          <br />

          <div className="subscriber-info-container">
            <span className="subscriber-to-add-heading">
              Subscriber to be added:{" "}
            </span>
            <br />
            <span className="subscriber-info">Name: {name}</span>
            <br />
            <span className="subscriber-info">Phone: {phone}</span>
            <br />
          </div>

          <button type="submit" className="custom-btn add-btn">
            Add
          </button>
        </ValidatorForm>
      </div>
    </div>
  );
}
