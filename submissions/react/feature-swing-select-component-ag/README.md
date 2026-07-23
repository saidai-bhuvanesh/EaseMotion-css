# Swing Select React Component

## What does this do?
This submission implements a premium React dropdown component (`SwingSelect`) under the `submissions/react/` track. Upon option selection or success confirmation, the trigger element performs a realistic pendulum "Swing" animation.

## How is it used?
```jsx
import React, { useState } from 'react';
import { SwingSelect } from './SwingSelect';

function App() {
  const [status, setStatus] = useState('');
  
  const options = [
    { value: 'approved', label: 'Approved' },
    { value: 'pending', label: 'Pending Review' },
    { value: 'completed', label: 'Completed' }
  ];

  return (
    <SwingSelect
      options={options}
      value={status}
      onChange={setStatus}
      placeholder="Select status..."
    />
  );
}
```

## Properties
| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `options` | `Array` | Yes | `[]` | Array of objects representing each dropdown option: `{ value, label }` |
| `value` | `string` | No | `undefined` | The currently selected option's value |
| `onChange` | `function` | Yes | `undefined` | Callback fired when an option is selected: `(newValue) => {}` |
| `placeholder` | `string` | No | `'Select an option'` | Placeholder text shown when no value is selected |
