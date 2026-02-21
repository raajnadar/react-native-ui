import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
  docs: [
    { type: 'doc', id: 'index', label: 'Introduction' },
    { type: 'doc', id: 'installation', label: 'Installation' },
    { type: 'doc', id: 'theming', label: 'Theming' },
    {
      type: 'category',
      label: 'Components',
      collapsed: false,
      items: [
        'components/button',
        'components/card',
        'components/appbar',
        'components/icon-button',
        'components/text-field',
        'components/typography',
        'components/layout',
      ],
    },
  ],
}

export default sidebars
