import type { Preview } from "@storybook/nextjs-vite"
import "../app/global.scss"
import "./env.scss"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: { test: "todo" },
  },
}

export default preview
