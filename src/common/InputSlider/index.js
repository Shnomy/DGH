import React from 'react';
import {connect} from 'cerebral/react';
import {state} from 'cerebral/tags';
import {field} from '@cerebral/forms';

export default connect({
  field: field`${props`fieldPath`}`,
  onChange: signal`edit.fieldChanged`
}, function InputSlider({field, onChange, label, fieldPath, unit}) {
  if (text) {
    return (
      <span>
        <label>{label}</label>
        <input
          type={'slider'}
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
        value={field.value}
        onChange={(e) => onChange({path: fieldPath, value: e.target.value})}
      />
      {`${field.value} ${unit}`}
    </span>
  );
});
