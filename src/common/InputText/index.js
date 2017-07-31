import React from 'react';
import {connect} from 'cerebral/react';
import {state} from 'cerebral/tags';
import {field} from '@cerebral/forms';

export default connect({
  field: field`${props`fieldPath`}`,
  onChange: signal`edit.fieldChanged`
}, function InputText({field, onChange, label, fieldPath}) {
  if (text) {
    return (
      <span>
        <label>{label}</label>
        <input
          type={'text'}
          value={field.value}
          onChange={(e) => onChange({path: fieldPath, value: e.target.value})}
        />
      </span>
    );
  }
  return (
    <input
      type={'text'}
      value={field.value}
      onChange={(e) => onChange({path: fieldPath, value: e.target.value})}
    />
  );
});
