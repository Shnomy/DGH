import React from 'react';
import {connect} from 'cerebral/react';
import {state, props, signal} from 'cerebral/tags';
import {field} from '@cerebral/forms';
import {Label, Input} from '../elements';


export default connect({
  field: field(state`${props`fieldPath`}`),
  onChange: signal`edit.fieldChanged`
}, function InputText({field, onChange, label, fieldPath}) {
  if (label) {
    return (
      <span>
        <Label>{label}</Label>
        <Input
          type={'text'}
          value={field.value}
          onChange={(e) => onChange({path: fieldPath, value: e.target.value})}
        />
      </span>
    );
  }
  return (
    <Input
      type={'text'}
      value={field.value}
      onChange={(e) => onChange({path: fieldPath, value: e.target.value})}
    />
  );
});
