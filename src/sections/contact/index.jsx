import React, { useState, forwardRef } from "react";
import axios from "axios";
import { createGlobalStyle } from "styled-components";
import { AnimatePresence } from "framer-motion";

import Section from "components/section";
import Box from "components/box";
import { Heading } from "components/typography";
import { OutlinedButton } from "components/button";

import Modal from "./modal";
import { Form, Input } from "./form";

const PendingStyle = createGlobalStyle`* {cursor: wait !important}`;

const Contact = forwardRef((_, ref) => {
  const [formFields, setFormFields] = useState({
    name: "",
    contact: "",
    description: "",
  });
  const [formState, setFormState] = useState("initial");
  const [showModal, setShowModal] = useState(false);

  const onChange = (e) => {
    const { value, name } = e.target;

    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = { ...formFields };

    setFormState("pending");

    try {
      await axios.post(process.env.GATSBY_SUBMIT_URL, data);
      setFormState("sent");
    } catch {
      setFormState("failed");
    }

    setFormFields({
      name: "",
      contact: "",
      description: "",
    });

    setShowModal(true);
  };

  const requiredInputsNotFilled = !(formFields.name && formFields.contact);
  const isPending = formState === "pending";

  const disableButton = requiredInputsNotFilled || isPending;

  let modalHeading = "Заявка отправлена";
  let modalText = "Напишем в ближайшее время и обсудим детали проекта";

  if (formState === "failed") {
    modalHeading = "Что-то пошло не так";
    modalText = "Произошла ошибка при отправке заявки, попробуйте попозже";
  }

  const dismissModal = () => setShowModal(false);

  return (
    <Section ref={ref}>
      <Box gridColumn="span 12" pb={16}>
        <Heading>Связаться с нами</Heading>
      </Box>

      <Form onSubmit={onSubmit}>
        <Box gridColumn={["span 12", "span 6", "span 4", "span 3"]}>
          <Input
            name="name"
            label="Имя*"
            value={formFields.name}
            onChange={onChange}
            disabled={isPending}
          />
        </Box>

        <Box gridColumn={["span 12", "span 6", "span 4", "span 3"]}>
          <Input
            name="contact"
            label="Email/Telegram*"
            value={formFields.contact}
            onChange={onChange}
            disabled={isPending}
          />
        </Box>

        <Box gridColumn={["span 12", "span 12", "span 8", "1 / span 6"]}>
          <Input
            name="description"
            label="Расскажите о своем проекте"
            textarea
            minRows={3}
            value={formFields.description}
            onChange={onChange}
            disabled={isPending}
          />
        </Box>

        <Box gridColumn="span 12">
          <OutlinedButton disabled={disableButton}>Отправить</OutlinedButton>
        </Box>
      </Form>
      {formState === "pending" && <PendingStyle />}
      <AnimatePresence>
        {showModal && (
          <Modal
            onDismiss={dismissModal}
            heading={modalHeading}
            text={modalText}
          />
        )}
      </AnimatePresence>
    </Section>
  );
});

export default Contact;
