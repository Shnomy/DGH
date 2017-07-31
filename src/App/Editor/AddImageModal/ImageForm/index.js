import React from 'react';
import {connect} from 'cerebral/react';
import {form} from '@cerebral/forms';
import {state} from 'cerebral/tags';
import {Form, Label, Input} from './elements';
import InputText from '../../../../common/InputText';
import InputSlider from '../../../../common/InputSlider';

export default connect({
  imageForm: form(state`edit.addImageForm`)
}, function ImageForm ({imageForm}) {
  return (
    <Form>
      <fieldset>
        <legend>{"Plassering:"}</legend>
        <InputSlider
          label={"Bredde"}
          unit={"%"}
          min={"0"}
          max={"100"}
          step={"5"}
          fieldPath={"edit.addImageForm.width"}
        />
        <Label>{"Plassering"}</Label>
        <Input name={"float"} type={"radio"} value={"left"} checked={imageForm.position.value === 'left'}/>{"Venstre"}
        <Input name={"float"} type={"radio"} value={false} checked={!imageForm.position.value}/>{"Senter"}
        <Input name={"float"} type={"radio"} value={"right"} checked={imageForm.position.value === 'right'}/>{"Høyre"}
      </fieldset>
      <fieldset>
        <legend>{"Bildetekst:"}</legend>
        <InputText
          label={"Tekst"}
          fieldPath={"edit.addImageForm.text"}
        />
        <InputText
          label={"Tekst"}
          fieldPath={"edit.addImageForm.altText"}
        />
      </fieldset>
      <fieldset>
        <legend>{"Ramme:"}</legend>
        <Label>{"Rammetykkelse"}</Label>
        <Input min="0" max="5" step="0.5" type={"range"} value={imageForm.border.value}/>{`${imageForm.border.value} px`}<br/>
        <InputText
          label={"Rammefarge"}
          fieldPath={"edit.addImageForm.color"}
        />
        <Label>{"Runde hjørner"}</Label>
        <Input min="0" max="100" step="1" type={"range"} value={imageForm.corners.value}/>{`${imageForm.corners.value} px`}<br/>
      </fieldset>
    </Form>
  );
});
