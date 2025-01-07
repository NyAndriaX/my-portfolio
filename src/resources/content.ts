const person = {
    firstName: 'Tsilavina Henintsoa',
    lastName: 'Andriamahafaly',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: 'Développeur Web & Mobile',
    avatar: '/images/avatar.jpg',
    available: true,
    languages: ['English', 'Francais']
}

const social = [
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'www.linkedin.com/in/tsilavina-henintsoa-andriamahafaly-6949a4247',
    },
]

const home = {
    label: 'Home',
    title: `${person.role}`,
    description: `Je crée des applications web et mobiles modernes et performantes. Je transforme vos idées en solutions digitales.`,
}

export { person, social, home }