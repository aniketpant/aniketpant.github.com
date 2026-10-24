// The project pages, in one place: the /projects/ index, the home page strip,
// and anything else that needs to link to them.
//
// `featured` puts a project on the home page (the first three are shown).

export interface Project {
  slug: string;
  name: string;
  href: string;
  blurb: string;
  tags: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'botfiles',
    name: 'botfiles',
    href: '/botfiles/',
    blurb:
      'Agent configuration as one pi package, with adapters that run the same extensions under OpenCode V2.',
    tags: ['config', 'typescript', 'pi'],
    featured: true,
  },
  {
    slug: 'droidfiles',
    name: 'droidfiles',
    href: '/droidfiles/',
    blurb:
      'My Termux setup on Android: the packages I install on purpose, the dotfiles I care about, one restore script.',
    tags: ['android', 'shell', 'termux'],
    featured: true,
  },
  {
    slug: 'dotfiles',
    name: 'dotfiles',
    href: '/dotfiles/',
    blurb:
      'My Zsh, Ghostty and keyd setup, stowed onto a new machine: one palette across the shell and the TUI.',
    tags: ['shell', 'zsh', 'stow'],
    featured: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);
