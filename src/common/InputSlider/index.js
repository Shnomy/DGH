import React from 'react';
import {connect} from 'cerebral/react';
import {state, signal, props} from 'cerebral/tags';
import {field} from '@cerebral/forms';
import {Label, Input} from '../elements';


export default connect({
  field: field(state`${props`fieldPath`}`),
  onChange: signal`edit.fieldChanged`
}, function InputSlider({field, onChange, label, fieldPath, unit, min, max, step}) {
  if (label) {
    return (
      <span>
        <Label>{label}</Label>
        <Input
          type={'range'}
          min={min}
          max={max}
          step={step}
          value={field.value}
          onChange={(e) => onChange({path: fieldPath, value: e.target.value})}
        />
        {`${field.value} ${unit}`}
      </span>
    );
  }
  return (
    <span>
      <Input
        type={'slider'}
        min={min}
        max={max}
        step={step}
        value={field.value}
        onChange={(e) => onChange({path: fieldPath, value: e.target.value})}
      />
      {`${field.value} ${unit}`}
    </span>
  );
});
