import { Meta, StoryObj } from "@storybook/react"

import ButtonRiseTact, { ButtonRiseTactProps } from "./ButtonRiseTact"

const meta: Meta<ButtonRiseTactProps> = {
  title: 'Molecules/ButtonRiseTact',
  component: ButtonRiseTact,
  argTypes: {
    children: {
      type: "string"
    },
    disabled: {
      type: "boolean"
    },
    className: {
      type: "string"
    },
  }
}

export default meta

export const Primary500: StoryObj<ButtonRiseTactProps> = {
  args: {
    children: 'Botão',
    variant: 'primary-500'
  }
}

export const Primary300: StoryObj<ButtonRiseTactProps> = {
  args: {
    children: 'Botão',
    variant: 'primary-300'
  }
}

export const Primary700: StoryObj<ButtonRiseTactProps> = {
  args: {
    children: 'Botão',
    variant: 'primary-700'
  }
}

export const Secondary500: StoryObj<ButtonRiseTactProps> = {
  args: {
    children: 'Botão',
    variant: 'secondary-500'
  }
}

export const Neutral500: StoryObj<ButtonRiseTactProps> = {
  args: {
    children: 'Botão',
    variant: 'neutral-500'
  }
}

export const White500: StoryObj<ButtonRiseTactProps> = {
  args: {
    children: 'Botão',
    variant: 'white-500'
  }
}

export const Black500: StoryObj<ButtonRiseTactProps> = {
  args: {
    children: 'Botão',
    variant: 'black-500'
  }
}

export const Danger: StoryObj<ButtonRiseTactProps> = {
  args: {
    children: 'Botão',
    variant: 'danger-500'
  }
}

export const Disabled: StoryObj<ButtonRiseTactProps> = {
  args: {
    children: 'Botão',
    disabled: true
  }
}

 

// export const Secondary: StoryObj<ButtonRiseTactProps> = {
//   args: {
//     children: 'Botão',
//     variant: 'secondary'
//   }
// }

// export const SecondaryDisabled: StoryObj<ButtonRiseTactProps> = {
//   args: {
//     children: 'Botão',
//     variant: 'secondary',
//     disabled: true
//   }
// }

// export const Tertiary: StoryObj<ButtonRiseTactProps> = {
//   args: {
//     children: 'Botão',
//     variant: 'tertiary'
//   }
// }

// export const TertiaryDisabled: StoryObj<ButtonRiseTactProps> = {
//   args: {
//     children: 'Botão',
//     variant: 'tertiary',
//     disabled: true
//   }
// }

// export const Violet: StoryObj<ButtonRiseTactProps> = {
//   args: {
//     children: 'Botão',
//     className: 'theme-violet'
//   }
// }

// export const VioletSecondary: StoryObj<ButtonRiseTactProps> = {
//   args: {
//     children: 'Botão',
//     className: 'theme-violet',
//     variant: 'secondary'
//   }
// }

// export const VioletTertiary: StoryObj<ButtonRiseTactProps> = {
//   args: {
//     children: 'Botão',
//     className: 'theme-violet',
//     variant: 'tertiary'
//   }
// }