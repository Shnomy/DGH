import React from 'react';
import {connect} from 'cerebral/react';
import {state, signal, props} from 'cerebral/tags';
import {field} from '@cerebral/forms';
import {Label, Input, OptionWrapper, Wrapper, OptionLabel} from './elements';

export default connect({
  field: field(state`${props`fieldPath`}`),
  onChange: signal`edit.fieldChanged`
}, function InputRadio({field, onChange, label, fieldPath, name, buttons = []}) {
  const buttonsElements = buttons.map((el) => {
    return (
      <OptionWrapper key={el.label}>
        <OptionLabel>{el.label}</OptionLabel>
        <Input
          type={"radio"}
          name={name}
          checked={el.value === field.value}
          value={el.value}
          onChange={(e) => onChange({path: fieldPath, value: e.target.value})}
        />
      </OptionWrapper>
    );
  });
  if (label) {
    return (
      <Wrapper>
        <Label>{label}</Label>
        {buttonsElements}
      </Wrapper>
    );
  }
  return (
    <span>
      {buttonsElements}
    </span>
  );
});
