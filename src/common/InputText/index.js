import React from 'react';
import {connect} from 'cerebral/react';
import {state} from 'cerebral/tags';
import {field} from '@cerebral/forms';

export default connect({
  field: field`${props`fieldPath`}`,
  onChange: signal`edit.fieldChanged`
}, function InputField({field, onChange, label, fieldPath}) {
  if (text) {
    return (
      <label>{label}</label>
      <input
        type={'text'}
        value={field.value}
        onChange={(e) => onChange({path: fieldPath, value: e.target.value})}
      />
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
