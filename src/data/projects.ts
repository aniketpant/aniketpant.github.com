// The home page strip. Everything lives on one page now — /dev-tooling/ — so
// there is one entry to keep, plus one row per repository inside it.

export interface Tool {
  name: string;
  href: string;
  blurb: string;
}

export interface Project {
  slug: string;
  name: string;
  href: string;
  blurb: string;
  entries: Tool[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'dev-tooling',
    name: 'Dev tooling',
    href: '/dev-tooling/',
    blurb:
      'Three repositories that rebuild my machine: the agent configuration every session loads, the Termux setup on my phone, and the shell I stow onto every machine. Each section keeps the constraint that shaped it.',
    entries: [
      {
        name: 'botfiles',
        href: '/dev-tooling/#botfiles',
        blurb: 'Agent configuration for pi and OpenCode V2.',
      },
      {
        name: 'droidfiles',
        href: '/dev-tooling/#droidfiles',
        blurb:
          'The Termux setup: packages installed on purpose, dotfiles, one restore script.',
      },
      {
        name: 'dotfiles',
        href: '/dev-tooling/#dotfiles',
        blurb: 'Zsh, Ghostty and keyd, stowed into the home directory.',
      },
    ],
    featured: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
