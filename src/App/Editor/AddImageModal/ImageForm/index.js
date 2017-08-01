import React from 'react';
import {connect} from 'cerebral/react';
import {form} from '@cerebral/forms';
import {state} from 'cerebral/tags';
import {Form} from './elements';
import InputText from '../../../../common/InputText';
import InputSlider from '../../../../common/InputSlider';
import InputRadio from '../../../../common/InputRadio';

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
        <InputRadio
          label={"Plassering"}
          fieldPath={"edit.addImageForm.position"}
          name={"float"}
          buttons={[
            {label: "Venstre", value: "left"},
            {label: "Senter", value: "full"},
            {label: "Høyre", value: "right"},
          ]}
        />
      </fieldset>
      <fieldset>
        <legend>{"Bildetekst:"}</legend>
        <InputText
          label={"Tekst"}
          fieldPath={"edit.addImageForm.text"}
        />
        <InputText
          label={"Alternativ Tekst"}
          fieldPath={"edit.addImageForm.altText"}
        />
      </fieldset>
      <fieldset>
        <legend>{"Ramme:"}</legend>
        <InputSlider
          label={"Tykkelse"}
          unit={"px"}
          min={"0"}
          max={"5"}
          step={"0.5"}
          fieldPath={"edit.addImageForm.border"}
        />
        <InputText
          label={"Farge"}
          fieldPath={"edit.addImageForm.color"}
        />
        <InputSlider
          label={"Hjørne-radius"}
          unit={"px"}
          min={"0"}
          max={"100"}
          step={"1"}
          fieldPath={"edit.addImageForm.corners"}
        />
      </fieldset>
    </Form>
  );
});
