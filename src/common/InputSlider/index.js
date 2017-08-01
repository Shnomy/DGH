import React from 'react';
import {connect} from 'cerebral/react';
import {state, signal, props} from 'cerebral/tags';
import {field} from '@cerebral/forms';
import {Label, Input, Wrapper, InputWrapper, Value} from './elements';


export default connect({
  field: field(state`${props`fieldPath`}`),
  onChange: signal`edit.fieldChanged`
}, function InputSlider({field, onChange, label, fieldPath, unit, min, max, step}) {
  if (label) {
    return (
      <Wrapper>
        <Label>{label}</Label>
        <InputWrapper>
          <Input
            type={'range'}
            min={min}
            max={max}
            step={step}
            value={field.value}
            onChange={(e) => onChange({path: fieldPath, value: e.target.value})}
          />
          <Value>
            {`${field.value} ${unit}`}
          </Value>
        </InputWrapper>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <InputWrapper>
        <Input
          type={'slider'}
          min={min}
          max={max}
          step={step}
          value={field.value}
          onChange={(e) => onChange({path: fieldPath, value: e.target.value})}
        />
        <Value>
          {`${field.value} ${unit}`}
        </Value>
      </InputWrapper>
    </Wrapper>
  );
});
