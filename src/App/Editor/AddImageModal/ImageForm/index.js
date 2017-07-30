import React from 'react';
import {connect} from 'cerebral/react';
import {form} from '@cerebral/forms';
import {state} from 'cerebral/tags';
import {Form, Label, Input} from './elements';

export default connect({
  imageForm: form(state`edit.addImageForm`)
}, function ImageForm ({imageForm}) {
  return (
    <Form>
      <fieldset>
        <legend>{"Plassering:"}</legend>
        <Label>{"Bredde"}</Label>
        <Input min="0" max="100" step="5" type={"range"} value={imageForm.width.value}/>{`${imageForm.width.value} %`}<br/>
        <Label>{"Plassering"}</Label>
        <Input name={"float"} type={"radio"} value={"left"} checked={imageForm.position.value === 'left'}/>{"Venstre"}
        <Input name={"float"} type={"radio"} value={false} checked={!imageForm.position.value}/>{"Senter"}
        <Input name={"float"} type={"radio"} value={"right"} checked={imageForm.position.value === 'right'}/>{"Høyre"}
      </fieldset>
      <fieldset>
        <legend>{"Bildetekst:"}</legend>
        <Label>{"Tekst"}</Label>
        <Input type={"text"} value={imageForm.text.value}/><br/>
        <Label>{"Alt Tekst"}</Label>
        <Input type={"text"} value={imageForm.altText.value}/>
      </fieldset>
      <fieldset>
        <legend>{"Ramme:"}</legend>
        <Label>{"Rammetykkelse"}</Label>
        <Input min="0" max="5" step="0.5" type={"range"} value={imageForm.border.value}/>{`${imageForm.border.value} px`}<br/>
        <Label>{"Rammefarge"}</Label>
        <Input type={"text"} value={imageForm.color.value}/><br/>
        <Label>{"Runde hjørner"}</Label>
        <Input min="0" max="100" step="1" type={"range"} value={imageForm.corners.value}/>{`${imageForm.corners.value} px`}<br/>
      </fieldset>
    </Form>
  );
});
