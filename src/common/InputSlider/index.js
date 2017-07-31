import React from 'react';
import {connect} from 'cerebral/react';
import {state, signal, props} from 'cerebral/tags';
import {field} from '@cerebral/forms';

export default connect({
  field: field(state`${props`fieldPath`}`),
  onChange: signal`edit.fieldChanged`
}, function InputSlider({field, onChange, label, fieldPath, unit, min, max, step}) {
  if (label) {
    return (
      <span>
        <label>{label}</label>
        <input
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
      <input
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
