import React, {useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export default function CustomModal(props) {

  const [activeItem, setActiveItem] = useState(props.activeItem)

  return (
    <Modal isOpen={true} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle}>Todo Item</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="todo-title">Title</Label>
            <Input
              type="text"
              id="todo-title"
              name="title"
              value={activeItem.title}
              onChange={(e) => {
                setActiveItem({ ...activeItem, ["title"]: e.target.value });
              }}
              placeholder="Enter Todo Title"
            />
          </FormGroup>
          <FormGroup>
            <Label for="todo-description">Description</Label>
            <Input
              type="text"
              id="todo-description"
              name="description"
              value={activeItem.description}
              onChange={(e) => {
                setActiveItem({ ...activeItem, ["description"]: e.target.value });
              }}
              placeholder="Enter Todo description"
            />
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="completed"
                checked={activeItem.completed}
                onChange={(e) => {
                  setActiveItem({ ...activeItem, ["completed"]: e.target.checked });
                }}
              />
              Completed
            </Label>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button
          color="success"
          onClick={() => {
            props.onSave(activeItem);
            props.toggle()
          }
        }>
          Save
        </Button>
      </ModalFooter>
    </Modal>
  );
}