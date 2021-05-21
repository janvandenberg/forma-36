import React from 'react';
import { ControlledInput, ControlledInputProps } from '..';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RadioButtonProps
  extends Omit<ControlledInputProps, 'isIndeterminate'> {}

const _RadioButton = (
  { testId = 'cf-ui-radio-button', ...otherProps }: RadioButtonProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  return (
    <ControlledInput testId={testId} type="radio" ref={ref} {...otherProps} />
  );
};

export const RadioButton = React.forwardRef(_RadioButton);