import React from 'react';
import {connect} from 'cerebral/react';
import {state, signal, props} from 'cerebral/tags';
import {field} from '@cerebral/forms';
import {Label, Input} from '../elements';

export default connect({
  field: field(state`${props`fieldPath`}`),
  onChange: signal`edit.fieldChanged`
}, function InputRadio({field, onChange, label, fieldPath, name, buttons = []}) {
  const buttonsElements = buttons.map((el) => {
    return (
      <span>
        <Label>{el.label}</Label>
        <Input
          type={"radio"}
          name={name}
          checked={el.value === field.value}
          value={el.value}
          onChange={(e) => onChange({path: fieldPath, value: e.target.value})}
        />
      </span>
    );
  });
  if (label) {
    return (
      <span>
        {buttonsElements}
      </span>
    );
  }
  return (
    <span>
      {buttonsElements}
    </span>
  );
});
