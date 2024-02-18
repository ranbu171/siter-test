export const mocked_controls = [
  {
    type: 'slider',
    title: 'X',
    data_key: 'position_x',
    min: -100,
    step: 1,
    max: 100,
    startPoint: 0
  },
  {
    type: 'slider',
    title: 'Y',
    data_key: 'position_y',
    min: -100,
    step: 1,
    max: 100,
    startPoint: 0
  },
  {
    type: 'slider',
    title: 'Opacity',
    data_key: 'opacity',
    value_type: '%',
    min: 0,
    step: 1,
    max: 100
  },
  {
    type: 'slider',
    title: 'Scale',
    data_key: 'scale',
    step: 0.1,
    min: 0,
    startPoint: 0,
    max: 2
  },
  {
    type: 'slider',
    title: 'Blur',
    data_key: 'blur',
    step: 1,
    min: 0,
    max: 10
  },
  {
    type: 'slider',
    title: 'Speed',
    data_key: 'speed',
    value_type: 's',
    step: 0.1,
    min: 0.1,
    max: 3
  },
  {
    type: 'slider',
    title: 'Delay',
    data_key: 'delay',
    value_type: 's',
    step: 0.1,
    min: 0,
    max: 3
  },
  {
    type: 'select',
    title: 'Easing',
    data_key: 'easing',
    options: [
      {
        label: 'Linear',
        value: 'linear'
      },
      {
        label: 'Ease',
        value: 'ease'
      },
      {
        label: 'Ease-in',
        value: 'ease-in'
      },
      {
        label: 'Ease-out',
        value: 'ease-out'
      },
      {
        label: 'Ease-in-out',
        value: 'ease-in-out'
      },
      {
        label: 'Step-start',
        value: 'step-start'
      },
      {
        label: 'Step-end',
        value: 'step-end'
      }
    ]
  },
  {
    type: 'switch',
    title: 'Replay',
    data_key: 'replay'
  }
]
